import React from 'react'
import { Menu, Container, Links } from "./style"
import Profile from "../assets/profile.png"

const Home = () => {
    return (

        <>

            <Menu>
                <div className="titles">
                    <img className="img-logo" src={Profile} alt="Profile" />
                    <h1>Gabriel Silva</h1>
                    <h4>Desenvolvedor Web - @degabrielofi_</h4>
                </div>
            </Menu>

            <Container>
                <div className="my-links">
                    <div className="link">
                        <a href="https://github.com/degabrielofi" target="_black"><div className="link-a"><i className="fab fa-github"></i> <h3>GitHub</h3></div></a>
                        <a href="mailto:contatodegabrielofi@gmail.com" target="_black"><div className="link-a"><i className="fas fa-envelope"></i> <h3>Entre em contato</h3></div></a>
                        <a href="https://www.linkedin.com/in/degabrielofi/" target="_black"><div className="link-a"><i className="fab fa-linkedin"></i> <h3>Linkedin</h3></div></a>
                        <a href="https://degabrielofi.vercel.app/" target="_black"><div className="link-a"><i className="fas fa-briefcase"></i> <h3>Portfólio</h3></div></a>
                        <a href="https://degabrielofimovieflix.netlify.app/" target="_black"><div className="link-a"><i className="fas fa-film"></i> <h3>MovieFlix</h3></div></a>
                        <a href="https://dgzzinbot.netlify.app/" target="_black"><div className="link-a"><i className='fas fa-robot	'></i><h3>Adicione o DGzzIN ツ</h3></div></a>
                    </div>
                </div>
            </Container>

            <Links>
                <div className='sci'>
                    <a href="https://www.instagram.com/degabrielofi_/" target="_black"><div className="insta"><i className="fab fa-instagram"></i></div></a>
                    <a href="https://discord.com/invite/TNMzEFyxA4" target="_black"><div className="discord"><i className='fab fa-discord'></i></div></a>
                </div>
            </Links>

        </>

    )
}

export default Home