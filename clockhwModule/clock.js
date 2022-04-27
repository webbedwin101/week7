let myTime = () => {
    const now = new Date(); 

    document.querySelector('.hour').innerHTML = now.getHours(); 
    document.querySelector('.minute').innerHTML = now.getMinutes(); 
    document.querySelector('.second').innerHTML = now.getSeconds(); 
}

setInterval(myTime, 1000); 

