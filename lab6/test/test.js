const request = require('supertest');

describe('GETs', function () {
    it('/public/v2/users/7480808/posts', function (done) {
        const res = request('https://gorest.co.in')
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
    const user1 = {
        "name":"Ivan Kozlovsky",
        "email":"example@mail.com",
        "gender":"male",
        "status":"active"
    }
    id=""
    it('/public/v2/users', function (done) {
        request('https://gorest.co.in')
            .post('/public/v2/users')
            .set('Authorization', 'Bearer d738c4fb8381ffb2ff86bdaf75957bc31b1c33200605a10a56dc2464546be9fe')
            .send(user1)
            .expect(201)
            .end((res)=>{
                done()
            })
    });
    it('/public/v2/users/6942216/posts', function (done) {
        const post = {
            "user_id": 7490836,
            "title": "test post",
            "body": "Post by Ivan Kozlovsky"
        }
        request('https://gorest.co.in')
            .post("/public/v2/users/7490836/posts")
            .set('Authorization', 'Bearer d738c4fb8381ffb2ff86bdaf75957bc31b1c33200605a10a56dc2464546be9fe')
            .send(post)
            .expect('Content-Type', /json/)
            .expect(201)
            .end((res)=>{
                done()
            })
        
    });
    it('/public/v2/users/7480808/todos', function (done) {
        todo = {
            "user_id": 7490836,
            "title": "Todo by Ivan Kozlovsky",
            "due_on": "2024-11-01T00:00:00.000+05:30",
            "status": "pending"
          },
        request('https://gorest.co.in')
            .post('/public/v2/users/7490836/todos')
            .set('Authorization', 'Bearer d738c4fb8381ffb2ff86bdaf75957bc31b1c33200605a10a56dc2464546be9fe')
            .send(todo)
            .expect('Content-Type', /json/)
            .expect(201)
            .end((res)=>{
                done()
            })
    });
});