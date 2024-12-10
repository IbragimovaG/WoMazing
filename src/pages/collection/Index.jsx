import React from 'react'
import img1 from '../../assets/card1img.png'
import img2 from '../../assets/card2img.png'
import img3 from '../../assets/card3img.png'
import { HiOutlineArrowRight } from 'react-icons/hi2'
import './Index.css'
import { Link } from 'react-router-dom'
export default function Index() {
    return (
        <div className='px-52 w-[100%] h-[70vh] pt-32'>
            <h1 className='text-[40px] font-medium py-16'>
                Новая коллекция
            </h1>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col items-center gap-3  w-1/3 h-full'>
                    <img src={img1} alt="" />
                    <div>
                        <h4 className='text-[20px] font-[500 ]'>
                            Футболка USA
                        </h4>
                        <div className='flex gap-3  justify-center text-[#998E78]'>
                            <p><del>$229</del></p>
                            <p>$129</p>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col text-center items-center gap-3  w-1/3 h-full'>
                    <img src={img2} alt="" />
                    <div>
                        <h4 className='text-[20px] font-[500 ]'>
                            Купальник Glow
                        </h4>
                        <p className='text-[#998E78]'>$129</p>
                    </div>

                </div>
                <div className='flex flex-col text-center items-center gap-3  w-1/3 h-full'>
                    <div className='w-[100%] h-[66vh] relative flex justify-center items-center z-40'>
                        <HiOutlineArrowRight className='absolute text-white text-4xl arr' />
                        <div className='absolute hover:bg-[#6E9C9FA3] transition w-full h-full -z-10'></div>
                        <img className='absolute w-full h-full -z-40' src={img3} alt="" />
                    </div> 
                                   
                     <div>
                        <h4 className='text-[20px] font-[500 ]'>
                            Свитшот Sweet Shot
                        </h4>
                        <p className='text-[#998E78]'>$129</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
