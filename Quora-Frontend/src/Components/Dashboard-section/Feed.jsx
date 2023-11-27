import React, { useState, useEffect } from "react";
import { Avatar, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import axios from "axios";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import QuestionCard from "../Dashboard-section/QuestionCard";
import PostCard from "../Dashboard-section/PostCard";
import { styled } from "@mui/material/styles";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Feed = () => {
  const [open, setOpen] = React.useState(false);
  const [openPost, setOpenPost] = React.useState(false);
  const [questionText, setQuestionText] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [questions, setQuestions] = useState([]);
  const [posts, setPosts] = useState([]);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const fetchQuestions = async () => {
    try {
      const response = await axios.get("http://localhost:4000/get-question");
      setQuestions(response.data.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/get-post");
      setPosts(response.data.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
    fetchPosts();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handlePostOpen = () => {
    setOpenPost(true);
  };

  const handlePostClose = () => {
    setOpenPost(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddQuestion = async () => {
    try {
      await axios.post("http://localhost:4000/post-question", {
        title: questionText,
      });
      fetchQuestions();
      handleClose();
    } catch (error) {
      console.error("Error adding question:", error);
    }
  };

  const handlePostsClick = async () => {
    try {
      await axios.post("http://localhost:4000/create-post", {
        title: postTitle,
      });
      fetchPosts();   
      handlePostClose();
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <>
      <div className="feed_container">
        <div className="feed_searchbar">
          <div className="search">
            <Avatar />
            <input
              type="text"
              className="search_bar"
              placeholder="What do you want to ask or share ?"
            />
          </div>
          <div className="feed_search_action">
            <p onClick={handleClickOpen}>
              {" "}
              <ContactSupportOutlinedIcon /> Ask
            </p>
            <p>
              {" "}
              <RateReviewOutlinedIcon /> Answer
            </p>
            <p onClick={handlePostOpen}>
              <CreateOutlinedIcon />
              Post
            </p>
          </div>
        </div>
        <div className="feed">
          {/* <div className="feed_profile_content">
            <Avatar />
            <p>Unknown</p>
            <a href="/">Follow</a>
          </div> */}

          {/* Display Questions */}
          <div className="questions">
            {questions.map((question) => (
              
              <QuestionCard key={question._id} question={question}
               />
            ))}
           
          </div>
              
          {/* Display Posts */}
          <div className="posts">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>
      {/* Question dialog */}
      <React.Fragment>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Add Question"}
          </DialogTitle>
          <DialogContent>
            <TextField
              style={{ width: "500px" }}
              id="standard-basic"
              placeholder='Start your question with "What" , "How" , "Why" ,etc.'
              variant="standard"
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleAddQuestion} autoFocus>
              Add Question
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>

      {/* Post Dialog */}
      <React.Fragment>
        <Dialog
          fullScreen={fullScreen}
          open={openPost}
          onClose={handlePostClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Add Question"}
          </DialogTitle>
          <DialogContent>
            <TextField
              style={{ width: "500px" }}
              id="standard-basic"
              placeholder="Say Something.."
              variant="standard"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handlePostClose}>
              Cancel
            </Button>
            <Button onClick={handlePostsClick} autoFocus>
              Post
            </Button>
          </DialogActions>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
        </Dialog>
      </React.Fragment>
    </>
  );
};

export default Feed;
