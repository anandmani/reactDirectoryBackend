var express = require('express');
var router = express.Router();
var url = require("url");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// {
// 	fname: "anand",
// 	lname: "money",
// 	age: "1",
// 	date: "1-1-2000",
// 	gender: "Male",
// 	phone: "11111111",
// 	addInfo: "abcd"
// }

router.use(function(req, res, next) {  //For allowing CORS, we need to add Access-Control-Allow-Origin and a bunch of other headers to the response sent. router.use is applied to all request (get, post,etc.). When we make a call CORS call with browsers, first an OPTIONS (preflight ) call is made before POST/GET
  console.log("lol");
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Max-Age', 86400);
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
  next();  //to match other routes
});


//Save Patient
router.post('/patients/v1/savePatient', function(req,res,next){
    try{
        var reqObj = req.body;
        console.log(reqObj);
        req.getConnection(function(err, conn){
            if(err)
            {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else
            {
                console.log(reqObj);
                var insertSql = "INSERT INTO patient_details SET ?";
                var id = Math.floor(Math.random() * 9999);//9999 because int is maximum 4 chars long. we could use 10000 actually as we use math.floor and we'll never get 10000
                var insertValues = {
                    "patient_id"  : id,
                    "firstname"   : reqObj.fname,
                    "lastname"    : reqObj.lname,
                    "age"         : reqObj.age,
                    "DOB"         : reqObj.date,
                    "gender"      : reqObj.gender,
                    "phone"       : reqObj.phone,
                    "additional_info" : reqObj.addInfo
                };

                var query = conn.query(insertSql, insertValues, function (err, result){
                    if(err){
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    // res.set({'Access-Control-Allow-Origin':'*',"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"});
                    // res.header("Access-Control-Allow-Origin", "*");
                    // res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
                    // res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
                    res.json({"patient_id":id});
                });
            }
        });
    }
    catch(ex){
        console.error("Internal error:"+ex);
        return next(ex);
    }
});

//List patients
router.get("/patients/v1/patientDetails", function(req, res, next) {
    try {
            // var position = req.param('position');
        var query = url.parse(req.url,true).query;
        // console.log(query);
        var position = query.position;
        // console.log(position);
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                conn.query('select * from patient_details' , function(err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var patient_list = [];
                    for (var patientIndex in rows) {
                        var patientObj = rows[patientIndex];
                        patient_list .push(patientObj);
                    }
                    // res.set({'Access-Control-Allow-Origin':'*',"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"});
                    // res.header("Access-Control-Allow-Origin", "*");
                    // res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
                    // res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
                    res.json(patient_list);
                });
            }
        });
    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

module.exports = router;
