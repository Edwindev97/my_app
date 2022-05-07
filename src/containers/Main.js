import React from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";

import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";

import Education from "./education/Education";
import Top from "./topbutton/Top";

import Profile from "./profile/Profile";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";
import TestimonialsPage from "./testimonials/testimonail";


const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };
   
  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
       <Greeting />
       <Skills />
         <Education />
       <WorkExperience /> 
       <Projects /> 
        <StartupProject />
        <Achievement />
        <Blogs />
        <TestimonialsPage />
        <Top />
        <Profile />
         <Footer /> 
      </StyleProvider>
    </div>
  );

};

export default Main;
