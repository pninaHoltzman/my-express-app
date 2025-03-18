const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// הוסף את ה-API Key שלך כאן
const API_KEY = 'https://todoapi-1txe.onrender.com/';

app.get('/apps', async (req, res) => {
    try {
        const response = await axios.get('https://todolistreact-master-ni2s.onrender.com', {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
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
