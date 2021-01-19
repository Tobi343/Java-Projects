const request = require('request');

const urlGet = 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key='

const getEx = ((callback) =>{
    request({url: urlGet, json: true},function(err, response, body){
        if(err){
            callback(err)
            return
        }

        //Logik
        /*var people = res.data.people
        var youngest = (lodash.orderBy(people, function (p){return new moment(p.dateOfBirth, 'DDMMYYYY');}, 'asc')[0])
        var oldestIndex = people.indexOf(youngest)

*/
        request.post("url",{form: { result: 0 }},function(err, response, body){
            console.log(err)
            if(err){
                console.log()
                callback(err)
                return
            }
            callback()

        });

    })
});

module.exports={
    getEx
}