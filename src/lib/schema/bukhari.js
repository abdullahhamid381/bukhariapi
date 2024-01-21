const { default: mongoose } = require("mongoose")

const Bukharimodel= new mongoose.Schema({
    Baab:String,
    Book:String,
    Chapter:String,
    Hadithno:String,
    Hadith:String,
    Status:String

})
export const Bukhari = mongoose.models.bukharihadees || mongoose.model('bukharihadees',Bukharimodel)