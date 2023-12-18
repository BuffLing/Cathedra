import brain from '../pics/Group 177.png'
import { Button, Hidden, duration } from "@mui/material";
import { CButton2 } from '../components/CButton2';
import { React, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";



export default function Infa2() {
    const anim = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition:{duration:2}},
        show2: { opacity: 1, transition:{duration:3}},

    }
    const targetRef = useRef(null);
    const isInView = useInView(targetRef, { once: true })
    // const {scrollYProgress} = useScroll({
    //     target: targetRef,
    //     offset:['start center','start start']
    // });
    //const opacity = useTransform(scrollYProgress,[0,1],[1,0])


    return <>
        {(
            <motion.div ref={targetRef} initial={{opacity:0}} animate={isInView ? 'show' : 'none'} className="classsss" variants={anim}>
                <div style={{ flexDirection: 'column', gap: '60px', display: 'flex', alignItems: 'center' }}>
                    <div className="Text logo" style={{ fontSize: '50px' }}>
                        О КАФЕДРЕ ИСиТ
                    </div>
                    <div style={{ display: 'flex', flexGrow: 1 }}></div>
                    <motion.div initial={{opacity:0}} animate={'show2'} variants={anim}><img src={brain} style={{ width: '450px' }}></img></motion.div>
                </div>

                <div style={{ flexDirection: 'column', gap: '40px', display: 'flex', paddingTop: '30px' }}>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'end' }}>
                        <div className="poloska"></div>
                        <div className="Text green" style={{ fontSize: '30px', lineHeight: '43px', display: 'flex', alignContent: 'end' }}>
                            Партнёры: <br /> ЗФ ПАО ГМК “Норильский никель” <br />Администрация города Норильска <br />АНО “Агенство развития Норильска”
                        </div>
                    </div>
                    <div className="Text" style={{ fontSize: '26px', lineHeight: '37px' }}>Кафедра Информационные системы и технологии основана на
                        базе Заполярного государственного университета - это передовой центр научных
                        исследований и разработок в области информационных технологий на территории Крайнего
                        Севера. Кафедра сотрудничает с крупнейшей в мире компанией-производителем никеля и палладия
                        - компанией “Норникель”, что позволяет студентам получить не только теоретические знания,
                        но и практические навыки работы с настоящими задачами, решаемыми на производстве.</div>
                </div>
            </motion.div>)
        }
    </>
}