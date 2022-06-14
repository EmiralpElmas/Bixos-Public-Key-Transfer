const modulbtn=document.getElementById("submit");
const modul=document.querySelector(".modal");
const connectBtn = document.querySelector(".button");
const modulkapat=document.getElementById("modal-kapat");
const accounttxt=document.querySelector(".account");
const publictxt=document.querySelector(".public");


connectBtn.addEventListener("click",async ()=>{
    var connect =  await ethereum.request({ method: 'eth_requestAccounts' });
    var balance_adress = await connect[0];
});
