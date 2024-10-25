const supertest = require('supertest');
const fs = require('fs')




describe('GETs', function () {
    const request = supertest('https://gorest.co.in');
    it('/public/v2/users/7480808/posts', function (done) {
        const res = request
            .get('/public/v2/users/7480808/posts')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });
    it('/public/v2/users/7480808/comments', function (done) {
        request
            .get('/public/v2/posts/7480808/comments')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });
    it('/public/v2/users/7480808/todos', function (done) {
        request
            .get('/public/v2/users/7480808/todos')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });
});

describe('POSTs', function () {
    const user1 = {
        name: 'testtestor',
        gender: 'male',
        email: `test${Math.floor(Math.random() * 9999)}@test.com`,
        status: 'active',
      }
    const request = supertest('https://gorest.co.in');
    it('/public/v2/users', async function (done) {
        const res = request
            .post('/public/v2/users')
            .set('Authorization', 'Bearer d738c4fb8381ffb2ff86bdaf75957bc31b1c33200605a10a56dc2464546be9fe')
            .send(user1)
            .expect('Content-Type', /json/)
            .expect(200)
            .done((res)=>{
                expect(res.body).to.include(user1);
                expect(res.body).to.have.property('id');
                
            })
        
            expect(res.body).to.include(user1);
            expect(res.body).to.have.property('id');
    });
    it('/public/v2/users/6942216/posts', async function (done) {
        const res = request
            .post('/public/v2/users/7480809/posts')
            .set('Authorization', 'Bearer d738c4fb8381ffb2ff86bdaf75957bc31b1c33200605a10a56dc2464546be9fe')
            .send(user1)
            .expect('Content-Type', /json/)
            .expect(200);
        
        expect(res.body).to.include(user1);
        expect(res.body).to.have.property('id');
    });
    it('/public/v2/users/7480808/todos', async function (done) {
        request
            .post('/public/v2/users/7480808/todos')
            .set('Accept', 'application/json')
            .set('Authorization', 'Bearer d738c4fb8381ffb2ff86bdaf75957bc31b1c33200605a10a56dc2464546be9fe')
            .send({ title: 'todo title', status: 'started' })
            .expect('Content-Type', /json/)
            .expect(200, done);

        
        expect(res.body).to.include(user1);
        expect(res.body).to.have.property('id');
    });
});