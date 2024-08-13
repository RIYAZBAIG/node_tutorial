const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const person = require('./person'); // Ensure this module is correctly defined and exported
const MenuItem = require('./MenuItem')

const app = express(); // Define app here

app.use(bodyParser.json());

const mongoURI = 'mongodb://localhost:27017/mydatabase';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('MongoDB connection error:', err));

const Schema = mongoose.Schema;
const ItemSchema = new Schema({
  name: String,
  price: Number
});
const Item = mongoose.model('Item', ItemSchema);

app.get('/', (req, res) => {
  res.send('Welcome to my hotel, how can I help you?');
});

app.get('/Chicken', (req, res) => {
  res.send('Sure sir, I would love to serve chicken!');
});

app.get('/Idli', (req, res) => {
  const customizedIdli = {
    name: 'rawa idli',
    size: '10',
    is_sambar: true,
    is_chutni: false
  };
  res.send(customizedIdli);
});

app.get('/add-item', (req, res) => {
  const newItem = new Item({
    name: 'Sample Item',
    price: 99.99
  });
  

  newItem.save()
    .then(item => res.send(`Item added: ${item}`))
    .catch(err => res.status(500).send('Error adding item: ' + err));
});


app.post('/person', async (req,res)=>{
  try{
    const data = req.body

    const newPerson = new person(data);

    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);

    
  } catch(error){
    console.log(error);
    res.status(500).json({error: "internal server error"})

  }
  
  })



  
app.get('/person', async (req,res)=>{
  try{
    const data = await person.find();

   
    console.log('data fetched');
    res.status(200).json(data);

    
  } catch(error){
    console.log(error);
    res.status(500).json({error: "internal server error"})

  }
  
  });

  //menu item data post method

  app.post('/menu', async (req,res)=>{
    try{
      const data = req.body
  
      const newMenu = new MenuItem(data);
  
      const response = await newMenu.save();
      console.log('data saved');
      res.status(200).json(response);
  
      
    } catch(error){
      console.log(error);
      res.status(500).json({error: "internal server error"})
  
    }
    
    })


    // menu get data method

    app.get('/menu', async (req,res)=>{
      try{
        const data = await MenuItem.find();
    
       
        console.log('data fetched');
        res.status(200).json(data);
    
        
      } catch(error){
        console.log(error);
        res.status(500).json({error: "internal server error"})
    
      }
      
      });
    
  

  



const PORT = 3000; // Change this line to use a different port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
