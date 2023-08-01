"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import { BudgetManagement } from "./components/stylingLight";
import Footer from "./components/footer";
import CTASection from "./components/xFooter";



export default function Home() {
  

  return (
    <div className="">
      <Navbar/>
      <Intro/>
      <BudgetManagement/>
      <CTASection/>
      <Footer/>

    </div>
  );
}
