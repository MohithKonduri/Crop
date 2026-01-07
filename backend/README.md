# Smart Crop Advisory Backend

This is the Flask backend for the Smart Crop Advisory System.

## Setup

1.  **Place your model file**: Ensure you have your trained `crop_model.pkl` file in this directory.
2.  **Install dependencies**:
    ```bash
    pip install -r requirements.txt
    ```
3.  **Run the server**:
    ```bash
    python app.py
    ```

The server will start on `http://localhost:5000`.

## API Endpoints

### `POST /predict`

Accepts JSON input with soil and weather parameters:

```json
{
    "nitrogen": 90,
    "phosphorus": 42,
    "potassium": 43,
    "temperature": 20.8,
    "humidity": 82.0,
    "ph": 6.5,
    "rainfall": 202.9
}
```

Returns:

```json
{
    "crop": "rice",
    "status": "success"
}
```
