import React from "react"
import { Container } from "react-bootstrap"
import styled from "styled-components"

const Nav = styled.nav`
  padding: 15px 10px;
	background: ${props => props.theme.colours.background};
  border: none;
  border-radius: 0;
  margin-bottom: 40px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
`

const NavbarButton = styled.button`
  box-shadow: none;
  outline: none !important;
  border: none;
`

const Navigationbar = ({ isVisible, setIsVisible }) => {
  const handleClick = e => {
    e.preventDefault()
    return setIsVisible(!isVisible)
  }

  return (
    <Nav fixed="top" className="navbar navbar-expand-lg navbar-light bg-light">
      <Container fluid>
        <NavbarButton
          type="button"
          id="sidebarCollapse"
          className={isVisible ? "active" : ""}
          onClick={e => handleClick(e)}
        >
          <span></span>
          <span></span>
          <span></span>
        </NavbarButton>
        <button
          className="btn btn-light d-inline-block d-lg-none ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>Vinod Chandak</span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav ms-auto">
            <li className="nav-item active">
							<a className="nav-link" href="/">
                Vinod Chandak
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </Nav>
  )
}

export default Navigationbar
