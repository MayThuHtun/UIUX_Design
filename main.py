from flask import Flask, render_template, url_for

myapp=Flask(__name__)

@myapp.route("/")
def main():
    return render_template("index.html")

@myapp.route("/home")
def home():
    return render_template("home.html")

if __name__=="__main__":
    myapp.run(debug=True)
