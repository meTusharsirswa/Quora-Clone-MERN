import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const Spaces = () => {
  return (
    <>
     <Button size="small" className='create_space_btn'>+ Create Spaces</Button>
     <div className="spaces_container">
        <div className="spaces_content">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Hindi.svg/1024px-Hindi.svg.png" alt="hindi logo" />
            <Link to="/hindi-language">Hindi language</Link>
        </div>
        <div className="spaces_content">
            <img src="https://i.pinimg.com/originals/4a/c5/64/4ac564b1f9c9f73824fc640cc5e0a3b2.jpg" alt="hindi logo" />
            <Link to="/">Visiting & Travel</Link>
        </div>
        <div className="spaces_content">
            <img src="https://thumbs.dreamstime.com/b/sports-logo-26799407.jpg" alt="hindi logo" />
            <Link to="/">Sports </Link>
        </div>
        <div className="spaces_content">
            <img src="https://png.pngitem.com/pimgs/s/490-4907237_wedding-photography-awards-logo-hd-png-download.png" alt="hindi logo" />
            <Link to="/">Fashion and Style </Link>
        </div>
        <div className="spaces_content">
            <img src="https://cdn.pixabay.com/photo/2016/06/22/08/40/atom-1472657_1280.png" alt="hindi logo" />
            <Link to="/">Science </Link>
        </div>
        <div className="spaces_content">
            <img src="https://c8.alamy.com/comp/2GJJXEC/letter-psi-and-two-profiles-psychology-logo-psychologist-icon-therapy-symbol-2GJJXEC.jpg" alt="hindi logo" />
            <Link to="/">Psychology </Link>
        </div>

     </div>
    </>
  )
}

export default Spaces
