const path = require("path")
exports.indexView = function (req,res){
    res.redirect("/user/register")
}
exports.registerUser = (req,res) => {
    const userRegisterFile = path.resolve(__dirname + "/../views/register.view.html")
    res.sendFile(userRegisterFile)
}
exports.registeredUserData = (req,res) => {
   const {fullName,age} = req.body;
   res.send(`<center><h1>Welcome back ${fullName.toUpperCase()}.You are ${age} years old.</h1></center>`)
}