from flask import Flask, render_template, request
import sqlite3 as sql

app = Flask('__name__')
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

@app.route('/')
def index():
  conn = sql.connect('todo.db')
  todos = conn.execute("SELECT NAME, DESCRIPTION, STATUS from TODOS")
  return render_template('index.html', todos = todos)

@app.route('/addtask')
def addtask(methods=['GET', 'POST']):
  name = request.args.get('name')
  description = request.args.get('description')
  conn = sql.connect('todo.db')
  conn.execute("INSERT INTO TODOS (NAME, DESCRIPTION, STATUS) \
        VALUES (?, ?, 0)",
        (name, description))
  conn.commit()
  todos = conn.execute("SELECT NAME, DESCRIPTION, STATUS from TODOS")
  return "thisreturnstatementdoesnotmatter"

@app.route('/completeTask')
def completeTask(methods=['GET','POST']):
    name = request.args.get('name')
    print('name from request:'+ name)
    status = request.args.get('status')
    print('status from request:'+ status)
    conn = sql.connect('todo.db')
    conn.execute("UPDATE todos SET status=? WHERE name=?", (status, name))
    conn.commit()
    return "thisreturnstatementdoesnotmatter"

@app.route('/deleteAllDone')
def deleteAllDone(methods=['GET', 'POST']):
    delete = request.args.get('delete')
    print(delete)
    conn = sql.connect('todo.db')
    conn.execute("DELETE from TODOS where STATUS = 1;")
    conn.commit()
    return "thisreturnstatementdoesnotmatter"

if __name__ == '__main__':
    app.run(debug = True, host = '0.0.0.0') # ! Remove debug = True when done