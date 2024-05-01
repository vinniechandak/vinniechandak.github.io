import React from "react"
import styled from "styled-components"

const Nav = styled.nav`
  min-width: 250px;
  max-width: 250px;
  background: ${props => props.theme.colours.sidebar.background};
  color: ${props => props.theme.colours.sidebar.text};
  transition: all 0.6s cubic-bezier(0.945, 0.02, 0.27, 0.665);
  transform-origin: bottom left;
  margin-left: ${props => (props.isVisible ? `-250px` : `0px`)};
  transform: ${props =>
    props.isVisible ? `rotateY(100deg)` : `rotateY(0deg)`};
`

const Title = styled.h3`
	text-align: center;
`

const SidebarHeader = styled.div`
  padding: 20px;
  background: ${props => props.theme.colours.sidebar.background};
`

const SidebarComponents = styled.ul`
  padding: 20px 0;
  border-bottom: 1px solid ${props => props.theme.colours.sidebar.border};
`

const MenuItem = styled.li`
  text-align: center;
`

const Paragraph = styled.p`
  color: ${props => props.theme.colours.sidebar.text};
  padding: 10px;
`

const ListAnchor = styled.a`
  padding: 10px;
  font-size: 1.1em;
  display: block;
  &:hover {
    color: ${props => props.theme.colours.sidebar.background};
    background: ${props => props.theme.colours.sidebar.text};
  }
`

const SocialGroup = styled.ul`
  grid-auto-flow: column;
  display: grid;
  margin: 50px 20px 0px 20px;
`

const SocialList = styled.li`
  text-align: center;
  &:hover {
    color: ${props => props.theme.colours.sidebar.background};
    background: ${props => props.theme.colours.sidebar.text};
  }
`

const SocialAnchor = styled.a`
  font-size: 2.5rem;
`

const menuItems = {
  home: "Home",
  about: "About",
  education: "Education & Certifications",
  skills: "Skills",
  experience: "Experience",
  contact: "Contact",
}

const socialMedias = {
  linkedin: "https://www.linkedin.com/in/vinod-chandak-49b85354",
  github: "https://www.github.com/vinniechandak",
  "stack-overflow": "https://stackoverflow.com/users/2690184/vinod-chandak",
}

const Sidebar = ({ isVisible }) => {
  return (
		<Nav id="sidebar" 
			className={isVisible ? "active" : ""}
 			isVisible={isVisible}>
      <SidebarHeader>
        <Title>Vinod Chandak</Title>
      </SidebarHeader>

      <SidebarComponents className="list-unstyled">
        <Paragraph></Paragraph>
        {Object.keys(menuItems).map(key => (
          <MenuItem key={key}>
            <ListAnchor href={"#" + key}>{menuItems[key]}</ListAnchor>
          </MenuItem>
        ))}
      </SidebarComponents>
      <SocialGroup className="list-unstyled">
        {Object.keys(socialMedias).map(key => (
          <SocialList key={key}>
            <SocialAnchor target="_blank" href={socialMedias[key]}>
              <i className={"fa fa-" + key} />
            </SocialAnchor>
          </SocialList>
        ))}
      </SocialGroup>
    </Nav>
  )
}

export default Sidebar
