import React from 'react'
import styled from 'styled-components'

import Card from '../../components/Card'
import CardContent from '../../components/CardContent'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'

const FAQ: React.FC = () => {
  return (
    <Page>
      <PageHeader icon="❓" title="About PoorRug" />
      <Container>
        <Card>
          <CardContent>
            <p>Please see below for the most up to date information regarding the future of PoorRug. As has always been our intention, the community will be in control of future decision making. The migration from Fag to Poor is the first step in this process; from there, Poor tokenholders will signal their desired path forward on community proposals.</p>
            <StyledHeading>1. How does the migration process work?</StyledHeading>
            <StyledList>
              <StyledListItem>A new $Poor ERC-20 token will be created when you migrate. This will be the governance token of the Poor protocol.</StyledListItem>
              <StyledListItem>The migration contract has been audited internally and has been deployed.</StyledListItem>
              <StyledListItem>All Fag holders can burn Fag to mint Poor via a migration contract.</StyledListItem>
              <StyledListItem>The number of Poor tokens received will be based upon the number of Fag tokens migrated, plus 300K which will serve as liquidity incentives for the LP Pool.</StyledListItem>
            </StyledList>
            <StyledHeading>2. Why did we create Poor?</StyledHeading>
            <StyledList>
              <StyledListItem>Many may be familiar with the PoorFag memecoin, known as $FAG
                It was created as a copy of $BONK with 2% staking rewards every transaction and 5% unstaking fee also going to the staking pool. The project has developed an NFT marketplace and has gained some attention on Twitter.
                Unfortunately, the developer of this project (Telegram: @bestetherdapps aka Joe Blow) has decided to sell his stake, and claimed he did this without warning to not cause panic sell. Obviously this got some heat going on in the community, therefore we have decided to create another project that would be 1:1 token swap for $FAG token.
              </StyledListItem>
              <StyledListItem>
                Why another project? There is already an established community around the $Fag token, it makes sense bring them over to the Poor protocol.
              </StyledListItem>
            </StyledList>
            <StyledHeading>3. What is PoorRug?</StyledHeading>
            <StyledList>
              <StyledListItem>We serve to be the ultimate memecoin and home for all those who get rugpulled and scammed. With no dev premine, this is the ultimate community coin. We have a lot of future plans currently in development for Poor.
              </StyledListItem>
              <StyledListItem>
                NFTs will be created for those who stake ETH/Poor tokens and will be created with a community owned treasury which will hold a number of crypto assets.
              </StyledListItem>
              <StyledListItem>
                The token itself will also be deflationary. Each transfer of $Poor will involve a 3% fee. 1% will go to the ETH/Poor liquidity pool, 1% will go to the treasury and 1% will be burnt.
              </StyledListItem>
            </StyledList>
            <StyledHeading>Contract addresses:</StyledHeading>
            <StyledList>
              <StyledListItem>PoorFag:  <a href="https://etherscan.io/token/0xe5868468Cb6Dd5d6D7056bd93f084816c6eF075f">0xe5868468Cb6Dd5d6D7056bd93f084816c6eF075f</a></StyledListItem>
              <StyledListItem>Migration:  <a href="https://etherscan.io/address/0x4a6c103a1a60f7ba7b7ce832a32d1b747529f8e7">0x4a6c103a1a60f7ba7b7ce832a32d1b747529f8e7</a></StyledListItem>
              <StyledListItem>PoorRug:  <a href="https://etherscan.io/address/0x9d24b60d5eefe710348cc59173b166a256cbffcd">0x9d24b60d5eefe710348cc59173b166a256cbffcd</a></StyledListItem>
              <StyledListItem>Uniswap:  <a href="https://info.uniswap.org/pair/0xe0a0d928c95369912ee24cbe9178cfe7f8039c2c">0xe0a0d928c95369912ee24cbe9178cfe7f8039c2c</a></StyledListItem>
            </StyledList>
          </CardContent>
        </Card>
      </Container>
    </Page>
  )
}

const StyledHeading = styled.h2`
  margin-bottom: 0;
  margin-top: ${props => props.theme.spacing[5]}px;;
`
const StyledList = styled.ul`
  margin: 0;
  padding: 0 ${props => props.theme.spacing[6]}px;;
`
const StyledListItem = styled.li`
  margin-top: ${props => props.theme.spacing[3]}px;
`

const StyledText = styled.p`
  font-style: italic;
  line-height: 2;
  text-indent: ${props => props.theme.spacing[4]}px;
`

export default FAQ