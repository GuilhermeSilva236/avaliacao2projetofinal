import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>

      <Navbar bg="success" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo4.png"
              width="90"
              height="90"
              className="d-inline-block align-top"
            />{' '}
           
          </Navbar.Brand>
          <Navbar.Brand href="/cursos">Cadastre o Pet</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='nav-link' href="/disciplinas">Faça seu Cadastro</Nav.Link>
            <Nav.Link className='nav-link' href="/alunos">Informação do Pet</Nav.Link>
            <Nav.Link className='nav-link' href="/professores">Informação Dono</Nav.Link>
            <Nav.Link className='nav-link' href="/salas">Endereço de Entrega</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho