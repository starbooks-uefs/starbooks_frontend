'use client'
import React, { useState } from "react"
import BannerHome01 from "./icons/Banner_home_1"
import BannerHome02 from "./icons/Banner_home_2"
import BannerHome03 from "./icons/Banner_home_3"
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'

export default function Carrousel () {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const nextSlide = () => {
        if (currentIndex < 2) {
            setCurrentIndex(currentIndex + 1)
        } else {
            setCurrentIndex(0)
        }
    }

    const prevSlide = () => {
        if (currentIndex == 0) {
            setCurrentIndex(2)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }

    return (
       <div className="max-w-[1440px] w-full h-[400px] m-auto py-16 px-4 relative group">
            <div className="w-full h-full rounded-2xl duration-500">
            {currentIndex == 0 ? <BannerHome01 /> : null}
            {currentIndex == 1 ? <BannerHome02 /> : null}
            {currentIndex == 2 ? <BannerHome03 /> : null}
            </div>
            <div onClick={prevSlide} className="hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft size={30} />
            </div>
            <div onClick={nextSlide} className="hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight size={30} />
            </div>
       </div>
    )
}