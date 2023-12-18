import krug from '../pics/IMAGE.png'
import Kartocka from '../components/kartochka_dostizh'
import { motion,useInView } from "framer-motion";
import { useRef } from 'react';
import icon1 from '../pics/image (1).png'
import icon2 from '../pics/image (2).png'
import icon3 from '../pics/image (3).png'
import icon4 from '../pics/image (4).png'
import icon5 from '../pics/image (5).png'
import icon6 from '../pics/image(6).png'



export default function Dostizheniya() {
    let icon = [[icon5,icon6],[icon3,icon1],[icon4,icon2]]
    let nomer = [[1,2], [3,4], [5,6]]
    let Dostizh = ['Развитие научных исследований в области информационных технологий, включая разработку новых методов и алгоритмов обработки данных,создание и оптимизацию баз данных и информационных систем',
        'Активное участие в международных конкурсах и выставках, где кафедра представляет свои научные и практические разработки, что способствует развитию научных контактов и обмену опытом',
        'Внедрение новых технологий в учебный процесс, включая применение электронных учебных материалов и онлайн-курсов, что позволяет обучаться студентам в любое время и из любой точки мира',
        'Сотрудничество с крупными IT-компаниями и предприятиями, что позволяет студентам проходить производственную практику и трудоустроиться после окончания обучения',
        'Разработка программных продуктов и систем для промышленных предприятий, в том числе для автоматизации производственных процессов, управления энергоэффективностью и др',
        'Создание центра информационных технологий и разработок, где студенты могут проводить научные исследования и разработки в области информационных технологий'
    ]
    let Text = ['ОПТИМИЗАТОР', 'ЗА ГРАНИЦУ', 'ТЕХНОЛОГИЧНОСТЬ', 'НАЛАЖИВАЕМ СВЯЗИ', 'НА ЗАВОД!', 'РАЗВИТИЕ']

    const anim = {
        hidden: { opacity: 0 },
        show: i => ({
            opacity: 1,
            x: [-100, 0],
            transition: { duration: 1.5,delay: i * 0.5 }
        }),
        show2: i => ({
            opacity: 1,
            x: [100, 0],
            transition: { duration: 1.5, delay: i * 0.5 }
        }),
        show3: {
            opacity: 1,
            transition: { duration: 2, delay:  0.5 }
        },
        show4: {
            opacity: 1,
            transition: { duration: 2}
        }
    }
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return <div ref={ref}>
        <motion.div initial={'hidden'} animate={isInView ? 'show3' : 'none'} variants={anim} style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <img src={krug} style={{ width: '700px', position: 'absolute', left: '20px', zIndex: 1 }}></img>
            <img src={krug} style={{ width: '700px', position: 'absolute', right: '50px', top: '400px', zIndex: 1 }}></img>
            <img src={krug} style={{ width: '700px', position: 'absolute', top: '800px', left: '20px', zIndex: 1 }}></img>
        </motion.div>

        <motion.div className='Text logo' id='dostizh' initial={'hidden'} animate={isInView ? 'show4' : 'none'} variants={anim}  style={{ textAlign: 'center', fontSize: '70px', margin: '100px 0 100px 0', zIndex: 2 }}>Достижения</motion.div>
        <div style={{ display: 'flex', gap: '100px', flexDirection: 'column', alignItems: 'center' }}>
            {nomer.map((el, i) => (
                <div key={i} style={{ display: 'flex', gap: '100px',flexWrap:'wrap' }}>
                    <motion.div initial={'hidden'}
                        animate={isInView ? 'show' : 'none'}
                        variants={anim}
                        custom={i}
                    ><Kartocka nomer={nomer[i][0]} dostizh={Dostizh[nomer[i][0]-1]} text={Text[nomer[i][0]-1]} pic={icon[i][0]}></Kartocka></motion.div>
                    <motion.div initial={'hidden'}
                        animate={isInView ? 'show2' : 'none'}
                        variants={anim}
                        custom={i}>
                        <Kartocka nomer={nomer[i][1]} dostizh={Dostizh[nomer[i][1]-1]} text={Text[nomer[i][1]-1]} pic={icon[i][1]}></Kartocka></motion.div>
                </div>))
            }

        </div>

    </div>
}