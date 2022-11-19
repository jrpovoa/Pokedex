import styled from "styled-components"

export const CardContainer = styled.div`
height: 20vh;
width: 30vw;
margin: 1vh 1vw;
padding: 1vh 1vw;
position: relative;
display: flex;
border-radius: 12px;
max-width: 500px;
max-height: 200px;
@media only screen and (max-width: 800px){
  height: 14vh;
  width: 45vw;
}
`

export const CardImage = styled.img`
position: absolute;
top: -4vh;
right: 1vw;
width: 10vw;
height: 21vh;
display: inline;
@media only screen and (max-width: 800px){
  width: 20vw;
  height: 14vh;
}
`

export const PokeballBackground = styled.img`
position: absolute;
right: 0;
width: 15vw;
height: 23vh;
@media only screen and (max-width: 800px){
  width: 100px;
  height: 140px;
}
`

export const CaptureButton = styled.button`
width: 8vw;
max-width: 140px;
height: 4vh;
max-height: 40px;
right: 1vw;
bottom: 1vh;
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
@media only screen and (max-width: 800px){
  font-size: 12px;
  width: 70px;
  height: 30px;
}
`

export const CapturedButton = styled.button`
width: 8vw;
max-width: 150px;
height: 4vh;
max-height: 40px;
right: 1vw;
bottom: 1vh;
border-radius: 8px;
padding: 4px, 10px, 4px, 10px;
font-size: 16px;
font-family: 'Poppins';
font-weight: 400;
line-height: 24px;
background-color: #3eb93e;
color: white;
position: absolute;
border: none;
@media only screen and (max-width: 800px){
  font-size: 10px;
  width: 70px;
  height: 30px;
}
`
export const DeleteButton = styled.button`
width: 8vw;
max-width: 150px;
height: 4vh;
max-height: 40px;
right: 1vw;
bottom: 1vh;
border-radius: 8px;
padding: 4px, 10px, 4px, 10px;
font-size: 16px;
font-family: 'Poppins';
font-weight: 400;
line-height: 24px;
background-color: #FF6262;
color: white;
position: absolute;
border: none;
&:hover{
background-color: #ffa9a9;
cursor: pointer;
}
@media only screen and (max-width: 800px){
  font-size: 12px;
  width: 70px;
  height: 30px;
}
`

export const DetailsButton = styled.button`
border: none;
text-decoration-line:underline ;
position: absolute;
bottom: 0.5vh;
left: 1vw;
font-size: 16px;
font-weight: 600;
line-height: 38.73px;
font-family: 'Poppins';
&:hover{
color: #d3d3d3;
cursor: pointer;
}
@media only screen and (max-width: 800px){
  font-size: 12px;
  left: 3px;
  height: 35px;
}
`

export const Name = styled.p`
margin: 0;
padding: 0;
word-wrap: break-word;
background-color: none;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
@media only screen and (max-width: 800px){
  font-size: 16px;
}
`

export const Teste = styled.p`
height: fit-content;
width: fit-content;
padding: 0;
margin: 0;
color: white;
font-size: 16px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
@media only screen and (max-width: 800px){
  font-size: 12px;
  margin: 0;
  margin-left: 3px;
}
`

export const FirstContainer = styled.div`
display: flex;
flex-direction: column;
margin: 0px;
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
margin-right: 10px;
@media only screen and (max-width: 800px){
  width: 50px;
  height: 22px;
}
`

export const ModalContainer = styled.div`
width: 100%;
height: 100%;
display: ${props=>props.modal};
position: fixed;
top: 0;
left: 0;
background-color:  rgba(0, 0, 0, 0.8);
z-index: 1;
@media only screen and (max-width: 800px){

}
`

export const GrayContainer = styled.div`
width: 50vw;
height: 80vh;
margin: 0vh auto;
border-radius: 12px;
background-color: #787878;
@media only screen and (max-width: 800px){
    width: 90vw;
    height: 60vh;
    margin: 20vh auto;
}
`

export const DetailsTitle = styled.h1`
padding: 1vw;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 32px;
@media only screen and (max-width: 800px){
  font-size: 20px;
  margin: 1vw;
}
`

