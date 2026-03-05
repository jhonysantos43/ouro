const url='https://fapi.binance.com/fapi/v1/ticker/price?symbol=XAUUSDT';
async function tick(){
  try{
    const j=await(await fetch(url)).json();
    document.getElementById('p').textContent=Number(j.price).toFixed(2);
    document.getElementById('s').textContent=+j.price>2050?'VENDA':+j.price<2000?'COMPRA':'NEUTRO';
  }catch(e){document.getElementById('s').textContent='Erro na rede';}
}
tick(); setInterval(tick,1500);
