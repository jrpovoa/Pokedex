import styled from "styled-components"

export const Background = styled.div`
background-color: #5E5E5E;
width:100%;
margin: auto;
`

export const Header = styled.div`
background-color: white;
position: relative;
width: 100%;
height: 160px;
display: flex;
flex-wrap: wrap;
align-content: center;
justify-content: space-between;
align-items: center;
`
export const LogoPokemon = styled.img`
width: 307px;
height: 113px;
left: 566px;
top: 21px;
`

export const PokedexButton = styled.button`
padding: 4px 10px;
width: 287px;
height: 74px;
top: 41px;
right: 41px;
background-color: #33A4F5;
border-radius: 8px;
border: none;
color: white;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
&:hover{
background-color: #63bbfa;
cursor: pointer;
}
`

export const InvisibleButton = styled.button`
visibility: hidden;
width: 287px;
height: 74px;
`

export const Title = styled.h1`
width: 80%;
height: 72px;
position: relative;
left: 20px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
color: #FFFFFF;
text-transform: none;
`

export const MapContainer = styled.div`
width: 100%;
border-radius: 12px;
display: flex;
flex-wrap: wrap;

`
export const LoadMoreButton = styled.button`
padding: 4px 10px;
width: 400px;
height: 74px;
display: block;
margin: auto;
bottom: 10px;
background-color: #33A4F5;
border-radius: 8px;
border: none;
color: white;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
text-transform: none;
&:hover{
background-color: #63bbfa;
cursor: pointer;
}
`

export const ModalContainer = styled.div`
width: 30%;
height: 222px;
display: ${props=>props.modal};
position: fixed; 
margin: 35%;
z-index: 1;
padding-top: 100px; 
left: 0;
top: 0; 
overflow: auto;
background-color: #fefefe;
padding: 20px;
border: 1px solid #888;
border-radius: 12px;
`

export const Modal = styled.p`
color: black;
position: absolute;
margin: auto;
padding: 20px;
/* width: 80%; */
left: 123px;
top: 61px;
z-index: 2;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
text-decoration: none;
`

export const Modal2 = styled.p`
color: black;
position: absolute;
margin: auto;
padding: 20px;
/* width: 80%; */
left: 64px;
top: 133px; 
z-index: 2;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
text-decoration: none;
`
export const ModalContainerDelete = styled.div`
width: 30%;
height: 222px;
display: ${props=>props.modalDelete};
position: fixed; 
margin: 35%;
z-index: 1;
padding-top: 100px; 
left: 0;
top: 0; 
overflow: auto;
background-color: #fefefe;
padding: 20px;
border: 1px solid #888;
border-radius: 12px;
`
export const ModalDelete = styled.p`
color: black;
position: absolute;
margin: auto;
padding: 20px;
/* width: 80%; */
left: 123px;
top: 61px;
z-index: 2;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
text-decoration: none;
`

export const Modal2Delete = styled.p`
color: black;
position: absolute;
margin: auto;
padding: 20px;
/* width: 80%; */
left: 64px;
top: 133px; 
z-index: 2;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
text-decoration: none;
`