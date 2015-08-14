var express = require('express');
var router = express.Router();

// CORS
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


/* GET users listing. */
router.get('/', function(req, res) {
	connection.query("SELECT * FROM teams",function(err, rows) {
        if (rows.length == 0) {
            return res.status(404).send({message: 'No Teams Found'});
            console.log(err);
        } else {
            res.jsonp(rows);
        }
	});
});

router.post('/',function(req,res){	
    var Name = req.body.name;
    var Logo = req.body.logo;

    if (!!Name && !!Logo) {
        connection.query("INSERT INTO teams (name, logo) VALUES(?,?)",[Name,Logo],function(err, rows){
            if (!!err) {
                return res.status(406).send({message: 'Error Adding data: ' + err});
                console.log(err);
            } else {
                connection.query("SELECT * FROM teams WHERE team_id=?",[rows.insertId],function(err, rows) {
                    res.jsonp(rows);
                });
            }            
        });
    } else {
        return res.status(412).send({message: 'Please provide all required data (i.e : Name, Logo)'});
    }
});


router.put('/',function(req,res) {
    var Id = req.body.id;
    var Name = req.body.name;
    var Logo = req.body.logo;

    if(!!Id && !!Name && !!Logo) {
        connection.query("SELECT * FROM teams WHERE team_id=?",[Id],function(err, rows) {
            if (rows.length == 0) {
                return res.status(404).send({message: 'No Team Found With Id=' + Id});
                console.log(err);
            } else {
                connection.query("UPDATE teams SET name=?, logo=? WHERE team_id=?",[Name,Logo,Id],function(err, rows) {
                    if(!!err) {
                        return res.status(406).send({message: 'Error Updating data: ' + err});
                        console.log(err);
                    } else {
                        res.jsonp(rows);
                    };
                });
            }
        });
    } else {
        return res.status(412).send({message: 'Please provide all required data (i.e : Id, Name, Logo)'});
    }
});


router.delete('/',function(req,res){
    var Id = req.body.id;

    if (!!Id) {
        connection.query("SELECT * FROM teams WHERE team_id=?",[Id],function(err, rows) {
            if (rows.length == 0) {
                return res.status(404).send({message: 'No Team Found With Id=' + Id});
                console.log(err);
            } else {
                connection.query("DELETE FROM teams WHERE team_id=?",[Id],function(err, rows2) {
                    if (!!err) {
                        return res.status(406).send({message: 'Error Deleting data: ' + err});
                        console.log(err);
                    } else {
                        res.jsonp(rows);
                    }
                });
            }
        });
    } else {
        return res.status(412).send({message: 'Please provide all required data (i.e : Id)'});        
    }
});


router.get("/:team_id",function(req,res) {
	var Id = req.params.team_id

    if (!!Id){
        connection.query("SELECT * FROM teams WHERE team_id=?",[Id],function(err, rows) {
            if (rows.length == 0) {
                return res.status(404).send({message: 'No Team Found With Id=' + Id});
                console.log(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        return res.status(412).send({message: 'Please provide all required data (i.e : Id)'});        
    }
});


module.exports = router;
