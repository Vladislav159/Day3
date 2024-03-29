import { Schema, model } from 'mongoose';

//ORM - Object Oriented Model
const comment = model('Comment', new Schema({
   
    text: {
        type: String,
        maxLength: 160,
        required: true
    },
    
    author: {
        type: Schema.Types.ObjectId,
        //Kreipimas i kollekcija is kur imsim duomenys
        ref: 'User'
    },
    post: { 
        type: Schema.Types.ObjectId,
        //Kreipimas i kollekcija is kur imsim duomenys
        ref: 'Post'
    },
    created_at: {
        type: Date,
        //Reiksme pagal nutylejimas
        default: new Date()
    }

}));
export default comment;