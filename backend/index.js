const express = require(`express`)

const app = express()
const PORT = 5000

app.get("/",(req,res)=>{
    res.send("hello from backend") 
})  

app.get("/api",(req,res)=>{  
    res.json(    
        {     
            "employees": [ 
                { "name": "Alice Smith", "email": "alice.smith@example.com" },   
                { "name": "Bob Johnson", "email": "bob.johnson@example.com" },    
                { "name": "Emily Brown", "email": "emily.brown@example.com" } 
            ] 
        } 
    ) 
})

app.listen(PORT, ()=>{ 
    console.log(`server started at port ${PORT}`) 
})