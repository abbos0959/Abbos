import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarRateIcon from "@mui/icons-material/StarRate";
import styled from "styled-components";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
export default function Cardd() {
   const arr = [1, 2, 3, 4, 4, 4, 4, 4, 4];
   return arr.map((_, index) => {
      return (
         <Card sx={{ maxWidth: 595 }}>
            <CardActionArea>
               <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn.express24.uz/i/701/701/17eaf72325c.jpg"
                  alt="green iguana"
               />
               <WrapHeart>
                  <FavoriteBorderIcon />
               </WrapHeart>
               <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                     Navvat
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                     Азиатская · Европейская
                  </Typography>
                  <Wrap>
                     <div
                        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                     >
                        <StarRateIcon
                           style={{ color: "#8e8e93", fontSize: "20px", marginBottom: "4px" }}
                        />
                        4.5
                     </div>
                     {/* <div></div> */}
                     <p>
                        <LocalTaxiIcon style={{ color: "#8e8e93", fontSize: "20px" }} />
                        12000 so'm
                     </p>
                  </Wrap>
               </CardContent>
            </CardActionArea>
         </Card>
      );
   });
}

export const WrapHeart = styled.div`
   width: 40px;
   height: 40px;
   background-color: white;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 50%;
   position: absolute;
   top: 45%;
   left: 84%;
`;

export const Wrap = styled.div`
   display: flex;
   margin-top: 10px;
   div {
      padding: 10px;
      background-color: #f5f5f5;
      border-radius: 10px;
   }
   p {
      padding: 10px;
      margin-left: 5px;
      background-color: #f5f5f5;
      border-radius: 10px;
   }
`;
