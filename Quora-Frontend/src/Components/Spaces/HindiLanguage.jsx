import React, { useState } from 'react'
import "../../styles/spaces.css"
import "../../styles/Dashboard.css"
import Spaces from '../Dashboard-section/Spaces'
import Advertisement from '../Dashboard-section/Advertisement'
import { Avatar } from '@mui/material'
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const HindiLanguage = () => {
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  const handleDownvote = () => {
    setDownvotes(downvotes + 1);
  };

  return (
    <div className='dashboard_container'>
      <div className="space">
        <Spaces/>
      </div>
    <div className="quora_feed">
      <div className="spaces_main_box">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Hindi.svg/1024px-Hindi.svg.png" alt="" />
        <h3>Hindi (Language)</h3>
      </div>
      <div className="spaces_all_content">
        <div className="avatar">
        <Avatar/>
        Tushar sirswa
        </div>
        <h2>What is the meaning of the Hindi word "Sarfaroshi"?</h2>
        <p>"Sarfaroshi" is an Urdu word that has been borrowed from Persian. In Hindi and Urdu, it is often used to express the idea of "courage" or "bravery" in the face of challenges or adversity. </p>
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
      <div className="advertisement">
        
        </div>  
    </div>
  )
}

export default HindiLanguage
