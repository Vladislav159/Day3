import { Schema, model } from 'mongoose';

//ORM - Object Oriented Model
const like = model('Like', new Schema({
   
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
export default like;