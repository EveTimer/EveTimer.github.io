
async function currTime(){
  const time = Math.round(Date.now()/1000)
  document.getElementById('curr_time').innerHTML = `Current Time: ${time}`
  document.getElementById('current').value = `${time}`
}

async function calc(){
  const epoch = parseInt(document.getElementById("current").value);
  const days = parseInt(document.getElementById("days").value);
  const hours = parseInt(document.getElementById("hours").value);
  const minutes = parseInt(document.getElementById("minutes").value);
  const calc = epoch + minutes*60 + hours*60*60 + days*60*60*24
  document.getElementById('out').innerHTML = `&lt;t:${calc}:F> &lt;t:${calc}:R>    (Copied to clipboard)`
  navigator.clipboard.writeText(`<t:${calc}:F> <t:${calc}:R>`)
}

async function delay(milliseconds){
  return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
  });
}