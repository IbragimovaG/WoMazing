import React from 'react'
import './Home.css'
import { IoIosArrowRoundDown } from "react-icons/io";
import homeImg1 from '../../assets/dmitriy-7DD6tfTKqS4-unsplash 1.png'
import homeImg2 from '../../assets/Фото вторичное.png'
import homeImg3 from '../../assets/Фото третьестепенное.png'
export default function Home() {
  return (
    <div className='w-[100%] h-[100vh] lg:flex home'>
      <div className='w-[60%] h-[100%] pt-52 pl-52 flex flex-col gap-10 text-side'>
        <h1 className='font-[500] text-[55px] leading-[60.5px]'>Новые поступления в этом сезоне</h1>
        <p className='font-[400] text-[20px] leading-[28px] text-end w-96'>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
        <div className='flex items-center pl-20 button-side'>
          <button className='button1 py-2 px-2 bg-[#6E9C9F1A]'><IoIosArrowRoundDown className='text-[#6E9C9F] text-5xl' /></button>
          <button className='button2 bg-[#6E9C9F] py-5 px-14 text-white'>Открыть магазин</button>
        </div>
      </div>
      <div className='w-[40%] h-[100%] bg-[#F1EADC] relative img-side'>
        <img className='img1 absolute top-24 left-10'width={350} src={homeImg1} alt="" />
        <img className='img2 absolute top-52 left-80' src={homeImg2} alt="" />
        <img className='img3 absolute bottom-0 z-40 -left-20' src={homeImg3} alt="" />
      </div>
    </div>
  )
}
