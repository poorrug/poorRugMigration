import React from 'react'
import styled from 'styled-components'

import farmer from '../../assets/img/logo.png'

const Logo: React.FC = () => {
  return (
    <StyledLogo>
      <img src={farmer} height="32" style={{ marginTop: -4 }} />
      <StyledText>PoorRug</StyledText>
    </StyledLogo>
  )
}

const StyledLogo = styled.div`
  align-items: center;
  display: flex;
`

const StyledText = styled.span`
  color: ${props => props.theme.color.grey[100]};
  font-size: 18px;
  font-weight: 700;
  margin-left: ${props => props.theme.spacing[2]}px;
`

export default Logo