const request = require('supertest');
const fs = require('fs')

describe('GETs', function () {
    it('/public/v2/users/7480808/posts', function (done) {
        request('https://gorest.co.in')
            .get('/public/v2/users/7480808/posts')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });
    it('/public/v2/users/7480808/comments', function (done) {
        request('https://gorest.co.in')
            .get('/public/v2/posts/7480808/comments')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });
    it('/public/v2/users/7480808/todos', function (done) {
        request('https://gorest.co.in')
            .get('/public/v2/users/7480808/todos')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });
});

describe('POSTs', function () {
    it('/public/v2/users', function (done) {
        request('https://gorest.co.in')
            .post('/public/v2/users')
            .send({
                email: `test${Math.floor(Math.random() * 9999)}@test.com`,
                name: 'testtestor',
                gender: 'male',
                status: 'inactive',
              })
            .set('Accept', 'application/json')
            .set('Authorization', 'Bearer d738c4fb8381ffb2ff86bdaf75957bc31b1c33200605a10a56dc2464546be9fe')
            .expect('Content-Type', /json/)
            .expect(200)
    });
    it('/public/v2/users/6942216/posts', function (done) {
        request('https://gorest.co.in')
            .post('/public/v2/users/7480809/posts')
            .send({
                email: `test${Math.floor(Math.random() * 9999)}@test.com`,
                name: 'testtestor',
                gender: 'male',
                status: 'inactive',
              })
            .set('Accept', 'application/json')
            .send('Authorization', 'Bearer d738c4fb8381ffb2ff86bdaf75957bc31b1c33200605a10a56dc2464546be9fe')
            .expect('Content-Type', /json/)
            .expect(200)
    });
    it('/public/v2/users/7480808/todos', function (done) {
        request('https://gorest.co.in')
            .post('/public/v2/users/7480808/todos')
            .set('Accept', 'application/json')
            .set('Authorization', 'Bearer d738c4fb8381ffb2ff86bdaf75957bc31b1c33200605a10a56dc2464546be9fe')
            .send({ title: 'todo title', status: 'started' })
            .expect('Content-Type', /json/)
            .expect(200, done)
    });
});