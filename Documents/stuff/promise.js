let namez= new Promise((resolve,reject)=>{
    let word="fifi"
    if(word==="fifi"){
        resolve("It is true");
    }
    else{
        reject("It is not true");
    }

})
names.then((message)=>{
  console.log("The word is in message" +message);
}).catch((message)=>{
    console.log("The error is in"&{message});
})