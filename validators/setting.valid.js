const {check} =require('express-validator')

module.exports = [
    check('newPass').matches("^(?=.*[0-9])")
    ,check('repeatPass').custom((value,{ req })=>{
        if(value !== req.body.newPass){
            return false ;
        }else{
            return true ;
        }
    })
]