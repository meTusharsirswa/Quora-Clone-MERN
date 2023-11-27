const express = require("express");
const Post = require("../model/Post-Model");

const createPost = async (req, res) => {
  try {
    const { title, sub_title, upvote, downvote } = req.body;
    await Post.create({
      title,
      sub_title,
      upvote,
      downvote,
    });
    res.status(200).json({
      status: true,
      message: "Post Created Successfully !!!",
    });
  } catch (err) {
    res.status(204).json({
      status: false,
      message: "Error while Creating post ",
      err: err.message,
    });
  }
};

const Getpost = async (req, res) => {
  const posts = await Post.find({});
  res.status(200).json({
    status: true,
    message: " Posts List Fetched ",
    data: posts,
  });
};

const updatePost = async (req, res) => {
  const allPost = {
    title: req.body.title,
    sub_title: req.body.sub_title,
    upvote: req.body.upvote,
    downvote: req.body.downvote,
  };
  Post.findByIdAndUpdate({ _id: req.body._id }, { $set: allPost })
    .then((post) => {
      res.status(200).json({
        status: true,
        message: "Post Updated Successfully !!!",
        data: post,
      });
    })
    .catch((err) => {
      res.status(204).json({
        status: false,
        message: "Error while update post",
        err: err.message,
      });
    });
};

const deletePost = async(req,res)=>{
    const deletedPost =await Post.findByIdAndRemove({_id : req.body._id})
    res.status(200).json({
        status : true,
        message : "Post deleted Successfully !!!",
        data : deletedPost
    })
}

module.exports = {
  createPost,
  Getpost,
  updatePost,
  deletePost
};
