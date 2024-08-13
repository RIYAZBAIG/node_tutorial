const mongoose = require('mongoose');


const MenuItemSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,

    },
    price:{
        type: Number,
        require: true,
    },
    taste:{
        type: String,
        enum: ["sweet","spicy","sour"],
        require: true,
    },
    is_drink:{
        type: Boolean,
        default:false,
    }
})


const MenuItem = mongoose.model('menu', MenuItemSchema);

module.exports = MenuItem;

