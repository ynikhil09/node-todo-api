const expect = require('expect');
const request = require('supertest');

const{app} = require('./../server');
const{Todo} = require('./../models/todo');

//Runs before each test case and clears the db
beforeEach((done) => {
  Todo.remove({}).then(() =>{
    done()
  });
});

describe('POST /todos', ()=>{
  it('should create a new todo', (done) => {
    var text = 'Test todo text';

    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res) =>{
      expect(res.body.text).toBe(text);
    })
    .end((err, res) =>{
      if(err){
        return done(err);
      }

      //verifying from the db that our todo was added
      // we test with an expectation that the todo exists on the collection
      Todo.find().then((todos) =>{
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
        done();
      }).catch((e) => done(e));
    });
  });

  it('should not create todo with invalid body data', (done) => {

    request(app)
    .post('/todos')
    .send({})
    .expect(400)
    .end((err, res) =>{
      if(err){
        return done(err);
      }

      //verifying from the db that our todo was NOT added
      Todo.find().then((todos) =>{
        expect(todos.length).toBe(0);
        done();
      }).catch((e) => done(e));
    });
  })
});
