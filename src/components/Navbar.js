import React from "react";
import styled from "styled-components";
import express from "../images/express.png";
import Person2Icon from "@mui/icons-material/Person2";
import LocationOnIcon from '@mui/icons-material/LocationOn';
export const Navbar = () => {
   return (
      <Nav>
         <NavLogo>
            <img src={express} alt="logo" />
            <h4>Express24</h4>
         </NavLogo>
         <NavInput>
            <input type="text" placeholder="Заведение, блюдо, товар или кухня" />
            <button>Найти</button>
         </NavInput>
         <NavLocation> <LocationOnIcon style={{color:"#8e8e93"}}/>  Мирабад район, Амира Темура проспект</NavLocation>
         <Icon>
            <Person2Icon style={{ color: "#8e8e93" }} />
            <p>Профиль</p>
         </Icon>
      </Nav>
   );
};

export const Nav = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   background-color: white;
   z-index: 9999999;

   display: flex;
   /* justify-content: space-between; */
   align-items: center;
   border: 1px solid #ececf1;
   padding: 10px;
   width: 100%;
`;
export const Icon = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   p {
      color: #8e8e93;
   }

   margin-left: 240px;
`;

export const NavLogo = styled.div`
   display: flex;
   align-items: center;
   width: 250px;

   img {
      margin-left: 20px;
      margin-top: 6px;
      width: 220px;
   }
   h4 {
      position: relative;
      right: 135px;
      top: 5px;
      font-size: 18px;
      font-weight: bold;
   }
`;

export const NavInput = styled.div`
   border: 1px solid #d1d1d6;
   display: flex;
   align-items: center;
   justify-content: center;

   width: 370px;
   height: 50px;
   border-radius: 5px;
   input {
      border: none;
      width: 80%;
      outline: none;
   }
   button {
      padding: 10px;
      border-radius: 15px;
      background-color: yellow;
      border: none;
      cursor: pointer;
   }
`;
export const NavLocation = styled.div`
   margin-left: 20px;

   width: 370px;
   height: 50px;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 5px;
   background-color: #ececf1;
   cursor: pointer;

   width: 350px;
`;
export const NavProfile = styled.div``;
