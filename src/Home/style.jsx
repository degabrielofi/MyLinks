import styled from 'styled-components'

export const Menu = styled.div`

.titles {

font-weight: 700;  
display: flex;
justify-content: center;
padding: 1.5rem;
align-items: center;  
flex-direction: column;
color: #fff;

}

.titles img {

width: 15%;

}

.img-logo{

border: 2px solid #fff;
border-radius: 50%;
padding: 3px;
transition: 0.3s;

}

.img-logo:hover{

border-color: #111;

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

 width: 50%;
 height: auto;

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
gap: 0 3rem;
width: 70%;
text-align: center;

}

.link a {

transition: all 0.3s;
color: #fff;
text-decoration: none;

}

.link .link-a:hover {

background: #fff;
color: #111;

}

.link .link-a {

position: relative;
border-radius: 0.5rem;
border: 2px solid #fff;
padding: 0.7rem;
margin: 1rem 0;
transition: 0.3s;

}

.link .link-a:hover {

border: 2px solid #111;

}

.link .link-a i {

position: absolute;
left: 20px;
line-height: 1;
font-size: 1.5rem;

}

.link .link-a h3 {

font-weight: normal;

}

.link .link-a .icon_bot:hover {

   color: #fff;
     
}

.link a:hover {

transform: scale(1.1);
transition: all 0.3s;

}

@media screen and (max-width:768px) {

.link .link-a h3 {

font-weight: normal;
font-size: 1.0rem;

}

.link {

 display: grid;
 grid-template-columns: 1fr;
 flex-direction: column;
 width: 90%;

}

.link a:hover {

transform: scale(1.05);
transition: all 0.3s;

}

}


`

export const Links = styled.div`

.sci {

position: relative;
top: auto;
display: flex;
justify-content: center;
color: #111;
transition: 0.5s all;
margin: 1rem;

}

.sci a {

list-style: none;
color: #fff;
font-size: 1.6em;
margin: 0 1rem;
transition: 0.5s all;


}

.sci a:hover {

transform: scale(1.3);
transition: all 0.5s;

}

.sci .insta:hover {

color: #b82ea7;
transition: all 0.5s;

}

.sci .twitter:hover {

color: #5BAFE8;
transition: all 0.5s;

}

.sci .discord:hover{

   color:#404eed;
   transition: all 0.5s;

}

`