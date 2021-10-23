const express = require('express');
const cors = require('cors') 
const app = express();


app.use(cors());
app.use(express.json());  // string er data ke json e convert kore available rakhbe
const port = 5000;



app.get('/', (req, res) =>{
    res.send('Hello, my second node server')
});


//-------------- extra work ----------
//----- find user ---------

// const users = [
//     {id:1, name:'Tamim', email: 'tamim@gmail.com', phone: '01788888801'},
//     {id:2, name:'shamim', email: 'shamim@gmail.com', phone: '01788888801'},
//     {id:3, name:'rasel', email: 'rasel@gmail.com', phone: '01788888801'},
//     {id:4, name:'kalam', email: 'kalam@gmail.com', phone: '01788888801'},
//     {id:5, name:'nayem', email: 'nayem@gmail.com', phone: '01788888801'},
//     {id:6, name:'emon', email: 'emon@gmail.com', phone: '01788888801'},
//     {id:7, name:'mehedi', email: 'mehedi@gmail.com', phone: '01788888801'},
// ]


// app.get('/users', (req, res)=>{  
//     res.send(users);   // user ke dile sob user ashbe
// })

// =------ dynamic api -------------

// app.get('/users/:id', (req, res) =>{
//     const id = req.params.id;
//     const user = users[id]
//     res.send(user);
// })




//5- Access query parameter and return search result 
// search bar e search kore value print kora
// 


const users = [
    {id:0, name:'Tamim', email: 'tamim@gmail.com', phone: '01788888801'},
    {id:1, name:'shamim', email: 'shamim@gmail.com', phone: '01788888801'},
    {id:2, name:'rasel', email: 'rasel@gmail.com', phone: '01788888801'},
    {id:3, name:'kalam', email: 'kalam@gmail.com', phone: '01788888801'},
    {id:4, name:'nayem', email: 'nayem@gmail.com', phone: '01788888801'},
    {id:5, name:'emon', email: 'emon@gmail.com', phone: '01788888801'},
    {id:6, name:'mehedi', email: 'mehedi@gmail.com', phone: '01788888801'},
]


// app.get('/users', (req, res)=>{  
//     const search = (req.query.search);
//     // use query parameter
//     if(search){
//         const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
//         res.send(searchResult);
//     }
//     else{
//         res.send(users);
//     }
//     // res.send(users);   // user ke dile sob user ashbe
// })


// ---------- practice--------------

app.get('/users', (req, res) =>{
    const search = (req.query.search);
    
    if(search){
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
})

//===== app.Method ====

app.post('/users', (req, res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send('inside post');    
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})



// dynamic api 

app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})






// value send in /fruits
app.get('/fruits', (req, res) =>{
    res.send(['mango', 'oranges', 'banana', 'apple'])
})



// value send in --> /fruits/mangos/fazli

app.get('/fruits/mangos/fazli', (req, res) =>{
    res.send('Yummy Yummy tok marka fazli');
})








//--------------- at first work on it ............

app.listen(port, () => {
  console.log('Listening to port ', port);
})