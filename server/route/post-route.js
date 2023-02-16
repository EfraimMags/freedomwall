const express = require('express');

const router = express.Router();
const postController = require('../controller/post-controller.js');
const dbConnection = require('../dbConnection/dbconnection.js');
const pool = dbConnection.pool;


pool.getConnection((err, connection) =>{
    if(err) throw err;
    
    router.get('/post', (req , res, next) =>{
        
        connection.query('SELECT * from postlist', (error, result) => {
            if (error) throw error;
            req.postlist = result;
            req.con = connection;

            next()
        })
        
        
    }, postController.filteredPosts);


   router.get('/avatar',postController.getAvatar(connection));

    connection.release();
})



router.get('/name', postController.customName);
router.get('/posts', postController.getData);
router.post('/add-post', postController.addPost);   
router.get('/id', postController.getSinglePage);



module.exports = router;