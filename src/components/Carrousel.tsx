'use client'
import { useState } from "react"
import BannerHome01 from "../icons/Banner_home_1"
import BannerHome02 from "../icons/Banner_home_2"
import BannerHome03 from "../icons/Banner_home_3"
import { BsChevronCompactRight, BsChevronCompactLeft} from 'react-icons/bs'
import { useRouter } from "next/router"

export default function Carrousel () {
    const [activeBanner, setActiveBanner] = useState(0)
    const BannerSlider = [<BannerHome01 />, <BannerHome02 />, <BannerHome03 />]
   
    const moveLeft = () => {
        if (activeBanner !== 0) {
            setActiveBanner(activeBanner - 1)
        } else {
            setActiveBanner(2)
        }
    }

    const moveRight = () => {
        if (activeBanner !== 2) {
            setActiveBanner(activeBanner + 1)
        } else {
            setActiveBanner(0)
        }
    }

    return (
       <div className="w-full h-[450px] relative">
            <svg className="w-full h-full bg-center bg-cover duration-500">{BannerSlider[activeBanner]}</svg>
            <div onClick={moveLeft} className="absolute top-[40%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft size={30} />
            </div>
            <div onClick={moveRight} className="absolute top-[40%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight size={30} />
            </div>
       </div>
    )
}