from flask import Flask,render_template,request


app = Flask(__name__)

@app.route('/')
def home():
    return render_template('pages/home.html',title='Music Player')