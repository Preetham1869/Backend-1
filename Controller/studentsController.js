
const getStudents = (req, res) => {
    let students={name:"Rahul", age:21, course:"B.Tech"};
    res.status(200).json(students);
};
const addStudent = (req, res) => {
    res.status(201).send('Student added');
};
export {getStudents,addStudent};
