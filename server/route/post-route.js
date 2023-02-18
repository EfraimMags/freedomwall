const express = require('express');
const multer = require('multer')
const router = express.Router();
const postController = require('../controller/post-controller.js');
const dbConnection = require('../dbConnection/dbconnection.js');
const pool = dbConnection.pool;
let filename ='';

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, '../public/sampleImg')
    },
    filename: (req,file,cb) =>{
        
        filename = Date.now() +"_"+file.originalname
        cb(null,  "freedomwall_"+ file.originalname)
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
    router.get('/spage2',postController.getSinglePost2(connection));

    router.get('/getAlllist', postController.getAlllist(connection));
    
    router.post('/addpostList', postController.addToPostList(connection));
    router.post('/add-post', postController.addPost(connection));   
    router.post('/add-post2', postController.addPost2(connection));  
    router.post('/upload', upload.single('image'), (req, res) => {
        console.log(filename)
        res.send({message: upload})
    })
    router.get('/upload', (req, res) =>{
        res.render("upload")
    })
    
    router.post('/login',postController.checklogin(connection))

    connection.release();
})



module.exports = router;