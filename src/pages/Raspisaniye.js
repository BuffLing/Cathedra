import React from "react"
import { useRef } from "react";
import '../App.css';
import { motion, useInView } from "framer-motion";

export default function Raspisaniye() {

    const anim = {
        hidden: { opacity: 0, scale: 0.95 },
        show: {
            opacity: 1, scale: 1,
            transition: { duration: 2 }
        },
        
    }

    const targetRef = useRef(null);
    const isInView = useInView(targetRef, { once: true });

    return <motion.div ref={targetRef} initial={'hidden'} animate={isInView ? 'show' : 'none'} variants={anim}>
        <div className='Text logo' id="raspis" style={{ textAlign: 'center', fontSize: '70px', margin: '8% 0px 0px 0px', zIndex: 2 }}>Расписание</div>
        <div style={{ display: 'flex', width: '100%', marginTop: '50px', justifyContent: 'center' }}>
            <div style={{ display: 'flex', border: 'solid #fff 2px', width: '68%', height: '55%' }}>

                <div style={{ display: 'flex', flexDirection: 'column', borderRight: 'solid #fff 2px', width: '50%', position: 'relative' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '80%', paddingTop: '15px', boxSizing: 'border-box', gap: '20px' }}>
                        <a className="Text green" style={{ textAlign: "center", fontSize: '35px' }}>пн-пт</a>
                        <div style={{ display: 'flex' }}><div className="flexblock">1</div><a className="Text raspisan">09:00 - 10:20</a><div className="flexblock zero">1</div></div>
                        <div style={{ display: 'flex' }}><div className="flexblock">2</div><a className="Text raspisan">10:30 - 11:50</a><div className="flexblock zero">1</div></div>
                        <div style={{ display: 'flex' }}><div className="flexblock">3</div><a className="Text raspisan">12:20 - 13:40</a><div className="flexblock zero">1</div></div>
                        <div style={{ display: 'flex' }}><div className="flexblock">4</div><a className="Text raspisan">13:50 - 15:10</a><div className="flexblock zero">1</div></div>
<br></br>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '80%', boxSizing: 'border-box', gap: '20px' }}>
                        <a className="Text green" style={{ textAlign: "center", fontSize: '35px' }}>сб</a>
                        <div style={{ display: 'flex' }}><div className="flexblock">1</div><a className="Text raspisan">09:00 - 10:20</a><div className="flexblock zero">1</div></div>
                        <div style={{ display: 'flex' }}><div className="flexblock">2</div><a className="Text raspisan">10:30 - 11:50</a><div className="flexblock zero">1</div></div>
                        <div style={{ display: 'flex' }}><div className="flexblock">3</div><a className="Text raspisan">12:00 - 13:20</a><div className="flexblock zero">1</div></div>
                        <div style={{ display: 'flex' }}><div className="flexblock">4</div><a className="Text raspisan">13:30 - 14:50</a><div className="flexblock zero">1</div></div>
                    </div>

                </div>

                <div style={{ display: 'flex', flexDirection: 'column', width: '50%', position: 'relative' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '80%', paddingTop: '15px', boxSizing: 'border-box', gap: '20px' }}>
                        <a className="Text green" style={{ textAlign: "center", fontSize: '35px' }}>группы-очники</a>
                        <div className="Text raspisan" style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}><a>ИС-23</a><a >ИЭ-23</a></div>
                        <div className="Text raspisan" style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}><a >ИС-22</a><a >ИЭ-22</a></div>
                        <div className="Text raspisan" style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}><a >ИС-21</a><a >ИЭ-21</a></div>
                        <div className="Text raspisan" style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}><a >ИС-20</a><a >ИЭ-20</a></div>
                    </div>
<br></br>
<br></br>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '80%', boxSizing: 'border-box', gap: '20px' }}>
                        <a className="Text green" style={{ textAlign: "center", fontSize: '35px'}}>другие группы</a>
                        <div className="Text raspisan" style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}><a>ИС-23</a><a >ИЭ-23</a></div>
                        <div className="Text raspisan" style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}><a >ИС-22</a><a >ИЭ-22</a></div>
                        <div className="Text raspisan" style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}><a >ИС-21</a><a >ИЭ-21</a></div>
                        <div className="Text raspisan" style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}><a >ИС-20</a><a >ИЭ-20</a></div>
                        <br></br>
                    </div>

                </div>






            </div>
        </div>
    </motion.div>
}