'use client';

import Image from "next/image";
import React from 'react';
import { motion } from "framer-motion";

import Header from "@/components/header";
import Intro from "@/components/intro";
import Shop from "@/components/shop";
import Slider from "@/components/slider";
import Features from "@/components/features";
import Info from "@/components/info";
import Fun from "@/components/fun";
import Potential from "@/components/potential";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-background font-secondary text-textPrimary">
      <Header/>
      <main>
        <Intro/>
        <Shop/>
        <Slider/>
        <Features/>
        <Info/>
        <Fun/>
        <Potential/>
      </main>
      <Footer/>
    </div>
  );
}
