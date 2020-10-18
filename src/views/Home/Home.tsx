import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import Page from "../../components/Page";
import PageHeader from "../../components/PageHeader";
import Spacer from "../../components/Spacer";

import useYam from "../../hooks/useYam";

import Migrate from './components/Migrate'
import poorRug from "../../assets/img/logo.png";
import useTotalSupply from '../../hooks/useTotalSupply'


import { OverviewData } from './types'
import { getStats } from './utils'
import {bnToDec} from "../../utils";
import {yamv2} from "../../constants/tokenAddresses";
import Card from "../../components/Card";
import CardContent from "../../components/CardContent";
import Label from "../../components/Label";
import Value from "../../components/Value";
import numeral from 'numeral';

const Home: React.FC = () => {
  const yam = useYam();
  const [
    { curPrice, nextRebase, scalingFactor, targetPrice },
    setStats,
  ] = useState<OverviewData>({});

    const poorRugTotalSupply = bnToDec(useTotalSupply(yamv2))
    const fetchStats = useCallback(async () => {
    const statsData = await getStats(yam);
    setStats(statsData);
  }, [yam, setStats]);

  useEffect(() => {
    if (yam) {
      fetchStats();
    }
  }, [yam]);

  return (
    <Page>
      <PageHeader
        icon={(
          <div style={{ position: 'relative'}}>
              <img src={poorRug} height="100" style={{ marginTop: -4 }} />
          </div>
        )}
        subtitle="Burn $FAG tokens to receive $POOR tokens."
        title="Are you ready to get poor?"
      />
      <div
        style={{
          margin: "-24px auto 48px",
        }}
      >
        <StyledLink href="/faq">
          Learn more
        </StyledLink>
      </div>
      <div>
        <Migrate />
        <Spacer />
          <Card>
              <CardContent>
                  <StyledBalance>
                      <Value value={poorRugTotalSupply ? numeral(poorRugTotalSupply).format('0.00a') : '--'} />
                      <Label text="Total supply" />
                  </StyledBalance>
              </CardContent>
          </Card>
      </div>
    </Page>
  );
};

const StyledLink = styled.a`
  font-weight: 700l
  text-decoration: none;
  color: ${(props) => props.theme.color.primary.main};
`;


const StyledBalance = styled.div`
  text-align: center;
  align-items: center;
`

export default Home;
