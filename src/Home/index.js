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
                        <a href="https://www.instagram.com/degabrielofi_/" target="_black"><div className="link-a"><i className="fab fa-instagram"></i> <h3>Instagram</h3></div></a>
                        <a href="https://discord.com/invite/TNMzEFyxA4" target="_black"><div className="link-a"><i className="fab fa-discord"></i> <h3>Comunidade do Discord</h3></div></a>
                        <a href="https://github.com/degabrielofi" target="_black"><div className="link-a"><i className="fab fa-github"></i> <h3>GitHub</h3></div></a>
                        <a href="mailto:contatodegabrielofi@gmail.com" target="_black"><div className="link-a"><i className="fas fa-envelope"></i> <h3>Entre em contato</h3></div></a>
                        <a href="https://www.linkedin.com/in/degabrielofi/" target="_black"><div className="link-a"><i className="fab fa-linkedin"></i> <h3>Linkedin</h3></div></a>
                        <a href="https://dgzzinbot.netlify.app/" target="_black"><div className="link-a"><i className='fas fa-robot	'></i><h3>Adicione o DGzzIN ツ</h3></div></a>
                    </div>
                </div>
            </Container>

            <Links>
                <div className='sci'>
                    <a href="https://www.instagram.com/degabrielofi_/" target="_black"><div className="insta"><i className="fab fa-instagram"></i></div></a>
                    <a href="mailto:contatodegabrielofi@gmail.com" target="_black"><div className="gmail"><i className='fas fa-envelope'></i></div></a>
                    <a href="https://www.twitter.com/degabrielofi" target="_black"><div className="twitter"><i className="fab fa-twitter"></i></div></a>
                </div>
            </Links>

        </>

    )
}

export default Home