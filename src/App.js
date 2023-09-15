import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from "react";
import {Nav, Navbar, Container} from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

   let [shoes] = useState(data)

   return (
      <div className="App">

      <Navbar bg="dark" variant="dark" className="Navbar">
         <Container>
         <Navbar.Brand href="#home">NAVAR</Navbar.Brand>
         <Nav className="me-auto">
         <Link to = "/">홈</Link>
           <Nav.Link href="#home">Home</Nav.Link>
           <Nav.Link href="#features">New</Nav.Link>
           <Nav.Link href="#pricing">Best</Nav.Link>
           <Nav.Link href="#pricing">Sale</Nav.Link>
           <Nav.Link href="#pricing">QnA</Nav.Link>
         </Nav>
         </Container>
      </Navbar>

      <Link to = "/">홈</Link>
      <Link to = "/detail">상세페이지</Link>
      

      <Routes>
         <Route path = "/" element = {   //메인페이지
            <>
            <div className="main-bg"></div>
            <div className="container">
               <div className="row">
                  { shoes.map((a, i)=>{
                     return (
                        <Card shoes= {shoes[i]} i={i}></Card>    //shoes 갯수만큼 map 반복문
                     )
                  })}           
               </div>
            </div>
            </>
         }/>
         <Route path = "/detail" element = { <div>상세페이지</div> }/>
      </Routes>

      {/* <div className="main-bg"></div>
      <div className="container">
         <div className="row">
            {/* <Card shoes = {shoes[0]} i={1}></Card>
            <Card shoes = {shoes[1]} i={2}></Card>
            <Card shoes = {shoes[2]} i={3}></Card>  위3줄 card 각각*/}       
            {/* { 
               shoes.map((a, i)=>{
                  return (
                     <Card shoes= {shoes[i]} i={i}></Card>    //shoes 갯수만큼 map 반복문
                  )
               })
            } */} 

{/* 상품 하나씩 */}
            {/* <div className="col-md-4">
               <img src = 'https://codingapple1.github.io/shop/shoes1.jpg' width="60%"/>
               <h5>{shoes[0].title}</h5>
               <p>{shoes[0].price}</p>
            </div>
            <div className="col-md-4">
               <img src = 'https://codingapple1.github.io/shop/shoes2.jpg' width="60%"/> 
               <h5>{shoes[1].title}</h5>
               <p>{shoes[1].price}</p>
            </div>
            <div className="col-md-4">
            <img src = 'https://codingapple1.github.io/shop/shoes3.jpg' width="60%"/>
               <h5>{shoes[2].title}</h5>
               <p>{shoes[2].price}</p>
            </div> */}
         {/* </div>
      </div> */}

    </div>
  );
}

// 상품 컴포넌트
function Card(props) {
   return(
      <div className="col-md-4">
         <img src = {'https://codingapple1.github.io/shop/shoes'+ (props.i+1) + '.jpg'} width="60%"/>
         <h5>{props.shoes.title}</h5>
         <p>{props.shoes.price}</p>
      </div>
   )
}


export default App;
