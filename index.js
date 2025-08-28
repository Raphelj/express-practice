import express from 'express'
import students from './routes/students.js'
import teachers from './routes/teachers.js'
import products from './routes/products.js'
import userCredentials from './middlewares/log.js'

const app=express()

app.use('/students', students)
app.use('/teachers', teachers)

//Middleware
app.use(userCredentials)
app.get("/",(req,res)=>{
    res.send("<h1>Hello welcome</h1>")
})

app.get('/about',(req,res)=>{
    res.send("<h1>About Page</h1>")
})

//send json response
app.get('/products',(req,res)=>{
    res.json(products)
});

//Route params
app.get('/product/:category/:id', (req, res) => {
    const { category,id }= req.params;
    res.send(`Product ID: ${id} & Category: ${category}`);
})

//app params
app.param('category',(req,res,next,category)=>{
    console.log(`category:${category}`)
    next()
})

app.get('/user/:category',(req,res)=>{
    res.send("Response OK")
})

//Query string
app.get('/search',(req,res)=>{
    const { q,id } = req.query;
    res.send(`Search query: ${q} & ID: ${id}`);
})
/*
app.get('/',(req,res)=>{
    res.send("<h1>Hi Hello</h1>")
})

//regex
app.get(/x/,(req,res)=>{
    res.send("This works if url contains x")
})

//double callback
app.get("/callback",
    (req,res,next)=>{
        console.log("First callback")
        next()
    },
    (req,res)=>{
        res.send("Second callback")
    })

app.get('/about',(req,res)=>{
    res.send("<h1>About Page</h1>")
})


app.route("/student")
.get((req,res)=>res.send("All students"))
.post((req,res)=>res.send("All students"))
.put((req,res)=>res.send("All students"))
.delete((req,res)=>res.send("All students"))*/


app.listen(5000,()=> console.log('Server is running on port 5000'))