const path=require('path');
const p=path.join(path.dirname(process.mainModule.filename),'data','products.json');

const getAddProductFromFile=(cb)=>{
    fs.readFile(p,(err,fileContent)=>{
        if(err){
           return cb([]);
        }else{
            cb(JSON.parse(fileContent));
        }
        
    })
}

const fs=require('fs');
const { fileLoader } = require('ejs');
module.exports= class Product{
    constructor(t){
        this.title=t;
    }

    save(){
       // const p=path.join(path.dirname(process.mainModule.filename),'data','products.json');
       getAddProductFromFile(products=>{
      // let products = [];
       
        products.push(this);
        fs.writeFile(p,JSON.stringify(products),(err)=>{
            console.log(err);
        });
       });
        //fs.readFile(p,(err,fileContent)=>{});
    }

    static fetchAll(cb){
        getAddProductFromFile(cb);
        
    }
}