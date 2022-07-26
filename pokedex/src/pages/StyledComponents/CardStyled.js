import styled from "styled-components"

export const CardContainer = styled.div`
height: 20vh;
width: 30vw;
margin: 10px;
margin-left: 15px;
margin-bottom: 25px;
padding: 10px;
position: relative;
display: flex;
border-radius: 12px;
@media(max-width: 800px) {
    width: 45vw;
  }
`

export const CardImage = styled.img`
position: absolute;
top: -45px;
right: 15px;
width: 193px;
height: 193px;
display: inline;
`

export const PokeballBackground = styled.img`
position: relative;
right: 0;
width: 250.73px;
height: 210.73px;
`

export const CaptureButton = styled.button`
width: 146px;
height: 38px;
right: 22px;
bottom: 13px;
border-radius: 8px;
padding: 4px, 10px, 4px, 10px;
font-size: 16px;
font-family: 'Poppins';
font-weight: 400;
line-height: 24px;
color: black;
position: absolute;
border: none;
&:hover{
background-color: #d3d3d3;
cursor: pointer;
}
`

export const DetailsButton = styled.button`
border: none;
text-decoration-line:underline ;
position: absolute;
bottom: 20px;
left: 23px;
font-size: 16px;
font-weight: 600;
line-height: 38.73px;
font-family: 'Poppins';
&:hover{
color: #d3d3d3;
cursor: pointer;
}
`
export const Name = styled.p`
margin: 0;
padding: 0;
font-size: 24px;
font-weight: 600;
line-height: 38.73px;
word-wrap: break-word;
background-color: none;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
`

export const Teste = styled.p`
height: fit-content;
width: fit-content;
padding: 0;
margin: 10px;
color: white;
font-size: 16px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
`

export const FirstContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

export const TypeContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;

`

export const TypeImage = styled.img`
max-width: 91px;
max-height: 31px;
margin-right: 5px;
`


