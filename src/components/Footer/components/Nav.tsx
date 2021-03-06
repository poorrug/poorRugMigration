import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink href="https://github.com/poorrug">Github</StyledLink>
      <StyledLink href="https://twitter.com/PoorRugOfficial">Twitter</StyledLink>
        <StyledLink href="https://t.me/poorRug">Telegram</StyledLink>
        <StyledLink href="https://info.uniswap.org/pair/0xe0A0D928C95369912eE24cBE9178CfE7f8039C2c">Uniswap</StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${props => props.theme.color.grey[400]};
  padding-left: ${props => props.theme.spacing[3]}px;
  padding-right: ${props => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.color.grey[500]};
  }
`

export default Nav
