import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';

export const CButton = styled(Button)`
width:200px;
height:75px;
background-color: #8DFD1B;
border-radius:0;
color: black;
font-family: Play;
font-size: 25px;
:hover{
    background-color: #8DFD1B;
    transform: scale(1.15);
    transition: 0.3s;
}
:not(:hover) {
  transition: 0.3s;
}
:active{
     transition: 0.1s;
     transform: scale(1.05);
   }

`


// export const CButton = styled(Button)`
//   font-family: Montserrat;
//   font-style: normal;
//   font-weight: 700;
//   min-width: 45px;
//   max-width: 45px;
//   height:45px;
//   background-color:#F5F5F5;
//   color:black;
//   border-radius: 6.2px;
//   transition: 0.5s;
//   box-sizing: border-box;
//   overflow: hidden;

//   :hover {
//     background-color: #F5F5F5;
//     transform: scale(1.15);
//   }
//   :active{
//     transition: 0.1s;
//     transform: scale(1);
//    }
// `;    
