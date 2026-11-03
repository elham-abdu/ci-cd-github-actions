const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
//npm pkg set scripts.start="node server.js"
//npm start
//http://localhost:3000/health?utm_source=chatgpt.com