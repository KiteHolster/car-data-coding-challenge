"use client"
import { useEffect, useState } from "react";
import anime from 'animejs';
import Image from "next/image";
import Title from "antd/es/typography/Title";

interface SplashScreenProps {
  finishLoading: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ finishLoading }) => {

    const animate = () => {
        const loader = anime.timeline({
            complete: () => finishLoading(),
        })
        loader.add({
            targets: "#logo",
            delay: 0, 
            scale: 1,
            duration: 500,
            easing: "easeInOutExpo",
        })
        loader.add({
            targets: "#logo",
            delay: 0, 
            scale: 1.25,
            duration: 500,
            easing: "easeInOutExpo",
        })
        loader.add({
            targets: "#logo",
            delay: 0, 
            scale: 1,
            duration: 500,
            easing: "easeInOutExpo",
        })
        loader.add({
            targets: "#logo",
            delay: 0, 
            scale: 1.25,
            duration: 500,
            easing: "easeInOutExpo",
        })
    }

    useEffect(() => {
        animate()
    })

    return (
        <div className="flex h-screen items-center justify-center text-center">
            <div className="flex flex-col items-center">
                <Image id="logo" src="/speedometer.gif" alt="" width={100} height={100}/>
                <Title className="mt-4" level={2}>Loading...</Title>
            </div>
        </div>
    )
}

export default SplashScreen;