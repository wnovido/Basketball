var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  // res.send('respond with a resource xxx' + tmp);
	var data = {
	    "error":1,
	    "Users":""
	};

	connection.query("SELECT * from user_login",function(err, rows, fields) {
	    if(rows.length != 0) {
	        data["error"] = 0;
	        data["Users"] = rows;
	        res.json(data);
	    } else {
	        data["Users"] = 'No Users Found..';
	        res.json(data);
	    }
	});
});

router.post('/',function(req,res){	
    var Email = req.body.email;
    var Password = md5(req.body.password);
    var data = {
        "error":1,
        "Users":""
    };

    if (!!Email && !!Password) {
        connection.query("INSERT INTO user_login (user_email, user_password) VALUES(?,?)",[Email,Password],function(err, rows, fields){
            if (!!err) {
                data["Users"] = "Error Adding data: " + err;
                console.log(err);
            } else {
                data["error"] = 0;
                data["Users"] = "User Added Successfully";
            }
            res.json(data);
        });
    } else {
        data["Users"] = "Please provide all required data (i.e : Email, Password)";
        res.json(data);
    }
});


router.put('/',function(req,res){
    var Id = req.body.id;
    var Email = req.body.email;
    var Password = md5(req.body.password);
    var data = {
        "error":1,
        "Users":""
    };

    if(!!Id && !!Email && !!Password){
        connection.query("UPDATE user_login SET user_email=?, user_password=? WHERE user_id=?",[Email,Password,Id],function(err, rows, fields){
            if(!!err) {
                data["Users"] = "Error Updating data: " + err;
                console.log(err);
            } else {
                data["error"] = 0;
                data["Users"] = "Updated User Successfully";
            }
            res.json(data);
        });
    }else{
        data["Users"] = "Please provide all required data (i.e : id, Bookname, Authorname, Price)";
        res.json(data);
    }
});


router.delete('/',function(req,res){
    var Id = req.body.id;
    var data = {
        "error":1,
        "Users":""
    };
    if (!!Id){
        connection.query("DELETE FROM user_login WHERE user_id=?",[Id],function(err, rows, fields){
            if(!!err) {
                data["Users"] = "Error deleting data: " + err;
                console.log(err);
            } else {
                data["error"] = 0;
                data["Users"] = "Delete Book Successfully";
            }
            res.json(data);
        });
    } else {
        data["Users"] = "Please provide all required data (i.e : id )";
        res.json(data);
    }
});


router.get("/:user_id",function(req,res) {
	var Id = req.params.user_id
    var data = {
        "error":1,
        "Users":""
    };
    if (!!Id){
        connection.query("SELECT * FROM user_login WHERE user_id=?",[Id],function(err, rows, fields){
            if(!!err) {
                data["Users"] = "Error selecting data: " + err;
                console.log(err);
            } else {
                data["error"] = 0;
                data["Users"] = rows;
            }
            res.json(data);
        });
    } else {
        data["Users"] = "Please provide all required data (i.e : id )";
        res.json(data);
    }
});


module.exports = router;
\