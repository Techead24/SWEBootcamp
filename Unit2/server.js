// const express = require('express');

// const app = express();
// const port = 3000;

// app.get("/flipcoin", (req, res) => {
//     res.send(["Heads", "Tails"][Math.floor(Math.random() * 2)]);
// });

// app.get("/restaurants/:id", (req, res) => {
//     console.log(req.params);
//   });

// app.use(express.static('public'));

// app.listen(port, () => {
//     console.log(`Server listening at http://localhost:${port}`)
// })

// module.exports = express

const express = require('express');
const  {Menu}  = require('../SQL/Menu');
const  {Restaurant}  = require('../SQL/Restaurant');
const  {MenuItem} = require('../SQL/MenuItem')
const  {sequelize } = require('../SQL/Sequelize_index');
// const {sequelize, DataTypes, Model} = require('../SQL/Sequelize_index');



const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/restaurants', async (request,response) => {

    const Restaurants = await Restaurant.findAll();
    response.send( JSON.stringify(Restaurants, null, 2));
});

app.get('/restaurant/:id', async (request,response) => {
    console.log(request.params.id.trim());
    if (!Number.isNaN(request.params.id.trim()) && request.params.id.trim().length < 15){
        try{
        const restaurant = await Restaurant.findAll({ where: { id: request.params.id.trim()}, include: {  model: Menu, as: 'menus'  }});
        
        response.send( JSON.stringify(restaurant, null, 2));
        }catch(err){
            console.error(err);
        }
    }else{
        response.send("Invalid!");
    }
    
});

app.get("/flipcoin", (request, response) => {
    const choice = Math.floor((Math.random() * 10) + 1);
    let answer;
    if (choice==2){
        answer="Tail";
    }else{
        answer="Heads";
    }
    response.send(answer);
  });

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})