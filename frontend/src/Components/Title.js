import React from "react";
import * as Icons from 'react-icons/fa'
import {FiShare} from 'react-icons/fi'

//Title of listing page (under header)

const Title = (props) => {

    return (
      <div className="d-flex">
        <div className="w-100" style={{fontSize:'12pt'}}>
          <h1 className="listing-title" style={{fontSize:'20pt'}}>{props.name}</h1>
          <Icons.FaStar size={16} /> &nbsp; <b>{props.stars} &nbsp; · &nbsp;</b> 
          <a href="#reviews">{props.review} reviews</a> &nbsp; &nbsp; 
          <a href="#where">{props.address}</a>
        </div>
        <div className="text-right"><FiShare /> &nbsp; <a href="#">Share</a> &nbsp; &nbsp;</div>
        <div className="text-right" style={{width:'100px'}}><Icons.FaRegHeart/> &nbsp; <a href="#">Save</a></div>
      </div>
    );
  };



export default Title;
