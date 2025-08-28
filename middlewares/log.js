function userCredentials(req,res,next){
    console.log("username: gg");
    console.log("email: gg@gmail.com");
    console.log("password: gg123");
    console.log("age: 30");
    next();
}

export default userCredentials;
