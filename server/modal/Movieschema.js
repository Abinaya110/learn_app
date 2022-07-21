const { default: mongoose } = require("mongoose")

const Movieschema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        year: {
            type: Number,
        },
        cast: {
            type: [String],
        },
        director: {
            type: String,
        },
        music: {
            type: String, 
        },
        boxoffice: {
            type: Number,
        }

    })

module.exports = mongoose.model("Movie", Movieschema)

















