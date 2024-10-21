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
            .send({ name: 'john' })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    });
    it('/public/v2/users/6942216/posts', function (done) {
        request('https://gorest.co.in')
            .post('/public/v2/users/7480809/posts')
            .send({ body: 'post body' })
            .set('Accept', 'application/json')
            .set('Authorization', 'Bearer d738c4fb8381ffb2ff86bdaf75957bc31b1c33200605a10a56dc2464546be9fe')
            .expect('Content-Type', /json/)
            .expect(200)
    });
    it('/public/v2/users/7480808/todos', function (done) {
        request('https://gorest.co.in')
            .post('/public/v2/users/7480808/todos')
            .send({ title: 'todo title', status: 'started' })
            .set('Accept', 'application/json')
            .set('Authorization', 'd738c4fb8381ffb2ff86bdaf75957bc31b1c33200605a10a56dc2464546be9fe')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });
});