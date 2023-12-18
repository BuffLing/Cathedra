import Sotrudnik from "../components/Sotrudnik_card";
import React, { useRef, useState } from 'react';
import Dyptan from '../pics/Dyptan Yelena Arnoldovna.jpeg'
import Belyaev from '../pics/Belyaev Igor Sergeevich.jpeg'
import Petrov from '../pics/Petrov Alexey Mikhailovich.jpeg'
import Popkova from '../pics/Popkova Alla Alexeevna.jpeg'
import Fedenko from '../pics/Fedenko Anton Olegovich.webp'
import Faddeenkov from '../pics/Faddeenkov Andrey Vladimirovich.jpeg'
import Tsukanov from '../pics/Tsukanov Gleb Konstantinovich.jpg'
import Bodryakova from '../pics/Bodryakova Ludmila Vladimirovna.jpeg'
import But from '../pics/But Vladislav Vladimirovich.webp'

import '../App.css';





// Import Swiper React components
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import { motion, useInView } from "framer-motion";



// Import Swiper styles
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




export default function Sotrudniki() {

  const anim = {
    hidden: { opacity: 0, },
    show: {
      opacity: 1,
      transition: { duration: 2 }
    },
  }
  const targetRef = useRef(null);
  const isInView = useInView(targetRef, { once: true });

  let prepodi = [{ name: <div className="Prepodiii">ДЫПТАН <br />ЕЛЕНА АРНОЛЬДОВНА</div>, title: <div className="Prepodiii">cтарший преподаватель</div>, title2: '' }
    , { name: <div className="Prepodiii">БЕЛЯЕВ <br />ИГОРЬ СЕРГЕЕВИЧ</div>, title: <div className="Prepodiii">cтарший преподаватель</div>, title2: 'Кандидат экономических наук' },
  { name: <div className="Prepodiii">ПЕТРОВ <br />АЛЕКСЕЙ МИХАЙЛОВИЧ</div>, title: <div className="Prepodiii">доцент</div>, title2: '' }
    , { name: <div className="Prepodiii">БОДРЯКОВА <br />ЛЮДМИЛА НИКОЛАЕВНА</div>, title: <div className="Prepodiii">доцент</div>, title2: 'Кандидат технических наук' },
  { name: <div className="Prepodiii">ФАДДЕЕНКОВ <br />АНДРЕЙ ВЛАДИМИРОВИЧ</div>, title: <div className="Prepodiii">доцент</div>, title2: 'Кандидат технических наук' }
    , { name: <div className="Prepodiii">ПОПКОВА <br />АЛЛА АЛЕКСЕЕВНА</div>, title: <div className="Prepodiii">доцент</div>, title2: 'Кандидат технических наук' },
  { name: <div className="Prepodiii">ФЕДЕНКО <br />АНТОН ОЛЕГОВИЧ</div>, title: <div className="Prepodiii">ассистент</div>, title2: '' }
    , { name: <div className="Prepodiii">БУТ <br />ВЛАДИСЛАВ ВЛАДИМИРОВИЧ</div>, title: <div className="Prepodiii">доцент</div>, title2: '' },
  { name: <div className="Prepodiii">ЦУКАНОВ <br />ГЛЕБ КОНСТАНТИНОВИЧ</div>, title: <div className="Prepodiii">ассистент</div>, title2: '' }]

  return <motion.div ref={targetRef} initial={'hidden'} animate={isInView ? 'show' : 'none'} variants={anim}>
    <div className='Text logo' id='Sotrud' style={{ textAlign: 'center', fontSize: '70px', margin: '150px 0 50px 0', zIndex: 1 }}>Сотрудники</div>
    <Swiper
      spaceBetween={0}
      centeredSlides={true}

      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Navigation,Autoplay]}
      slidesPerView={3}
      className="mySwiper"
    >
      <SwiperSlide><Sotrudnik prepod={prepodi[0]} pic={Dyptan} /></SwiperSlide>
      <SwiperSlide><Sotrudnik prepod={prepodi[1]} pic={Belyaev}/></SwiperSlide>
      <SwiperSlide><Sotrudnik prepod={prepodi[2]} pic={Petrov}/></SwiperSlide>
      <SwiperSlide><Sotrudnik prepod={prepodi[3]} pic={Bodryakova}/></SwiperSlide>
      <SwiperSlide><Sotrudnik prepod={prepodi[4]} pic={Faddeenkov}/></SwiperSlide>
      <SwiperSlide><Sotrudnik prepod={prepodi[5]} pic={Popkova}/></SwiperSlide>
      <SwiperSlide><Sotrudnik prepod={prepodi[6]} pic={Fedenko}/></SwiperSlide>
      <SwiperSlide><Sotrudnik prepod={prepodi[7]} pic={But}/></SwiperSlide>
      <SwiperSlide><Sotrudnik prepod={prepodi[8]} pic={Tsukanov}/></SwiperSlide>
    </Swiper>


  </motion.div>
}