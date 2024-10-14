require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Groq = require('groq-sdk');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize the Groq SDK client with the API key from the environment variable
const GROQ_API_KEY = process.env.GROQ_API_KEY;

if (!GROQ_API_KEY) {
    throw new Error("The GROQ_API_KEY environment variable is missing or empty.");
}

const groq = new Groq({ apiKey: GROQ_API_KEY });

app.post('/groq-debug', async (req, res) => {
    const { code, language } = req.body;

    if (!code || !language) {
        return res.status(400).json({ error: 'Code and language are required' });
    }

    try {
        const response = await groq.chat.completions.create({
            messages: [
                {
                    role: 'user',
                    content: `Please debug the following ${language} code and provide any necessary fixes with comments:\n\n${code}`,
                },
            ],
            model: 'llama3-70b-8192',
        });

        res.json({
            debuggedCode: response.choices[0]?.message?.content || 'No debug information returned',
        });
    } catch (error) {
        console.error('Error interacting with Groq API:', error);
        res.status(500).json({ error: 'Error processing the code with Groq API' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
