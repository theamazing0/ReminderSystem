from flask import Flask, render_template, request

app = Flask('__name__')
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/addtask')
def addtask(methods=['GET', 'POST']):
  name = request.args.get('name')

if __name__ == '__main__':
    app.run(debug = True, host = '0.0.0.0') # ! Remove debug = True when done