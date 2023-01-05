import React from "react";
import styled from "styled-components";

export const Footer = () => {
   return (
      <Wrapper>
         <WrapperTop>
            <p>О нас</p>
            <p>Контакты</p>
            <p>Пользовательское соглашение</p>
         </WrapperTop>
         <WrapperBottom>
            <p>Служба поддержки: +998 71 200 40 01</p>
            <div>
               <div></div>
               <p>Ⓒ 2023 Express24</p>
            </div>
         </WrapperBottom>
      </Wrapper>
   );
};

export const Wrapper = styled.footer`
   background-color: #f6f6fb;
   height: 175px;
   margin-top: 100px;
`;

export const WrapperTop = styled.div`
   p {
      color: #8e8e93;
      margin-left: 60px;
      margin-top: 60px;
   }
   display: flex;
`;
export const WrapperBottom = styled.div`
   p {
      color: #8e8e93;
      margin-left: 60px;
      margin-top: 30px;
   }
   div p{
    margin-right:200px ;
   }
   display: flex;
   justify-content: space-between;
`;
