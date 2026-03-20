const axios = require('axios');

const processData = async (req, res) => {
  try {
    const data = req.body;
    console.log("Data received from client:", data);
    
    // Replace with the actual external API URL
    const externalApiUrl = 'https://totogaming.app.n8n.cloud/webhook/86d60b2a-0d2b-4b1d-a21d-39c1e20530a5'; 

    const response = await axios.post(externalApiUrl, {
      ...data,
    });

    res.status(200).json({ message: 'Data processed successfully', response: response.data });
  } catch (error) {
    console.error("Error processing data:", error.message);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = {
  processData,
};
