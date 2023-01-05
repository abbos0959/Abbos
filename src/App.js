import "./App.css";
import { Navbar } from "./components/Navbar";
import Slider from "./components/Slider";
import styled from "styled-components";
import Cardd from "./components/Cardd";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";

function App() {
   return (
      <div className="App">
         <Navbar />
         <Wrapper>
            <Slider />
         </Wrapper>

         <Wrapper1>
            <h2>Магазины</h2>
            <p>Показать все</p>
         </Wrapper1>
         <Wrapper2>
            <Slider
               head="The Loaf"
               src1="https://cdn.express24.uz/i/700/700/jmqKU3cxc-hfCW3B6TRT0.jpg"
               title="Продукты"
            />
         </Wrapper2>
         <Menu />
         <CardWrapper>
            <Cardd />
         </CardWrapper>

         <NewWrapper>Показать еще</NewWrapper>
         <Footer />
      </div>
   );
}

export default App;

export const Wrapper = styled.div`
   margin-top: 120px;
   margin-left: 140px;
   width: 80%;
   @media (max-width: 576px) {
      overflow: hidden;
   }
`;
export const Wrapper2 = styled.div`
   margin-top: 30px;
   margin-left: 140px;
   width: 80%;
`;
export const Wrapper1 = styled.div`
   margin-top: 40px;
   display: flex;
   margin-left: 140px;
   h2 {
      font-size: 40px;
   }
   p {
      cursor: pointer;
   }

   justify-content: space-between;
   width: 80%;
   align-items: center;
`;

export const NewWrapper = styled.div`
   width: 80%;
   margin-left: 140px;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 15px;
   cursor: pointer;
   background-color: #f5f5f5;
   height: 52px;
   margin-top: 40px;
`;

export const CardWrapper = styled.div`
   width: 80%;
   margin-left: 140px;
   margin-top: 30px;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 40px;

   @media (max-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
   }
   @media (max-width: 576px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
   }
`;
