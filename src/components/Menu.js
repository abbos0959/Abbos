import React from "react";
import styled from "styled-components";

export const Menu = () => {
   return (
      <Wrapper>
         <h3>Рестораны</h3>
         <WrapperItem>
            <p>Избранные</p>
            <p>Uzcard</p>
            <p>Новинки</p>
            <p>Базары</p>
            <p>Fast Food</p>
            <p>Национальная</p>
            <p>Азиатская</p>
            <p>Кофейня</p>
            <h5>Еще</h5>
         </WrapperItem>
      </Wrapper>
   );
};

export const Wrapper = styled.div`
   width: 80%;
   display: flex;
   flex-direction: column;
   margin-left: 140px;
   margin-top: 50px;
   @media (max-width: 768px) {
      overflow: hidden;
   }

   h3 {
      font-size: 40px;
   }
`;
export const WrapperItem = styled.div`
   display: flex;
   p {
      cursor: pointer;
      margin-left: 5px;
      font-size: 20px;
      padding: 15px 10px;
      background-color: #f6f6fb;
      border-radius: 10px;
      margin-top: 20px;
   }
   p:hover {
      background-color: #f1f1f1;
   }
   h5 {
      margin-left: 95px;
      cursor: pointer;
      font-size: 20px;
      padding: 15px 10px;
      background-color: #f6f6fb;
      border-radius: 10px;

      margin-top: 20px;
      font-weight: 400;
   }
   h5:hover {
      background-color: #f1f1f1;
   }
`;
