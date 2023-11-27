// PostCard.js
import React, { useState } from "react";
import { Avatar } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const PostCard = ({ post }) => {
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  const handleDownvote = () => {
    setDownvotes(downvotes + 1);
  };

  return (
    <>
    
    <div className="post_card">
      <div className="tags">
          <span className="tag">Post</span>
        </div>
      <Avatar />
      
      <div className="post_content">
        <h3>{post.title}</h3>
      
        <div className="upvote-downvote">
          <button onClick={handleUpvote}>
            <ArrowUpwardIcon  style={{fontSize:"17px"}} />
          </button>
          <span>  {upvotes} </span>
          <button onClick={handleDownvote}>
            <ArrowDownwardIcon style={{fontSize:"17px"}}/>
          </button>
            <span>{downvotes}</span>
        </div>
    
      </div>
    </div>
    </>
  );
};

export default PostCard;
