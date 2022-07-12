import { NavLink } from 'react-router-dom'
import { Scroll, Timer } from 'phosphor-react'

// IMPORT STYLES
import { HeaderContainer } from './styles'

// IMPORT IMAGES
import logoIgnite from '../../assets/logo-ignite.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
