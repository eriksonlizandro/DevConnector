const moongose = require('mongoose'); 

const ProfileShema = new moongose.Schema({
    user: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'user'
    },
    company: {
        type: String
    },
    website:{
        type: String
    }, 
    location:{
        type: String
    },
    status: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required:true
    }, 
    bio: {
        type: String
    },
    githubusername:{
        type: String
    },

    experience: [
        {
            title:{
                type:  String,
                required: true
            },
            company:{
                type: String,
                required: true
            },
            location: {
                type: String
            },
            from: {
                type: Date,
                required: true
            },
            to:{
                type: Date
            }, 
            current:{
                type: Boolean, 
                default: false
            },
            description:{
                type:  String
            }
        },
  
    ],
    education: [
        {
            school:{
                type: String, 
                
            }, 
            degree: {
                type: String,
                
            },
            fieldofstudy: {
                type: String,
                
            },
            from:{
                type: Date,
               
            },
            to:{
                type: Date
            },
            current:{
                type: Boolean, 
                default: false
            },
            description:{
                type:  String
            }
        }
    ],
    social:{
        youtube:{
            type: String
        },
        twitter:{
            type: String
        },
        facebook:{
            type: String
        },
        linkedin:{
            type: String
        },
        instagram:{
            type: String
        }
    },
    date:{
        type: Date,
        default: Date.now
    }


});

module.exports = Profile = moongose.model('profile', ProfileShema); 