const express = require('express');
const multer = require('multer')
const router = express.Router();
const postController = require('../controller/post-controller.js');
const dbConnection = require('../dbConnection/dbconnection.js');
const pool = dbConnection.pool;
const path = require('path')
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, '../public/sampleImg')
    },
    filename: (req,file,cb) =>{
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }

})
const upload = multer({storage: storage})


pool.getConnection((err, connection) =>{
    if(err) throw err;
    
    router.get('/post', async (req , res, next) =>{
        
        await connection.query('SELECT * from postlist', (error, result) => {
            if (error) throw error;
            req.postlist = result;
            req.con = connection;
            next()
        })
        
        
    }, postController.filteredPosts);


    router.get('/avatar',postController.getAvatar(connection));
    router.get('/background',postController.getBackground(connection));
    router.get('/spage',postController.getSinglePost(connection));
    router.post('/addpostList', postController.addToPostList(connection));
    router.post('/add-post', postController.addPost(connection));   
    router.get('/list1', postController.getList1(connection));
    router.get('/list2', postController.getList2(connection));
    router.get('/getAlllist', postController. getAlllist(connection));
    


    connection.release();
})
router.post('/upload', upload.single('image'),(req, res) => {
   
    res.send({message: upload})
})
router.get('/upload', (req, res) =>{
    res.render("upload")
})



module.exports = router;