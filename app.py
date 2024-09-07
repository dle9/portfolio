from flask import Flask, request, jsonify
from flask_cors import CORS
import logging
from datetime import datetime
import os

app = Flask(__name__)

# Set up basic logging configuration
logging.basicConfig(
    filename='api.log',
    level=logging.DEBUG,
)

# Configure CORS
CORS(app, resources={r"/check_lvl1": {"origins": ["https://0a6800fb04ac149e80e876d300440056.web-security-academy.net","https://dericle.com", "http://localhost:5173"]}})

# Load level 1 password from environment variable
lvl1pass = os.getenv('LVL1PASS')

@app.route('/check_lvl1', methods=['GET', 'POST'])
def check_lvl1():
    if request.method == 'POST':
        # Get user input from the request JSON payload
        data = request.get_json()
        user_input = data.get('password')

        currtime = datetime.now()
        ip = request.environ.get('HTTP_X_REAL_IP')
        logging.info(f"Time:{currtime} IP:{ip}, Pass:{user_input}")

        # Check if the provided password matches the stored password
        if user_input == lvl1pass:
            return jsonify({"status": "success", "message": "Correct!"}), 200
        else:
            return jsonify({"status": "error", "message": "Incorrect!"}), 400

    elif request.method == 'GET':
        return "nothing to see here!", 200

if __name__ == '__main__':
    app.run(debug=True)

