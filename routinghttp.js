
const server= http.createServer((req,res)=>{
    if(req.url === "/"){
        res.write("hello from home page");
        res.end();
    }
    else if(req.url === "/about"){
        res.write("hello from about page");
        res.end();
    }
    else{
        res.write("404 page not found");
        res.end();
    }
});

