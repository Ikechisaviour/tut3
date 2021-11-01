function trans() {
  a = 0.0001
  Revin = "0xfb4556feee11901bd64e10cf48d2e6a09a458c54"
  Allwin = "0x77159cae02faa12df5f6ba32b61caed1424e1d37"
  Rashid = "0x23aa0aa422aac31070aec7b5589b4f861cee8fe1"

  
  
  eth.sendTransaction({from: eth.coinbase, to: Revin, value: web3.toWei(a, "ether")});
  eth.sendTransaction({from: eth.coinbase, to: Rashid, value: web3.toWei(a, "ether")});
  eth.sendTransaction({from: eth.coinbase, to: Allwin, value: web3.toWei(a, "ether")});
      
}

function loop(){
  for (i = 0; i < 5000; i++){
    trans()
    //console.log(i, "sent");
  }
}