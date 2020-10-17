import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import Page from "../../components/Page";
import PageHeader from "../../components/PageHeader";
import Spacer from "../../components/Spacer";

import useYam from "../../hooks/useYam";

import Migrate from './components/Migrate'
import poorRug from "../../assets/img/logo.png";


import { OverviewData } from './types'
import { getStats } from './utils'

const Home: React.FC = () => {
  const yam = useYam();
  const [
    { curPrice, nextRebase, scalingFactor, targetPrice },
    setStats,
  ] = useState<OverviewData>({});

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
        <StyledLink href="https://vaclav-ondrej.medium.com/fag-poor-4510457c41d1">
          Learn more
        </StyledLink>
      </div>
      <div>
        <Migrate />
        <Spacer />
      </div>
    </Page>
  );
};

const StyledOverview = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

const StyledSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`;

const StyledLink = styled.a`
  font-weight: 700l
  text-decoration: none;
  color: ${(props) => props.theme.color.primary.main};
`;

export default Home;
