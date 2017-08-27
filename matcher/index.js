 'use strict';
 const patterns = require('../patterns');

//Entities
  let createEntities = (str,pattern) => {
    return XRegExp.exec(str, XRegExp(pattern,'i'));
  }

//Regular Expressions

const XRegExp = require('xregexp');
let match = (str, cb) => {
   //str - user input
   //cb - callback
   let getResult = patterns.find(item => {
     if(XRegExp.test(str, XRegExp(item.pattern, "i"))){
       return true;
     }
   });
   if(getResult){
    return cb ({
      intent: getResult.intent,
      entities: createEntities(str, getResult.pattern),
    });
   }
   else{
     return cb({});
   }

}
module.exports=match;
