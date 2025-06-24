// // let count = 0;
// // let timer = setInterval(() =>{
// //     count++;
// //      console.log("Hello again");
// //      if (count > 5){
// //     clearInterval(timer);
// // }
// //     },2000);

// // if (count > 5){
// //     clearInterval(timer);
// // }
// // console.log("Hello from async.js");
// // function doTask(taskName,callback){
// //     console.log(`starting ${taskName}...`)
// //     setTimeout(()=>{
// //         console.log(`${taskName} completed!`);
// //         callback();
// //     },2000);

// //     }
// //     doTask("Reading book",()=>{
// //         console.log("Now reading chapter 10");
// //     })

function orderFunction(){
    let order = new Promise((resolve,reject)=>{
        let isOverWorking=true;
        setTimeout(()=>{
            if(isOverWorking){
                resolve("Oder is ready");

            }
            else{
                reject("ordet delay");

            }
        },3000);
    });
    return order;
}
    // order
    // .then((message)=> console.log("Success: ",message))
    // .catch((error) => {
    //     console.log("Error:",error);
    //     });
// try{
//     let result=10/0;
//     console.log(result);
// }catch(error){
//     console.log(`Error: ${error}`);

// }finally{
//     console.log("Task completed");

// }


async function orderfood(){
    try{
        const orderStatus=await orderFunction();
          console.log(orderStatus);
    }catch(error){
    console.log(`Error: ${error}`);
    }
}