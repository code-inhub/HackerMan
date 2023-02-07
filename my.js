let a = [
  "Initializing Hack tool...",
  "Connecting to Server...",
  "Connecting to server 1...",
  "Connection failed. Retrying...",
  "Connecting to server 2",
  "Connected Successfully...",
  "Username __0_Anshul/{}/...",
  "Trying Brute Force...",
  "200K passwords tried...",
  "Match not found",
  "Another 200K passwords tried...",
  "Match not found...",
  "Another 200K passwords tried...",
  "Match not found...",
  "Another 200K passwords tried...",
  "Match found...",
  "Accessing Account...100%",
  "Fetching Host Data...100%",
  "   ",
  "Accessing Host device Control... ",
  "100%",
  "Accessing Users Data...  ",
  "100%",
  "Transferring Host data to file __0_Anshul/{}/... ",

  "System access Successful...",
  "process completed... 100%",
  ".......................your system is hacked",
];
// const sleep=asynch(seconds)=>{
//   return new Promise((resolve)=>{
//     setTimeout(()=>{resolve(true)},seconds*1000)
//   };)
// }
// const showhack=asynch (message)=>{
//   await sleep(1);
//   text.innerHTML=text.innerHTML+message+"<br>";
// }

// (async()=>{
//   for(let i=0;i<a.length;i++){
//     await showhack(a[i]);
//   }
// })
const sleep = async (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 200);
  });
};

const showHack = async (message) => {
  await sleep(2);
  // console.log(message)
  text.innerHTML = text.innerHTML + message + "<br>";
};

(async () => {
  for (let i = 0; i < a.length; i++) {
    await showHack(a[i]);
  }
})();
