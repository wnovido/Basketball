var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


/* GET users listing. */
router.get('/', function(req, res) {
	var data = {
	    "error":1,
	    "Teams":""
	};

	connection.query("SELECT * from teams",function(err, rows, fields) {
        if (err) 
            return res.status(404).send({message: 'No Teams Found'});
        else
            return res.jsonp(rows);

	    /*if(rows.length != 0) {
	        data["error"] = 0;
	        data["Teams"] = rows;
	        res.jsonp(rows);
	    } else {
	        data["Teams"] = 'No Teams Record Found..';
	        res.jsonp(res.status(404).send({message: 'No Teams Found'}));
            // return res.status(404).send({message: 'Tab Not Found'});  
	    }*/

	});
});

router.post('/',function(req,res){	
    var Name = req.body.name;
    var Logo = req.body.logo;
    var data = {
        "error":1,
        "Teams":""
    };

    if (!!Name && !!Logo) {
        connection.query("INSERT INTO teams (name, logo) VALUES(?,?)",[Name,Logo],function(err, rows, fields){
            if (!!err) {
                data["Teams"] = "Error Adding data: " + err;
                console.log(err);
            } else {
                data["error"] = 0;
                data["Teams"] = "Team Record Added Successfully";
            }
            res.json(data);
        });
    } else {
        data["Teams"] = "Please provide all required data (i.e : Name, Logo)";
        res.json(data);
    }
});


router.put('/',function(req,res){
    var Id = req.body.id;
    var Name = req.body.name;
    var Logo = req.body.logo;
    var data = {
        "error":1,
        "Teams":""
    };

    if(!!Id && !!Name && !!Logo){
        connection.query("UPDATE teams SET name=?, logo=? WHERE team_id=?",[Name,Logo,Id],function(err, rows, fields){
            if(!!err) {
                data["Teams"] = "Error Updating data: " + err;
                console.log(err);
            } else {
                data["error"] = 0;
                data["Teams"] = "Updated Team Record Successfully";
            }
            res.json(data);
        });
    }else{
        data["Teams"] = "Please provide all required data (i.e : id, Team, Logo)";
        res.json(data);
    }
});


router.delete('/',function(req,res){
    var Id = req.body.id;
    var data = {
        "error":1,
        "Teams":""
    };
    if (!!Id){
        connection.query("DELETE FROM teams WHERE team_id=?",[Id],function(err, rows, fields){
            if(!!err) {
                data["Teams"] = "Error deleting data: " + err;
                console.log(err);
            } else {
                data["error"] = 0;
                data["Teams"] = "Deleted Teams Record Successfully";
            }
            res.json(data);
        });
    } else {
        data["Teams"] = "Please provide all required data (i.e : id )";
        res.json(data);
    }
});


router.get("/:team_id",function(req,res) {
	var Id = req.params.team_id
    var data = {
        "error":1,
        "Teams":""
    };
    if (!!Id){
        connection.query("SELECT * FROM teams WHERE team_id=?",[Id],function(err, rows, fields){
            if(!!err) {
                data["Teams"] = "Error selecting data: " + err;
                console.log(err);
            } else {
                data["error"] = 0;
                data["Teams"] = rows;
            }
            res.json(data);
        });
    } else {
        data["Teams"] = "Please provide all required data (i.e : id )";
        res.json(data);
    }
});


module.exports = router;
