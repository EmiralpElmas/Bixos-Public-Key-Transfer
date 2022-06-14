const connectBtn = document.querySelector(".button");


connectBtn.addEventListener("click",async ()=>{
    var connect =  await ethereum.request({ method: 'eth_requestAccounts' });
    var balance_adress = await connect[0];
});
