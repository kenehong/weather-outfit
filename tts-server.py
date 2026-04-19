from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
import subprocess

PIPER_BIN = '/home/kenehong/piper/piper/piper'
PIPER_MODEL = '/home/kenehong/piper/en_US-amy-medium.onnx'

class TTSHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        query = parse_qs(urlparse(self.path).query)
        text = query.get('text', [''])[0]
        volume = query.get('volume', ['80'])[0]
        if text:
            safe_text = text.replace('"', '\\"')
            vol_factor = max(0, min(100, int(volume))) / 100.0
            subprocess.Popen(
                'echo "{}" | {} --model {} --output-raw'
                ' | sox -t raw -r 22050 -e signed -b 16 -c 1 - -t raw - vol {}'
                ' | aplay -D default -r 22050 -f S16_LE -c 1'.format(
                    safe_text, PIPER_BIN, PIPER_MODEL, vol_factor),
                shell=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL
            )
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Content-Type', 'text/plain')
        self.end_headers()
        self.wfile.write(b'ok')

    def log_message(self, format, *args):
        pass

HTTPServer(('127.0.0.1', 5111), TTSHandler).serve_forever()
