

import express from 'express';
const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Api called successfully');
})

app.post('/add-user',(req,res)=>{
    let data = req.body;//Logic to add data to DB
    res.send('Data Added called successfully');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});