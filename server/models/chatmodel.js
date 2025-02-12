const mongoose=require('mongoose')

const chatmodel = mongoose.Schema(
    {
        chatName:{type:String,trim:true},

        isGroupChat:{type:Boolean,default:false},

        users:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
            // refrence to user model
        }],
        latestMessage:{type:mongoose.Schema.Types.ObjectId,
            ref:"Message"
        },
        groupAdmin:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    },{
        timestamps:true,
    }
);

const Chat=mongoose.model('Chat',chatmodel);
module.exports = Chat