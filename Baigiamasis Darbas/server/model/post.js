import { Schema, model } from 'mongoose';

const postSchema =  new Schema ( 
    {
        project_name: {
            type: String,
            minLength: 10,
            maxLength: 80,
            required: true  
         },

        photo: {
            type: String,
            maxLength: 80,
            required: true
        },
        description: {
            type: String,
            minLength: 10,
            maxLength: 2000
        },
        // default_status: {
        //     type: String,
        //     default: "Pateiktas"
        // },
        stat_name: {
            type:Schema.Types.ObjectId,
            ref: 'Status',
            default: '6602d16e3f012cb13c988308'
        },
        resolution_date: {
            type:Date
        },
        //Norima svarstymo data(onChange) 
        created_at: {
            type: Date,
            // Reikšmės pagal nutylėjimą priskyrimas, jei ši nėra siunčiama
            default: new Date()
            // defaultValue={new Date(data.hearing_at).toLocaleDateString('lt-LT')}
            
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },

});

export default model('Post', postSchema);

// SERVER
// Projekto pavadinimas
// Nuotrauka (Kuri talpinama serveryje)
//  Projekto aprašymas (Iki 2000 simbolių)
//  Talpinimo data ir laikas
//  Norima svarstymo data
// (koreguojama svarstymo data)





