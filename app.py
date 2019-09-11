from flask import Flask
from flask import render_template, send_from_directory,url_for
import os

root_file_folder ='app/public/local'
app = Flask(__name__)

@app.route('/', methods = ['get'])
def home():
  return render_template('index.html') 
    
if __name__ == '__main__':
  app.run()