export const DetailsContainer = styled.div`
width: 95%;
height: 80%;
margin: auto;
border-radius: 12px;
display: flex;
`

export const ImageContainer = styled.div`
margin: auto;
display: flex;
flex-direction: column;
`

export const DetailImage = styled.img`
width: 12vw;
height: 24vh;
background-color: white;
border-radius: 18px;
margin: 1vh;
@media only screen and (max-width: 800px){
    width: 90px;
    height: 160px;
}
`

export const InfoContainer = styled.div`
display: flex;
background-color: white;
flex-direction: column;
border-radius: 12px;
width: 12vw;
height: 48vh;
padding: 1vh;
margin: auto;
@media only screen and (max-width: 800px){
    width: 100px;
    height: 320px;
    /* margin: 1vh; */
    /* padding: 2x; */
}
`

export const DetailsStats = styled.p`
color: black;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 28px;
margin: 1vh;
@media only screen and (max-width: 800px){
  font-size: 12px;
  margin: 1vh 0 0 0;
}
`

export const ColumnContainer = styled.div`
display: flex;
flex-direction: column;
border-radius: 12px;
`

export const StatsName = styled.p`
color: black;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 12px;
margin: 1vh 0 0 0;
display: inline;
@media only screen and (max-width: 800px){
  font-size: 8px;
  margin: 1vh 0 0 0;
}
`

export const StatsNumber = styled.p`
color: black;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 12px;
display: inline;
@media only screen and (max-width: 800px){
  font-size: 8px;
}
`

export const NameContainer = styled.div`
margin: 0 auto;
display: flex;
flex-direction: row;
`

export const StatsContainer = styled.div`
display: flex;
flex-direction: column;
margin: 1vh;
@media only screen and (max-width: 800px){
  margin: 1vh;
}
`

export const DetailsNumber = styled.p`
margin-top: 6vh;
margin-bottom: 0;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
display: inline;
@media only screen and (max-width: 800px){
  font-size: 10px;
  /* margin: auto; */
}
`

export const DetailsName = styled.p`
margin: 0;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
display: inline;
vertical-align: top;
@media only screen and (max-width: 800px){
  font-size: 20px;
}
`

export const TypeDetails = styled.div`
display: flex;
gap: 10px;
`

export const TypeImageDetails = styled.img`
max-width: 91px;
max-height: 31px;
margin: 1vh 0 4vh;
@media only screen and (max-width: 800px){
  width: 50px;
  height: 22px;
}
`

export const MainImage = styled.img`
position: absolute;
top: 10vh;
width: 10vw;
height: 20vh;
margin: 0;
z-index: 1;
@media only screen and (max-width: 800px){
  width: 100px;
  height: 120px;
  top: 20vh;
  right: 30px;
}
`

export const MovesContainer = styled.div`
background-color: white;
border-radius: 12px;
width: 10vw;
height: 35vh;
margin: auto;
margin-top: 5px;
@media only screen and (max-width: 800px){
  width: 100px;
  height: 210px;
}
`

export const Moves = styled.p`
color: black;
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 24px;
margin: 1vh;
@media only screen and (max-width: 800px){
  font-size: 12px;
}
`

export const MovesBackground = styled.div`
background: #ECECEC;
border: 1px dashed rgba(0, 0, 0, 0.14);
border-radius: 12px;
margin: 1vh;
max-width: 150px;
@media only screen and (max-width: 800px){
  margin: 2px;
  width: 90px;
}
`

export const MovesSlice = styled.p`
color: black;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
margin: 1vh;
@media only screen and (max-width: 800px){
  font-size: 10px;
}
`
export const PokeballImage = styled.img`
position: absolute;
right: 26vw;
width: 40vw;
height: 70vh;
@media only screen and (max-width: 800px){
  right: 6vw;
  width: 400px;
  height: 450px;
}`

export const CloseButton = styled.button`
margin: auto;
background-color:#fa3a25;
color: white;
border: none;
font-family: 'Inter';
border-radius: 3px;
position: absolute;
right: 25vw;
top: 3vh;
display: block;
cursor: pointer;
&:hover{
background-color: #ffa9a0;
color: white;
}
@media only screen and (max-width: 800px){
  font-size: 12px;
  top: 15vh;
  right: 7vw;
}`