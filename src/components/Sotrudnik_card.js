import girl from '../pics/кибертянка.jpg'

export default function Sotrudnik(props){
    return<>
    <div class="container">
        <div class="card">
            <img src={props.pic} style={{height:'300px'}}alt="1"/>
            <br/>
            <br/>
            <div class="Text ">{props.prepod.name}</div>
            <div class="Text green" style={{lineHeight:'45px'}}>{props.prepod.title}</div>
            
        </div>
        
    </div>
    </>
}