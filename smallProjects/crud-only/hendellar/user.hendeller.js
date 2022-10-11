
const path = require('path');

const dbs = require("../model/database");




const home = async function(req,res){
    res.sendFile(path.join(__dirname + "/../views/index.html"));
};


const about = function (req,res){
    res.sendFile(path.join(__dirname + "/../views/about.html"));
};

const contact = function(req,res){
    res.sendFile(path.join(__dirname + "/../views/contact.html"));
}
const updateview = async function(req,res){
    res.sendFile(path.join(__dirname + "/../views/update.html"));
};

const deletview = function(req,res){
    res.sendFile(path.join(__dirname + "/../views/delet.html"))
}


const registrationview = function(req,res){
    res.sendFile(path.join(__dirname + "/../views/registation.html"))
}


const login =async function(req,res){
    const email = req.body.email;
     const sql = `SELECT* FROM frindlist WHERE Email = "${email}"`;
    dbs.query(sql,function(err,rows){
        console.log(rows);
        if(err){
            console.log(err);
            res.send('something wrong');
        }else{
            if(rows[0]===undefined){
                res.send('nothing is exist , <br> <h1>registation needed </h1><br> <a href="/registration" >go</a> ');
            }else{
                res.render("profile",{data:rows[0]});
            }
        }
    })
};


const update = function(req,res){
    const name = req.body.name;
    const job = req.body.job;
    const disc = req.body.disc;
    const address = req.body.address;
    const email = req.body.email;
    console.log(req.body);
    const data = [name,job,disc,address,email];
    dbs.query(`update frindlist set Name = ?,Job = ?,Discription = ?,Address = ? 
    where Email = ?`,data,function(err,result){
        if(err) throw err
        console.log("update successfull");
    });
    res.send("its updated");

}
const delet = function (req,res){
    const email = req.body.email;
    dbs.query(`delete from frindlist where Email = "${email}"`,function(err,result){
        if(err) throw err
        console.log("successfully deleted");
    })
    res.end();
}

const registation = function(req,res){
    console.log(req.files);
    const photo = req.files.photo;
    const noname = req.body.nm;
    const job = req.body.job;
    const disc = req.body.disc;
    const address = req.body.address; 
    const email = req.body.email;
    const uploadpath = "./uploads/" + photo.name;
    photo.mv(uploadpath,function(err){
        if(err) console.log(err);
        return 
    });
    const sql = `insert into frindlist (Name,Job,Discription,Address,Email,Photos) 
    values("${noname}","${job}","${disc}","${address}","${email}","${photo.name}")`;
    dbs.query(sql,function(err,rows){
        if(err) {
            res.send(err);
        }else{
        console.log(rows);

        }
        res.redirect("/");
    });
}



module.exports = {home,about,contact,login,update,updateview,delet,deletview,registation,registrationview}


