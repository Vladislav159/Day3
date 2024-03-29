import { Schema, model } from "mongoose";

const status = model('Status', new Schema({

    stat_name: {
       type: String
    },

}));

export default status;