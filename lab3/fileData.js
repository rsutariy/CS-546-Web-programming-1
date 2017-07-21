/**
 * Created by Ruchika Sutariya on 6/9/2017.
 */

const fs = require('fs');

module.exports= {
getFileAsString: function(path)
{
    return new Promise((fulfill,reject)=>{
        if(!path)
            reject ("Please provide path in order to get enter inside the file.");
        if(typeof path !== 'string' ) 
            reject ("Please provide path in valid format.");
        fs.readFile(path,"utf-8",(err, data)=>{
        try
        {   
            if(err) 
                reject(err);
            fulfill(data);
        } 
        catch(err){
            reject(err);
        }
        });

    });
},
getFileAsJSON: function(path)
{
     return new Promise((fulfill,reject)=>{
       if(!path)
            reject ("Please provide path in order to get enter inside the file.");
        if(typeof path !== 'string' ) 
            reject ("Please provide path in valid format.");
        fs.readFile(path,"utf-8",(err, data)=>{
        try
        {
            if(err) 
                reject(err);
            fulfill(JSON.parse(data));

        } 
        catch(err){
            reject(err);
        }
       
        });
    });
},
saveStringToFile: function(path,text)
{
     return new Promise((fulfill,reject)=>{
        if(!path)
            reject ("Please provide path in order to get enter inside the file.");
        if(typeof path !== 'string' ) 
            reject ("Please provide path in valid format.");
        if(!text)
            reject ("Enter text which you want to store inside the file.");
        if(typeof text !== 'string')
            reject ("Enter text in valid format");
        fs.writeFile(path,text,(err, data)=>{
        try
        {
            if(err) 
                reject(err);
            fulfill('text'+ text +' is saved inside the file'+ path + 'successfully.');
        } 
        catch(err){
            reject(err);   
        }
        });

    });
},
saveJSONToFile:function(path,obj)
{
     return new Promise((fulfill,reject)=>{
        if(!path)
            reject ("Please provide path in order to get enter inside the file.");
        if(typeof path !== 'string' ) 
            reject ("Please provide path in valid format.");
        if(!obj)
            reject ("Please provide object.");
        if(typeof obj !== 'object' ) 
            reject ("Please provide object in valid format.")
        fs.writeFile(path,JSON.stringify(obj,null,4),(err, data)=>{ 
        try
        {
            if(err) 
                reject(err);
            fulfill('object is converted in string and saved inside the file '+ path + ' successfully.');
        } 
        catch(err){
            reject(err);
        }
        });

    });
}

}

