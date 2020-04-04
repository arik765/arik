// // CRUD create read update delete

// const  {MongoClient,ObjectId } = require('mongodb')
// // const MongoClient = mongodb.MongoClient

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'Demo'
  
// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }
//    console.log('Connection Successful')
//     const db = client.db(databaseName)
//     db.collection('orderHistory').insertOne(
//         {
//             userEmail:"rahul@gmail.com",
//             productId: new ObjectId("5e7371c9fa4bc8ddb78b39af"),
//             createdAt: new Date()
//         }
//     )
    
//     // db.collection('categories').insertMany(
//     //     [
//     //         {
//     //             "name": "category1",
//     //             "isActive":false,
//     //             "createdAt": new Date()
//     //         },
//     //         {
//     //             "name": "category2",
//     //             "isActive":false,
//     //             "createdAt": new Date()
//     //         },
//     //         {
//     //             "name": "category3",
//     //             "isActive":false,
//     //             "createdAt": new Date()
//     //         }
//     //     ]
//     // )
//     // db.collection('products').insertMany(
//     //     [
//     //         {
//     //             "name":"Product1",
                
//     //             "price": 12,
//     //             "isActive": false,
//     //             "createdAt": new Date()
//     //         },
//     //         {
//     //             "name":"Product2",
                
//     //             "price": 83,
//     //             "isActive": false,
//     //             "createdAt": new Date()
//     //         },
//     //         {
//     //             "name":"Product3",
                
//     //             "price": 38,
//     //             "isActive": false,
//     //             "createdAt": new Date()
//     //         },
//     //         {
//     //             "name":"Product4",
                
//     //             "price": 20,
//     //             "isActive": false,
//     //             "createdAt": new Date()
//     //         },
//     //         {
//     //             "name":"Product5",
                
//     //             "price": 22,
//     //             "isActive": false,
//     //             "createdAt": new Date()
//     //         },
//     //         {
//     //             "name":"Product6",
                
//     //             "price": 24,
//     //             "isActive": false,
//     //             "createdAt": new Date()
//     //         },
//     //         {
//     //             "name":"Product7",
                
//     //             "price": 72,
//     //             "isActive": false,
//     //             "createdAt": new Date()
//     //         },
//     //         {
//     //             "name":"Product8",
            
//     //             "price": 32,
//     //             "isActive": false,
//     //             "createdAt": new Date()
//     //         },
//     //         {
//     //             "name":"Product9",
                
//     //             "price": 59,
//     //             "isActive": false,
//     //             "createdAt": new Date()
//     //         }
//     //     ]
//     // )
// })