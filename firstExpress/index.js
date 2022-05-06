const express = require('express');
const path = require('path'); 
const cors = require('cors');

//Init express
const app = express();
app.use(cors()); 
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'public'))); 
// app.use(express.static('public')); 
const members = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@gmail.com'
    },
    {
        id: 2,
        name: 'Sue Smith',
        email: 'suesmith@gmail.com'
    },{
        id: 3,
        name: 'William Morris',
        email: 'williammorris@gmail.com'
    },
    ]
app.get('/api/member', (req, res)=>{
    res.json(members); 
}); 
console.log(' GET /app.js'); 
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// }); 

//create your endpoints/route handlers
// app.get('/', function(req, res){
//     res.send('<h1>Hello World!!!</h1>');
// Fetch from database
//load pages
//return JSON
// Full access to request & response
// });
// app.get('/:key', (req, res) => {
//     res.send(quotes[req.params.key]);
// });

//listen on a port
app.listen(PORT, () => console.log(`server started on port ${PORT}`)); 
