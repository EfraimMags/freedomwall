const { query } = require("express");

exports.helloWorld = (req, res) => {
    res.send('Hello world im inside a controller');
    console.log('controller');
}

exports.customName = (req, res) =>{
    res.send(`Hello alien ${req.query.name}`);
}

exports.getData = (req, res) => {
    res.send(postList);
}

exports.addPost = (connection) => {

 return async (req, res) => {

    const avatarKey = req.body.avatarid
    const name = req.body.name
    const backgroundName = req.body.backgroundName
    const topic = req.body.topic
  
    
  await connection.query(`INSERT INTO post1 (postname, postavatarid, post1topic, post1background) values (?,?,?,?)`,[name, avatarKey, topic, backgroundName], (error,results) => {
      if (error) throw error;
    })

   
 }

}

exports.addPost2 = (connection) => {

  return async (req, res) => {
 
     const avatarKey = req.body.avatarid
     const name = req.body.name
     const img = req.body.img
     const topic = req.body.topic
   
   await connection.query(`INSERT INTO post2 (postname, postavatarid, post2topic, post2image) values (?,?,?,?)`,[name, avatarKey, topic, img], (error,results) => {
       if (error) throw error;
     })
 
    
  }
 
 }

exports.getSinglePost = (connection) =>{
  return async (req, res) => {
  await connection.query('SELECT * from post1', (error, results) =>{
      if (error) throw error;
      data = Object.values(JSON.parse(JSON.stringify(results)));
      select = [];
      data.map( (e, keys) =>{
        if(keys === Object.keys(data).length-1){
          select = e
        }
      })
      res.send(select)
    })
  }
}

exports.getSinglePost2 = (connection) =>{
  return async (req, res) => {
  await connection.query('SELECT * from post2', (error, results) =>{
      if (error) throw error;
      data = Object.values(JSON.parse(JSON.stringify(results)));
      select = [];
      data.map( (e, keys) =>{
        if(keys === Object.keys(data).length-1){
          select = e
        }
      })
      res.send(select)
    })
  }
}

exports.addToPostList = (connection) => {
  return async (req, res) => {

    const postCategory = req.body.postCategory
    const spage = req.body.spage
    
  await connection.query(`INSERT INTO postlist (postlistrefid, postlistkind, postlistuser) values (?,?,?)`,[spage, postCategory, 0], (error, results) =>{
      if (error) throw error;
    })
    
  }
}

//'select a.avatarname, a.avatarfilename, b.bundlename  from avatar a, imagebundles b where b.bundleid = a.bundlerefid and b.bundleuse = 1 and b.bundletype = avatar'
let avatar = 'avatar'
exports.getAvatar = (connection) =>{
  return async (req, res) =>{
  await connection.query(`select a.avatarid, a.avatarname, a.avatarfilename, b.bundlename  from avatar a, imagebundles b where b.bundleid = a.bundlerefid AND b.bundleuse = 1 AND b.bundletype = 1`, (error, results) => {
      if (error) throw error;
      res.send(results)
    })
  }
}

exports.getBackground = (connection) =>{
  return (req, res) =>{
    connection.query(`select bck.bckid, b.bundlename, bck.bckfilename from imagebundles b, background bck where bck.bundlerefid = b.bundleid and b.bundleuse = 1 and bundletype = 0`, (error, results) => {
      if (error) throw error;
      res.send(results)
    })
  }
}


// 3rd middleware joining tables into one final list
let postList = [];
let finalList =[];
exports.filteredPosts = async (req, res) => {
  
  await req.postlist.map( async (element, keys) => {
      
      if(element.postlistkind === 1){
        await req.con.query(`SELECT * From post1 WHERE post1id = ${element.postlistrefid}`, (error, results) =>{
            if (error) throw error;
            data = Object.values(JSON.parse(JSON.stringify(results)));
            postList.push({...data[0], postlistkind: 1, postlistdate: element.postlistdate})
            
          })
      }else if(element.postlistkind === 2){
        await  req.con.query(`SELECT * From post2 WHERE post2id = ${element.postlistrefid}`, (error, results) =>{
            if (error) throw error;
            data = Object.values(JSON.parse(JSON.stringify(results)));
            postList.push({...data[0], postlistkind: 2, postlistdate: element.postlistdate})
           
          })
      }
    
  })

  postList.map(async (element, keys) =>{
  await req.con.query(`select avatarname, avatarfilename from avatar where avatarid = ${element.postavatarid}`, (error, results) => {
        if (error) throw error;
        data = Object.values(JSON.parse(JSON.stringify(results)));
        finalList.push({...element, avatarname: data[0].avatarname, avatarfilename: data[0].avatarfilename})
        
      })

     
  })

  res.send(finalList)
  postList = []
  finalList = []
}


exports.getList1 = (connection) => {

  return async (req, res) => {

      await connection.query('Select p1.post1id, p1.postname, p1.postavatarid, p1.post1topic, p1.post1background, a.avatarname, a.avatarfilename from post1 p1, avatar a WHERE a.avatarid = p1.postavatarid', (error, results) => {
        if (error) throw error;
        res.send(results)
      })

  }

}

exports.getList2 = (connection) => {

  return async (req, res) => {

    await connection.query('Select p2.post2id, p2.postname, p2.postavatarid, p2.post2topic, p2.post2image, a.avatarname, a.avatarfilename from post2 p2, avatar a WHERE a.avatarid = p2.postavatarid', (error, results) => {
        if (error) throw error;
        res.send(results)
      })

  }

}


exports.getAlllist = (connection) => {
  return async (req,res) => {
   await connection.query('select * from postlist', (error, results) => {
      if (error) throw error;
      data = Object.values(JSON.parse(JSON.stringify(results)));
      res.send(results)
     
    })
  }
}

exports.checklogin = (connection) => {
  return async (req, res) => {
    const username = req.body.username
    const pass = req.body.pass
    console.log(username)
    console.log(pass)
    await connection.query(`SELECT personid, username, usertype from person where username =('${username}') and password = ('${pass}')`, (error, results) => {
      if (error) throw error;
      console.log(results)
      res.send(results)
    })
  }
}
