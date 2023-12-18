// import React from "react"
// import { CSSTransition, SwitchTransition } from "react-transition-group";
// import '../App.css';
// import { useRef, useState } from "react";


// export default function Programma() {


//     //let Programma = ['123456789','asdfghjk','zxcvbnm,']
//     let Programma = [<p>{'bbhefcbhcfbhffjb \n sdfghjkl;'}</p>,
//     <p>{'xcvbnm,. '}</p>,
//     <p>{'567890-= '}</p>]


//     const [sost, setSost] = React.useState(0)
//     const nodeRef = useRef(null);
//     const [inProp, setInProp] = useState(false);

//     return <>


//         <div style={{ marginTop: '150px', padding: '0 120px 0 140px', display: 'flex' }}>
//             <div style={{ flexDirection: 'column', display: 'flex', textAlign: 'start', gap: '60px' }}>
//                 <div className="Text" style={{ fontSize: '70px' }}>Образовательные программы</div>

//                 <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
//                     <a className="Text green2" href="https://polaruniversity.ru/vikon/sveden/files/OPOP(1).pdf" onMouseEnter={() => { setSost(0); setInProp(true) }}>09.03.02 - Информационные системы и технологии (ИС)</a>
//                     <a className="Text green2" href="https://polaruniversity.ru/vikon/sveden/files/OPOP(1).pdf" onMouseEnter={() => { setSost(1); setInProp(true) }}>09.03.03 - Прикладная информатика (ИЭ)</a>
//                     <a className="Text green2" href="https://polaruniversity.ru/vikon/sveden/files/OPOP(1).pdf" onMouseEnter={() => { setSost(2); setInProp(true) }}>09.03.03 - Прикладная информатика (ИЭ)</a>
//                 </div>
//             </div>

//             <div style={{ flexDirection: 'column', gap: '60px', display: 'flex', border: 'solid 3px #ffffff', backgroundColor: '#222222', padding: '50px', boxSizing: 'border-box', width: '750px', height: '650px' }}>
//                 <SwitchTransition mode="out-in">
//                     <CSSTransition
//                         classNames="my-node"
//                         in={inProp}
//                         timeout={200}
//                         key={sost}
//                     >
//                         <div class="Text" style={{height:'300px'}} >{Programma[sost]}</div>
//                     </CSSTransition>
//                 </SwitchTransition>
//             </div>
//         </div>

//     </>
// }



import React from "react"
import { useRef } from "react";
import '../App.css';
import { motion, AnimatePresence, useInView } from "framer-motion";



export default function Programma() {

    const anim = {
        hidden: { opacity: 0, scale: 0.95 },
        show: {
            opacity: 1, scale: 1,
            transition: { duration: 2 }
        },
        show2: {
            opacity: 1,
            transition: { duration: 2 }
        }
    }

    //let Programma = ['123456789','asdfghjk','zxcvbnm,']
    let Programma = [<>-Проектирование баз данных<br /><br />
        - Интеллектуальные системы и технологии<br /><br />
        - Разработка мобильных приложений<br /><br />
        - Корпоративные информационные системы<br /><br />
        - Системный анализ<br /><br />
        - Администрирование баз данных</>,
    <>- Высокоуровневые методики программирования<br /><br />
        - Технологии программирования<br /><br />
        - Системный анализ<br /><br />
        - Базы данных<br /><br />
        - Цифровизация экономических процессов<br /><br />
        - Теория информационных процессов и систем<br /><br />
    </>,
    <>- Облачная и мобильная разработка<br /><br />
    - Методы информационного дизайна<br /><br />
    - Компьютерное моделирование сложных экономических систем<br /><br />
    - Анализ систем информационной безопасности<br /><br />
    - Разработка web-приложений<br /><br />
    - Аналитический маркетинг</>]

    const targetRef = useRef(null);
    const isInView = useInView(targetRef, { once: true });

    const [sost, setSost] = React.useState(0);
    const [isVisible, setisVisible] = React.useState(true);

    return <>


        <div style={{ marginTop: '250px', padding: '0 120px 0 140px', display: 'flex', boxSizing: 'border-box' }}>
            <motion.div ref={targetRef} style={{ flexDirection: 'column', display: 'flex', textAlign: 'start', gap: '50px', flexGrow: 1 }} initial={{ opacity: 0 }} animate={isInView ? 'show2' : 'none'} variants={anim}>
                <div className="Text" style={{ fontSize: '70px' }}>Образовательная <br />программа <br /> ИСиТ</div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <a className="Text green2" href="https://polaruniversity.ru/vikon/sveden/files/IS_Xar-stika_OPOP-2023.pdf" target="_blank" onMouseEnter={() => { setSost(0); setisVisible(true) }} >Информационные системы и технологии<br />09.03.02<br />высшее образование - бакалавриат</a>
                    <a className="Text green2" href="https://polaruniversity.ru/vikon/sveden/files/OPOP(1).pdf" target="_blank" onMouseEnter={() => { setSost(1); setisVisible(true) }} >Прикладная информатика<br />09.03.03<br />высшее образование - бакалавриат</a>
                    <a className="Text green2" href="https://polaruniversity.ru/vikon/sveden/files/OPOP(5).pdf" target="_blank" onMouseEnter={() => { setSost(2); setisVisible(true) }} >Информационные системы и технологии<br />09.04.03<br />высшее образование - магистратура</a>
                </div>
            </motion.div>


            <motion.div ref={targetRef} style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'end' }} initial={'hidden'} animate={isInView ? 'show' : 'none'} variants={anim}>
                <div className="Text" style={{ textAlign: 'center', fontSize: '35px' }}>Основные дисциплины</div>
                <div style={{ flexDirection: 'column', gap: '60px', display: 'flex', border: 'solid 3px #ffffff', backgroundColor: '#222222', padding: '50px', boxSizing: 'border-box', width: '650px', height: '650px' }}>
                    <AnimatePresence mode="wait">
                        {isVisible && (
                            <motion.div
                                className="Text"
                                key={sost}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.18 }}
                                exit={{ opacity: 0 }}
                            >{Programma[sost]}</motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    </>
}
