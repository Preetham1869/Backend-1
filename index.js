import express from 'express';
const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    console.log('Api called');
    res.send('Api called successfully');
})
app.post('/add-user',(req,res)=>{
    // let {Name,Age} = req.body;//Logic to add data to DB
    // console.log({Name, Age});
    let data = req.body;
    console.log(data);
    res.send('Data Added called successfully');
})


app.put('/update-user',(req,res)=>{
    let data = req.body;
    console.log(data);
    res.end('User Updated successfully');
})


app.delete('/delete-user',(req,res)=>{
    console.log(req.body);
    res.send('User Deleted successfully');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});