from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/check_lvl1": {"origins": ["https://dericle.com","http://localhost:5173"]}})

lvl1 = "dle{al4pA_arCaD3_roCK5}"

@app.route('/check_lvl1', methods=['GET','POST'])
def check_lvl1():
    if request.method == 'POST':
        data = request.get_json()
        user_input = data.get('password')

        if user_input == lvl1:
            return jsonify({"status": "success", "message": "Correct!"}), 200
        else:
            return jsonify({"status": "error", "message": "Incorrect!"}), 400
    elif request.method == 'GET':
        return "nothing to see here!", 200

if __name__ == '__main__':
    app.run(debug=True)

