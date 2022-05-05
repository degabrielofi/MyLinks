import styled from 'styled-components'

export const Menu = styled.div`

.titles {

font-weight: 700;  
display: flex;
justify-content: center;
padding: 3rem;
align-items: center;  
flex-direction: column;
color: #fff;

}

.titles img {

width: 15%;

}

.img-logo{

border:2px solid white;
border-radius: 50%;
padding:3px;
transition: 0.3s;

}

.img-logo:hover{

border-color: black;

}

.titles h1 {

margin: 0.5rem;

}

.titles h4 {

font-weight: 400;

}

@media screen and (max-width:768px) {

.titles {

font-size: 0.8rem;

}

.titles img {

 width: 40%;

}
}

`

export const Container = styled.div`



.my-links {

display: flex;
justify-content: center;

}

.link {

display: grid;
grid-template-columns: 1fr 1fr;
gap: 0 2rem;
width: 50%;
text-align: center;

}

.link a {

transition: all 0.3s;
color: white;
text-decoration: none;

}

.link .link-a:hover {

background: white;
color: #0077ff;

}

.link .link-a {

position: relative;
border-radius: 7px;
border:2px solid white;
padding:10px;
margin:17px 0;
transition: 0.3s;

}

.link .link-a i {

position: absolute;
left: 20px;
line-height: 1;
font-size: 23px;

}

.link .link-a h3 {

font-weight: normal;

}

.link a:hover {

transform: scale(1.1);
transition: all 0.3s;

}

@media screen and (max-width:768px) {

.link {

 display: grid;
 grid-template-columns: 1fr;
 flex-direction: column;
 width: 80%;

}

}


`