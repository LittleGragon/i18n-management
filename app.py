from flask import Flask
from flask import render_template, send_from_directory,url_for, request
import xlrd
import os

UPLOAD_FOLDER = '/path/to/the/uploads'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
root_file_folder ='app/public/local'
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route('/', methods = ['get'])
def home():
  return render_template('index.html')
@app.route('/upload/excel', methods = ['post'])
def upload():
  file = request.files['file']
  book = xlrd.open_workbook('i18n.xlsx')
  print("表单数量:", book.nsheets)
  print('hello upload')
  print(book)
  return 'success'
    
if __name__ == '__main__':
  app.run()