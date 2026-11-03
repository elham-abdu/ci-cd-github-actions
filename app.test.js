
const request = require('supertest');
const app = require('./app');

describe('Health Check API', () => {

    test('GET /health returns 200 status', async () => {
        const response = await request(app).get('/health');

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('ok'); // This assertion is intentionally incorrect to demonstrate a failing test
    });

});
