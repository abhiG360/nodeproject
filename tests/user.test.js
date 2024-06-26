const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

describe('User API', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create a user', async () => {
    const res = await request(app)
      .post('/worko/user')
      .send({
        email: 'test@example.com',
        name: 'Test User',
        age: 30,
        city: 'Test City',
        zipCode: '12345',
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });


});
