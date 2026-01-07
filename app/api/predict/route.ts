export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nitrogen, phosphorus, potassium, temperature, humidity, ph, rainfall } = body

    // --------------------------------------------------------
    // TODO: PASTE YOUR COLAB NGROK URL HERE
    // Example: "https://1234-56-78-90.ngrok-free.app/predict"
    const COLAB_API_URL = "https://unrising-corrie-morosely.ngrok-free.dev/predict"
    // --------------------------------------------------------

    if (!COLAB_API_URL) {
      return Response.json({
        crop: "Model Not Connected",
        confidence: 0,
        advisory: "To connect your model: Open 'app/api/predict/route.ts' and paste your Colab Ngrok URL into the 'COLAB_API_URL' variable.",
      })
    }

    try {
      const externalResponse = await fetch(COLAB_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true", // Skips the Ngrok warning page
        },
        body: JSON.stringify({
          nitrogen,
          phosphorus,
          potassium,
          temperature,
          humidity,
          ph,
          rainfall,
        }),
      })

      if (!externalResponse.ok) {
        throw new Error(`External model responded with status: ${externalResponse.status}`)
      }

      const data = await externalResponse.json()
      return Response.json(data)
    } catch (error) {
      console.error("External model connection failed:", error)
      return Response.json({
        error: "Failed to connect to Colab. Check if the notebook is running and the URL is correct."
      }, { status: 502 })
    }
  } catch (error) {
    console.error("Prediction route error:", error)
    const message = error instanceof Error ? error.message : "Unknown error"
    return Response.json({ error: `Failed to process prediction: ${message}` }, { status: 400 })
  }
}
