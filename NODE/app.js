const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// const API_KEY = 'https://todoapi-1txe.onrender.com/';
const API_URL = 'https://todoapi-1txe.onrender.com';

app.get('/apps', async (req, res) => {
    try {
        const response = await axios.get(`${API_URL}/selectAll`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('שגיאה בעת קבלת הנתונים');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
