
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

exports.addPost = (req, res) => {
 
  console.log(req.body);
  postList.push(req.body);
  res.send(postList);
}

exports.getSinglePage = (req, res) =>{
  res.send(req.query.id)
}
//'select a.avatarname, a.avatarfilename, b.bundlename  from avatar a, imagebundles b where b.bundleid = a.bundlerefid and b.bundleuse = 1 and b.bundletype = avatar'
let avatar = 'avatar'
exports.getAvatar = (connection) =>{
  return (req, res) =>{
    connection.query(`select a.avatarname, a.avatarfilename, b.bundlename  from avatar a, imagebundles b where b.bundleid = a.bundlerefid AND b.bundleuse = 1 AND b.bundletype = 1`, (error, results) => {
      console.log(results)
      res.send(results)
    })
  }
}

// 3rd middleware joining tables into one final list

let postList = [];
let finalList =[];
exports.filteredPosts = (req, res) => {
  
  req.postlist.map( (element, keys) => {
      
      if(element.postlistkind === 1){
          req.con.query(`SELECT * From post1 WHERE post1id = ${element.postlistrefid}`, (error, results) =>{
            if (error) throw error;
            data = Object.values(JSON.parse(JSON.stringify(results)));
            postList.push({...data[0], postlistkind: 1, postlistdate: element.postlistdate})
            
          })
      }else if(element.postlistkind === 2){
          req.con.query(`SELECT * From post2 WHERE post2id = ${element.postlistrefid}`, (error, results) =>{
            if (error) throw error;
            data = Object.values(JSON.parse(JSON.stringify(results)));
            postList.push({...data[0], postlistkind: 2, postlistdate: element.postlistdate})
           
          })
      }
    
  })

  postList.map((element, keys) =>{
      req.con.query(`select avatarname, avatarfilename from avatar where avatarid = ${element.postavatarid}`, (error, results) => {
        if (error) throw error;
        data = Object.values(JSON.parse(JSON.stringify(results)));
        finalList.push({...element, avatarname: data[0].avatarname, avatarfilename: data[0].avatarfilename})
        
      })

     
  })

  res.send(finalList)
  postList = []
  finalList = []
}

