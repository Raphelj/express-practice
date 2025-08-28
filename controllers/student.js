import express from 'express'

const allStudents = (req,res)=>{
    res.send("All students")
}

const createStudent = (req,res)=>{
    res.send("Create student")
}

const updateStudent = (req,res)=>{
    res.send("Update student")
}

const deleteStudent = (req,res)=>{
    res.send("Delete student")
}

export {allStudents, createStudent, updateStudent, deleteStudent}
