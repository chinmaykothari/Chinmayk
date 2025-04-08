from flask import Flask
import getpass
from datetime import datetime
import subprocess
import pytz

app = Flask(__name__)

@app.route('/')
def home():
    return "Flask app is running!"

@app.route('/htop')
def htop():
    name = "Chinmay Kothari"  # Replace with your full name
    username = getpass.getuser()

    # Get current IST time
    ist = pytz.timezone('Asia/Kolkata')
    current_time = datetime.now(ist).strftime('%Y-%m-%d %H:%M:%S.%f')

    # Run top command
    try:
        top_output = subprocess.check_output(["top", "-b", "-n", "1"], text=True, timeout=5)
    except subprocess.TimeoutExpired:
        top_output = "top command timed out."

    html = f"""
    <h3>Name: {name}</h3>
    <h3>User: {username}</h3>
    <h3>Server Time (IST): {current_time}</h3>
    <h3>TOP output:</h3>
    <pre>{top_output}</pre>
    """
    return html

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
