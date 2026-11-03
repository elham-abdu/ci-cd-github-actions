
const express = require('express');

const app = express();

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'correct',
        time: Date.now()
    });
});

module.exports = app;
