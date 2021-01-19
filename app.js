const yargs = require('yargs');
const ex1 = require('./exercise01')

const exercise = yargs.argv._[0]

switch (exercise) {
    case '01':
        ex1.getEx((err,res)=>{
            if(err){
                console.error(err)
            }
            else{
                console.log(res.statusCode)
            }
        })
        break;
    case '02':
        ex1.getEx((err,res)=>{
            if(err){
                console.error(err)
            }
            else{
                console.log(res.statusCode)
            }
        })
        break;

}
