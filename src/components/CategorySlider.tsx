'use client'
import React, { useState } from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function CategorySlider () {
      const categories = [
        {
            title: 'Terror',
            image: 'https://www.nacionrex.com/__export/1603150396511/sites/debate/img/2020/10/19/netflix-peliculas-de-terror-sinopsis-estreno_crop1603146387623.jpg_242310155.jpg'
        },
        {
            title: 'Suspense',
            image: 'https://imgix.bustle.com/uploads/shutterstock/2019/10/20/1e5e79b1-90d8-4e57-bc3c-3bb776297b88-shutterstock-5885695ax.jpg?w=1080&h=608&fit=crop&crop=faces&auto=format%2Ccompress&q=50&dpr=2'
        },
        {
            title: 'Fantasia',
            image: 'https://cdn-e360.s3-sa-east-1.amazonaws.com/las-30-mejores-peliculas-de-fantasia-en-la-historia-del-cine-large-BHcHRZjHPF.jpg'
        },
        {
            title: 'Drama',
            image: 'https://cuadrocomparativo.org/wp-content/uploads/2015/10/dramamaxresdefault.jpg'
        },
        {
            title: 'Romance',
            image: 'https://trome.pe/resizer/m5N_u7GxZBev2Ygs16G_w6RKq64=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/F6ZR3S4N7RCJZEKB65J57EEXQQ.jpg'
        },
        {
            title: 'Aventura',
            image: 'https://poptv.orange.es/wp-content/uploads/sites/3/2020/06/imagen-1-1-800x426.png'
        },
        {
            title: 'Auto Ajuda',
            image: 'http://www.homemalpha.com.br/wp-content/uploads/2011/07/Autoajuda.jpg'
        },
        {
            title: 'Investigação',
            image: 'https://i0.wp.com/nerdizmo.uai.com.br/wp-content/uploads/sites/29/2018/02/S%C3%A9ries-de-investiga%C3%A7%C3%A3o-para-assistir-na-Netflix-GEEKNESS-.jpg?resize=768%2C432&ssl=1'
        }
      ]

      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: categories.length - 1,
        slidesToScroll: 1
      };

      return (
        <div className="w-full mt-10 relative">
            <Slider {...settings}>
                {categories.map((category) => {
                    return <div className="cursor-pointer overflow-hidden">
                        <img className="w-[150px] h-[150px] rounded-[100%] object-cover" src={category.image} />
                        <h3 className="text-xl text-white font-semibold">{category.title}</h3>
                    </div>
                })}
            </Slider>
        </div>
      );
}