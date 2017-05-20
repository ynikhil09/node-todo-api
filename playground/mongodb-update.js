const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to MongoDFB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("591f8b36cd523e8b32eb9d45")
  // },{
  //   $set:{
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result) =>{
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('591f8faa2ceec35be7434785')
  }, {
    $set:{
      name: 'NikhilY'
    },
    $inc:{
      age: 5
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

});
