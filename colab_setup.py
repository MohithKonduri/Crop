# Step 1: Install necessary libraries
!pip install flask flask-cors pyngrok

# Step 2: Import libraries
from flask import Flask, request, jsonify
from flask_cors import CORS
from pyngrok import ngrok
import threading

# Step 3: Initialize Flask App
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# ---------------------------------------------------------
# Step 4: LOAD YOUR MODEL HERE
# Replace this section with your actual model loading code.
# For example:
# import joblib
# model = joblib.load('your_model.pkl')
# ---------------------------------------------------------

def get_prediction_from_model(data):
    """
    Dummy prediction logic. 
    Replace this with: return model.predict([[...]])[0]
    """
    # Extract features from data dictionary
    # Ensure the order matches your model's training data
    nitrogen = data.get('nitrogen', 0)
    phosphorus = data.get('phosphorus', 0)
    potassium = data.get('potassium', 0)
    temperature = data.get('temperature', 0)
    humidity = data.get('humidity', 0)
    ph = data.get('ph', 0)
    rainfall = data.get('rainfall', 0)
    
    # Example input vector
    features = [[nitrogen, phosphorus, potassium, temperature, humidity, ph, rainfall]]
    
    # prediction = model.predict(features)[0]
    # return prediction
    
    return "Rice" # Dummy return

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        print("Received data:", data)
        
        # Get prediction
        predicted_crop = get_prediction_from_model(data)
        
        response = {
            "crop": predicted_crop,
            "confidence": 0.95, # You can calculate actual confidence if your model supports it
            "advisory": f"{predicted_crop} is recommended based on the provided soil and weather conditions."
        }
        return jsonify(response)
    
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500

# Step 5: Run the app and expose it via ngrok
def run_app():
    app.run(port=5000)

# Run Flask in a separate thread
threading.Thread(target=run_app).start()

# Open a tunnel to port 5000
# NOTE: You might need to sign up for a free ngrok account and set your authtoken first!
# !ngrok config add-authtoken <YOUR_AUTHTOKEN>
public_url = ngrok.connect(5000).public_url
print(f"✅ Your Colab API is live at: {public_url}/predict")
print("Copy the above URL and paste it into your web app's 'Colab Model URL' field.")
