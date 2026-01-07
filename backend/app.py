from flask import Flask, request, jsonify
import pickle
from flask_cors import CORS # Added CORS to allow frontend to communicate

app = Flask(__name__)
CORS(app) # Enable CORS

try:
    model = pickle.load(open("crop_model.pkl", "rb"))
except FileNotFoundError:
    print("Warning: 'crop_model.pkl' not found. Please place your model file in the backend directory.")
    model = None

@app.route("/predict", methods=["POST"])
def predict():
    if not model:
        return jsonify({"status": "error", "message": "Model not loaded"}), 500

    try:
        data = request.json

        features = [[
            float(data["nitrogen"]),
            float(data["phosphorus"]),
            float(data["potassium"]),
            float(data["temperature"]),
            float(data["humidity"]),
            float(data["ph"]),
            float(data["rainfall"])
        ]]

        prediction = model.predict(features)[0]

        return jsonify({
            "crop": str(prediction),
            "status": "success"
        })
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 400

if __name__ == "__main__":
    app.run(port=5000)
