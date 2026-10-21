// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'
import Header from "./components/Header.tsx";
import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import Education from "./components/mains/Education.tsx";
import Home from "./components/mains/Home.tsx";
import Experience from "./components/mains/Experience.tsx";
import Skills from "./components/mains/Skills.tsx";
import Contact from "./components/mains/Contact.tsx";
import Projects from "./components/mains/Projects.tsx";
import styled from "styled-components"

const StyledWrapper=styled.div`
    margin: 0 auto;
    box-sizing: border-box;
    font-family: Merriweather, serif;
    background-color: burlywood;
    width: 100%;
    padding: 0;
`;

const StyledContainer=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0;
    
    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`;

function Root(){
  return(
      <StyledWrapper>
        <Header/>
        <StyledContainer>
          <Nav/>
          <Routes>
            <Route
                path={`/`}
                element={<Home/>}
            />
            <Route
                path={`/education/education.html`}
                element={<Education/>}
            />
            <Route
                path={`/experience/experience.html`}
                element={<Experience/>}
            />
            <Route
                path={`/skills/skills.html`}
                element={<Skills/>}
            />
            <Route
                path={`/contact/contact.html`}
                element={<Contact/>}
            />
            <Route
                path={`/projects/projects.html`}
                element={<Projects/>}
            />

          </Routes>
        </StyledContainer>
        <Footer/>
      </StyledWrapper>
  );
}

const router=createBrowserRouter(
    [{path:"*",Component:Root}]
)

export default function App() {

  return (
      <>
        <RouterProvider router={router}/>
      </>
  )
}