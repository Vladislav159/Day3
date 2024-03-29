import { Schema, model } from 'mongoose';


const user = model('User', new Schema({
   
    user_name: {
        // Tipo priskyrimas
        type: String,
        // Vartotojo vardas minimum trijų simbolių ilgio
        minLength: 3,
        // Maksimum 50
        maxLength: 50,
        // Nurodymas, jog reikšmė bus reikalaujama
        required: true
    },
    last_name: {
        type: String,
        // Vartotojo vardas minimum trijų simbolių ilgio
        minLength: 3,
        // Maksimum 50
        maxLength: 50,
        // Nurodymas, jog reikšmė bus reikalaujama
        required: true
    },
    party: {
        type: String,
        minLength: 5,
        maxLength: 40
    },
    email: {
        type: String,
        minLength: 5,
        maxLength: 50,
        unique: true,
        required: true
    },
    password: {
        type: String,
        minLength: 6,
        maxLength: 100,
        required: true
    },
    manager: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        // Reikšmės pagal nutylėjimą priskyrimas, jei ši nėra siunčiama
        default:  new Date()
               
    }

}));
export default user;