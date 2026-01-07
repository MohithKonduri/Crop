import pickle
import numpy as np

# Dummy class to simulate a sklearn model
class DummyModel:
    def predict(self, features):
        # Return a random crop just for testing connectivity
        citations = ["Rice", "Wheat", "Corn", "Cotton", "Sugarcane", "Potato"]
        return [citations[np.random.randint(0, len(citations))]]

# Save dummy model
model = DummyModel()
with open("crop_model.pkl", "wb") as f:
    pickle.dump(model, f)

print("Dummy 'crop_model.pkl' created. Replace this with your actual model!")
