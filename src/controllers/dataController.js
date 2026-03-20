const axios = require('axios');

const processData = async (req, res) => {
  try {
    const data = req.body;
    console.log("Data received from client:", data);
    
    // Replace with the actual external API URL
    const externalApiUrl = 'https://hook.eu2.make.com/ogvgn9sz77vuwy6phdm9ag5fgjlyceaw'; 

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
