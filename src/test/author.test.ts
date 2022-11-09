// import request from 'supertest';
// import App from '../src/app';
// import AuthorController from '../src/resources/author/author.controller'


// NOT WORKING
// describe('Author api', () => {
//     const app = new App([new AuthorController()], Number(process.env.PORT));
//     test("Create Author", async () => {
//         const res = await request(app).post('/api/authors').send({
//             name : "TEST NAME",
//             country : "TEST COUNTRY",
//             birth_date : "2019-01-22 08:55:59"
//         });
//         console.log(res.statusCode);
//         expect(res.statusCode === 201);
//     });
    
// })