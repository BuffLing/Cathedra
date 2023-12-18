import zIndex from '@mui/material/styles/zIndex'
import girl from '../pics/кибертянка.jpg'


export default function Kartocka(props) {
    return <>
        <div style={{ zIndex: 1, position: 'relative'}}>
            <div style={{ position: 'absolute', zIndex: 3, fontSize: '40px', fontFamily: 'DM Mono', color: '#8dfd1b', left: '30px', top: '15px' }}>{props.nomer}</div>
            <div className='head'>
                <div className='zeleniy_Kvadrat'></div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className='Text green' style={{ fontSize: '18px' }}>Достижение {props.nomer} - completed</div>
                    <div className='Text'>{props.text}</div>
                </div>
            </div>

            <div className='Dostizheniye'>
                <div className='Text' style={{ fontSize: '20px' }}>{props.dostizh}</div>
                <img src={props.pic} style={{ height: '70px' }}></img>

            </div>
        </div>
    </>
}