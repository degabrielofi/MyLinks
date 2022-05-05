import React from 'react'
import { Menu, Container } from "./style"
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
                        <a href="https://discord.com/invite/TNMzEFyxA4" target="_black"><div className="link-a"><i className="fab fa-discord"></i> <h3>Discord</h3></div></a>
                        <a href="https://github.com/degabrielofi" target="_black"><div className="link-a"><i className="fab fa-github"></i> <h3>GitHub</h3></div></a>
                        <a href="mailto:contatodegabrielofi@gmail.com" target="_black"><div className="link-a"><i className="fab fa-m"></i> <h3>Entre em contato</h3></div></a>
                        <a href="https://www.linkedin.com/in/degabrielofi/" target="_black"><div className="link-a"><i className="fab fa-linkedin"></i> <h3>Linkedin</h3></div></a>
                    </div>
                </div>
            </Container>

        </>

    )
}

export default Home