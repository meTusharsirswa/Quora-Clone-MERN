const express = require("express");
const Question = require("../model/Question-Model");

const PostQuestion = async (req, res) => {
  try {
    const question = {
      title: req.body.title,
    };
    await Question.create(question);
    res.status(200).json({
      status: true,
      message: "Question Post Successfully !!!",
    });
  } catch (error) {
    res.status(204).json({
      status: false,
      message: "Error while Post Question ",
      error: error.message,
    });
  }
};

const GetQuestion = async (req, res) => {
  const questions = await Question.find({});
  res.status(200).json({
    status: true,
    message: "Question List Fetched",
    data: questions,
  });
};


const UpdateQuestion = async(req,res)=>{
    const updateQuestion = {
        title: req.body.title,
      
      };
      Question.findByIdAndUpdate({_id : req.body._id},{ $set: updateQuestion })
      .then((question) => {
        res.status(200).json({
          status: true,
          message: "Question Updated Successfully !!!",
        //   data: question,
        });
      })
      .catch((err) => {
        res.status(204).json({
          status: false,
          message: "Error while update Question",
          err: err.message,
        });
      });

}
const deleteQuestion = async(req,res)=>{
    await Question.findByIdAndRemove({_id : req.body._id});
    res.status(200).json({
        statu : true,
        message : "Question Deleted Successfully !!!"
    })
}

module.exports = {
  PostQuestion,
  GetQuestion,
  UpdateQuestion,
   deleteQuestion
};
