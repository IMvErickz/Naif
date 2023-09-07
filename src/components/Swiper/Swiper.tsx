'use client'

import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
export function Carrousel() {

    const imgs = [
        { img: '/carrossel/capa site 2 1.svg' },
        { img: '/carrossel/1.svg' },
        { img: '/carrossel/2.svg' },
        { img: '/carrossel/3.svg' },
        { img: '/carrossel/4.svg' },
        { img: '/carrossel/5.svg' },
        { img: '/carrossel/6.svg' },
        { img: '/carrossel/7.svg' },
        { img: '/carrossel/8.svg' },
    ]

    return (
        <Carousel autoPlay className='carousel' showArrows={true}>
            {imgs.map(img => {
                return (
                    <div className='w-full flex flex-col items-center justify-center'>
                        {/* <Image
                            key={img.img}
                            src={img.img}
                            alt='Não encontrado'
                            width={0}
                            height={0}
                            className='rounded-lg'
                        /> */}

                        <img src={img.img} key={img.img} alt="Não encontrado" width={'auto'} />
                    </div>
                )
            })}
        </Carousel>
    )
}