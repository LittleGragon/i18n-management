from flask import Flask
from flask import render_template, send_from_directory
import os

root_file_folder ='app/public/local'
app = Flask(__name__, root_path=root_file_folder)

@app.route('/js/<path:path>')
def send_js(path):
    print(path)
    static_file_path = os.path.join(os.getcwd(), root_file_folder, 'static', path)
    print('static', static_file_path)
    return send_from_directory(static_file_path, path)

# @app.route('/js/<path:path>')
# def serve_static(path):
#     root_dir = os.path.dirname(os.getcwd())
#     print(os.getcwd())
#     static_file_path = os.path.join(os.getcwd(), root_file_folder, 'static', path)
#     print(os.path.isfile(static_file_path))
#     print(static_file_path)
#     return app.send_static_file(static_file_path)

# def root_dir():  # pragma: no cover
#     return os.path.abspath(os.path.dirname(__file__))
# def get_file(filename):  # pragma: no cover
#     try:
#         src = os.path.join(root_dir(), filename)
#         # Figure out how flask returns static files
#         # Tried:
#         # - render_template
#         # - send_file
#         # This should not be so non-obvious
#         return open(src).read()
#     except IOError as exc:
#         return str(exc)

@app.route('/', methods = ['get'])
def home():
  return render_template('index.html') 
# @app.route('/<path:path>')
# def get_resource(path):  # pragma: no cover
#     mimetypes = {
#         ".css": "text/css",
#         ".html": "text/html",
#         ".js": "application/javascript",
#     }
#     complete_path = os.path.join(root_dir(), path)
#     ext = os.path.splitext(path)[1]
#     mimetype = mimetypes.get(ext, "text/html")
#     content = get_file(complete_path)
#     return Response(content, mimetype=mimetype)
    
if __name__ == '__main__':
  app.run()