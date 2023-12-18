import innov from '../pics/innov.webp'
import innov2 from '../pics/innov2.webp'

import { Button, Hidden, duration } from "@mui/material";
import { CButton2 } from '../components/CButton2';
import { React, useRef } from 'react';
import { motion, AnimatePresence, useInView } from "framer-motion";


function setColor(knop) {
    var btns = document.getElementsByName('knop')
    var btn = document.getElementById(`knop${knop}`)

    for (var i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor = "#000000"
    }
    btn.style.backgroundColor = "#222222"

    return btn
}

export default function Napravleniya(props) {

    const anim = {
        hidden: { opacity: 0, },
        show: {
            opacity: 1,
            transition: { duration: 2 }
        },
    }
    
    const targetRef = useRef(null);
    const isInView = useInView(targetRef, { once: true });

    let text1 = [<p>ИС <br /> Разработка IT-продуктов <br />номер направления - 09.03.02</p>, <p>ИЭ <br />Прикладная информатика в экономике <br />номер направления - 09.03.03 </p>]
    let text2 = [<div>Сегодня программисты незаменимы в любых отраслях - в финансовом секторе и продажах, медицине и социальной сфере, а также на всех уровнях наукоемкого производства. В рамках программы студенты последовательно создают все более сложные приложения, бизнес-системы, программные продукты.</div>,
    <div>Образовательная программа посвящена практическому освоению IT-разработки бизнес-систем и автоматизации бизнес-процессов. Выполняя каждый семестр все более прогрессивные проекты, студенты осваивают современные технологии, а также изучают расширенный блок экономических дисциплин.</div>]

    const show = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
        exit: { opacity: 0, transition: { duration: 0.3 } }
    }




    return <motion.div ref={targetRef} initial={'hidden'} animate={isInView ? 'show' : 'none'} variants={anim}>
        <div className="Text" style={{ fontSize: '70px', textAlign: 'center', margin: '150px 0 70px 0', display: 'flex' }} id='napravleniya'>
            <div style={{ width: '310px' }}></div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>Направления подготовки</div>
        </div>

        <div style={{ display: 'flex', padding: '0 150px 100px 50px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start' }}>
                <CButton2 name='knop' id='knop0' style={{ backgroundColor: '#222222' }} onClick={() => { props.setKnop(0); setColor(0); }}><div className='Text'>Информационные системы</div></CButton2>
                <CButton2 name='knop' id='knop1' onClick={() => { props.setKnop(1); setColor(1) }}><div className='Text'>Прикладная информатика</div></CButton2>
            </div>

            <div style={{ width: '100%', backgroundColor: '#222222', display: 'flex', padding: '80px 80px 100px 80px' }}>
                <AnimatePresence mode='wait'>
                    <motion.div style={{ display: 'flex', gap: '40px' }}
                        key={props.knop}
                        initial={'hidden'}
                        animate={'visible'}
                        exit={'exit'}
                        variants={show}
                    >
                        <img src={innov} style={{ width: '300px', height: '400px' }}></img>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div className="poloska2"></div>
                                <div className="Text green">
                                    {text1[props.knop]}
                                </div>
                            </div>
                            <div className='Text'>{text2[props.knop]}</div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>


        </div>
    </motion.div>
}