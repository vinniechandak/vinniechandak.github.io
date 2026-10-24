import React from "react"
import styled from "styled-components"
import { FiFolder, FiGithub, FiLinkedin, FiSun, FiMoon } from "react-icons/fi"
import { SiStackoverflow } from "react-icons/si"
import stashedcodeIcon from "../assets/stashedcode.svg"
import { useReplay } from "./ReplayContext"

const Aside = styled.aside`
  position: sticky;
  top: 0;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  width: ${props => props.theme.layout.sidebarWidth};
  min-width: ${props => props.theme.layout.sidebarWidth};
  height: 100vh;
  background: ${props => props.theme.colours.chrome};
  border-right: 1px solid ${props => props.theme.colours.border};

  @media (max-width: 860px) {
    position: fixed;
    z-index: 30;
    transition: transform 0.25s ease;
    transform: translateX(${props => (props.$open ? "0" : "-100%")});
  }
`

const Header = styled.div`
  padding: 24px 20px 18px;
  border-bottom: 1px solid ${props => props.theme.colours.border};
`

const Name = styled.a`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${props => props.theme.colours.text};

  &:hover,
  &:focus {
    color: ${props => props.theme.colours.path};
  }
`

const Role = styled.div`
  margin-top: 4px;
  font-size: 0.92rem;
  color: ${props => props.theme.colours.textMuted};
`

const TreeLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 18px 20px 8px;
  font-size: 0.9rem;
  color: ${props => props.theme.colours.textFaint};

  svg {
    font-size: 1.05rem;
  }
`

const Tree = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 12px;
  flex: 1;
`

const FileItem = styled.li`
  margin: 2px 0;
`

const FileLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 12px 9px 26px;
  border-radius: ${props => props.theme.radius.sm};
  color: ${props => props.theme.colours.textMuted};
  font-size: 1.02rem;

  &:hover,
  &:focus {
    background: ${props => props.theme.colours.surfaceRaised};
    color: ${props => props.theme.colours.text};
  }

  .ext {
    color: ${props => props.theme.colours.textFaint};
  }
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px 20px;
  border-top: 1px solid ${props => props.theme.colours.border};
`

const Socials = styled.div`
  display: flex;
  gap: 16px;
  font-size: 1.35rem;
`

const SocialLink = styled.a`
  color: ${props => props.theme.colours.textMuted};
  display: inline-flex;
  align-items: center;

  &:hover,
  &:focus {
    color: ${props => props.theme.colours.prompt};
  }
`

const SocialImg = styled.img`
  width: 1.4rem;
  height: 1.4rem;
  display: block;
  opacity: 0.85;

  ${SocialLink}:hover &,
  ${SocialLink}:focus & {
    opacity: 1;
  }
`

const ThemeToggle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  color: ${props => props.theme.colours.textMuted};
  background: ${props => props.theme.colours.surface};
  border: 1px solid ${props => props.theme.colours.border};
  border-radius: ${props => props.theme.radius.md};
  cursor: pointer;
  font-size: 1.15rem;

  &:hover,
  &:focus {
    color: ${props => props.theme.colours.prompt};
    border-color: ${props => props.theme.colours.prompt};
  }
`

// Each section maps to a pseudo-file. The name/extension split lets us color
// the extension like an editor would.
const files = [
  { id: "home", name: "readme", ext: ".md" },
  { id: "about", name: "about", ext: ".md" },
  { id: "education", name: "education", ext: ".md" },
  { id: "skills", name: "skills", ext: ".json" },
  { id: "experience", name: "experience", ext: ".log" },
  { id: "contact", name: "contact", ext: ".sh" },
]

const socials = [
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vinodchandak321",
    Icon: FiLinkedin,
  },
  {
    key: "github",
    label: "GitHub",
    href: "https://www.github.com/vinniechandak",
    Icon: FiGithub,
  },
  {
    key: "stackoverflow",
    label: "Stack Overflow",
    href: "https://stackoverflow.com/users/2690184/vinod-chandak",
    Icon: SiStackoverflow,
  },
  {
    key: "stashedcode",
    label: "Stashedcode",
    href: "https://stashedcode.com/",
    iconSrc: stashedcodeIcon,
  },
]

const Sidebar = ({ isOpen, onNavigate, themeMode, onToggleTheme }) => {
  const nextMode = themeMode === "dark" ? "light" : "dark"
  const replayCtx = useReplay()

  const handleNavClick = id => {
    if (onNavigate) onNavigate()
    if (replayCtx) {
      // Let the browser jump to the section first, then replay its typing.
      requestAnimationFrame(() => replayCtx.requestReplay(id))
    }
  }

  return (
    <Aside id="sidebar" $open={isOpen} aria-label="Site navigation">
      <Header>
        <Name href="#home" onClick={() => handleNavClick("home")}>
          vinod-chandak
        </Name>
        <Role>Forward Deployed AI Engineer</Role>
      </Header>

      <TreeLabel>
        <FiFolder aria-hidden="true" /> ~/portfolio
      </TreeLabel>

      <Tree>
        {files.map(f => (
          <FileItem key={f.id}>
            <FileLink href={"#" + f.id} onClick={() => handleNavClick(f.id)}>
              {f.name}
              <span className="ext">{f.ext}</span>
            </FileLink>
          </FileItem>
        ))}
      </Tree>

      <Footer>
        <Socials>
          {socials.map(({ key, label, href, Icon, iconSrc }) => (
            <SocialLink
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              {iconSrc ? (
                <SocialImg src={iconSrc} alt="" aria-hidden="true" />
              ) : (
                <Icon aria-hidden="true" />
              )}
            </SocialLink>
          ))}
        </Socials>
        {onToggleTheme ? (
          <ThemeToggle
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${nextMode} theme`}
            title={`Switch to ${nextMode} theme`}
          >
            {themeMode === "dark" ? (
              <FiSun aria-hidden="true" />
            ) : (
              <FiMoon aria-hidden="true" />
            )}
          </ThemeToggle>
        ) : null}
      </Footer>
    </Aside>
  )
}

export default Sidebar
