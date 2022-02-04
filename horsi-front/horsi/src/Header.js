import React from 'react';
import './Header.css'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import {Link} from "react-router-dom";
function Header() {
  return <div className="header">
    <Link to="/">
    <img  className="header_logo"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmA3NIwfVieB0sNbdj2XsX7nn9dAxmlbK9cw&usqp=CAU"/>
      

    </Link>

     
<Link to="/checkout">
<LocalMallOutlinedIcon fontSize="large" className="header_icon"/>
</Link>
<FavoriteBorderOutlinedIcon fontSize="large" className="header_icon"/>
<PersonOutlineOutlinedIcon fontSize="large" className="header_icon"/> 

  </div>;
}

export default Header;
