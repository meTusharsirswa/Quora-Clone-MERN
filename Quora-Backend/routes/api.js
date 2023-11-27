const express = require("express");
const router = express.Router();

// User Routes
const {
  UserDetail,
  loginData,
  userData,
  logout,
} = require("../Controller/UserController");
router.route("/register").post(UserDetail);
router.route("/login").post(loginData);
router.route("/user").get(userData);
router.route("/user-logout").post(logout);

// Post Routes
const Posts = require("../Controller/PostController");
router.post("/create-post", Posts.createPost);
router.get("/get-post", Posts.Getpost);
router.post("/update-post", Posts.updatePost);
router.post("/delete-post", Posts.deletePost);

// Question  Routes
const Question = require("../Controller/QuestionController");
router.post("/post-question", Question.PostQuestion);
router.get("/get-question", Question.GetQuestion);
router.post("/update-question", Question.UpdateQuestion);
router.post("/delete-question", Question.deleteQuestion);

module.exports = router;
