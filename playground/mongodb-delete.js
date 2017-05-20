const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to MongoDFB server');

  db.collection('Todos').deleteMany({text: 'Eat Dinner'}).then((result) =>{
    console.log(result);
  });

});
