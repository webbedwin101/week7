const button = document.getElementById('btn'); 
const displayData = document.querySelector('#para'); 
button.addEventListener('click', () =>{
    console.log('button clicked')
    fetch('http://localhost:3000/api/member')
    .then(response => response.json())    
    .then(data => {
        data.forEach(member => {
            const employee = `<h3>${member.name}</h3>`; 
            displayData.insertAdjacentHTML("beforeend", employee); 
        })
        console.log(data); 
    })
    .catch(err => console.log(err)); 
});  
