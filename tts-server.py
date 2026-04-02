from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
import subprocess

class TTSHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        query = parse_qs(urlparse(self.path).query)
        text = query.get('text', [''])[0]
        speed = query.get('speed', ['150'])[0]
        volume = query.get('volume', ['80'])[0]
        if text:
            subprocess.Popen(
                'espeak -s {} -a {} --stdout "{}" | aplay -D plughw:3,0'.format(speed, volume, text),
                shell=True, stderr=subprocess.DEVNULL
            )
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Content-Type', 'text/plain')
        self.end_headers()
        self.wfile.write(b'ok')

    def log_message(self, format, *args):
        pass

HTTPServer(('127.0.0.1', 5111), TTSHandler).serve_forever()
