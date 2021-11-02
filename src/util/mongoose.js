module.exports = {
    mutipleMongooseToObject: function(mongooses){
        return mongooses.map(mongoose => mongoose.toObject());
    },
    muongooseToObject: function(mongoose){
        return mongoose ? mongoose.toObject(): mongoose;
    }
}