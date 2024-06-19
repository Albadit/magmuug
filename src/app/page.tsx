'use client';

import React from 'react';
import Header from "@/components/header";
import Hero from "@/components/hero";
import Shop from "@/components/shop";
import Slider from "@/components/slider";
import Features from "@/components/features";
import Info from "@/components/info";
import Fun from "@/components/fun";
import Potential from "@/components/potential";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Shop/>
        <Slider/>
        <Features/>
        <Info/>
        <Fun/>
        <Potential/>
      </main>
      <Footer/>
    </>
  );
}
