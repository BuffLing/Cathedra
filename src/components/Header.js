import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


function Header() {
    return <motion.div className="Header"  initial={{fontSize:'0px',opacity:0}}animate={{fontSize:'30px',opacity:1}}transition={{duration:1}}>
        <div className="Text logo" >ИСиТ</div>
        <div style={{display:'flex',flexGrow:1}}></div>
        <div className="Perehodniki"  >
            <a className="Text perehod" href='#raspis'>расписание</a>
            <a className="Text perehod" href='#Sotrud'>сотрудники</a>
            <a className="Text perehod" href='#napravleniya'>направления</a>
            <a className="Text perehod" href='#dostizh'>достижения</a>
        </div>
    </motion.div>
    
}

export default Header;