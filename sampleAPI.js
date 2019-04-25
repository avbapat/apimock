
'use strict';

const http = require('http');
const express = require('express')
const app = express();
var server = http.createServer(app);


//API to get the details of employees of an organization , who are on leave on a given particular date, 
//which is passed as a parameter (date) to this API

app.get('/api/someToken/employees/:date',function(req,res) {
    console.log("FETCHING THE EMPLOYEES ON LEAVE ON " + req.query.date);
    //check if the user requesting this information is authorized, based on the session id details that are sent
    myDatabase.collection('members').findOne({"_id": myDatabase.ObjectID(request.session.sessionid)}, function (err, member) { 
        if(member){ 
            // if the details are found to be true and we have a record matching to those details, process further
                    myDatabase.collection(member.key+"_employees").find({$and:[{'date':req.query.date},{'onLeave': true}]}).toArray(function(error, employees){
                            if(error){
                                console.log(error)
                                res.json({})//send an empty response
                            }
                            else{
                                //If there is no error, send back the records as a JSON response
                                res.json(employees);
                            }
                    })
                 }

     });


});


//Explaination

/*

This API will help the user in fetching the records of employees that are on leave on the selected date from the application.

The date can be selected from the date picker and sent in a format that is maintained as a standard across application.

This API will authenticate the request to check it's details from the session id and match it with the members collection, which will be created when the account was registered in the system.
If it authenticates only the you will get a response. Else you will get an empty response from the API.

The query will AND two conditions: To fetch all the records that are matching the given date and all the records that have the onLeave status as true in the DB.

This onLeave status for each employee will be 'false' by default, unless they have applied for a leave on that particular date.

*/


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("The Node app is listening at http://%s:%s", host, port)
 })