import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'

import { yam as yamAddress, yamv2 as yamV2Address } from '../../../constants/tokenAddresses'
import useTokenBalance from '../../../hooks/useTokenBalance'
import { getDisplayBalance } from '../../../utils/formatBalance'

import Button from '../../Button'
import CardIcon from '../../CardIcon'
import Label from '../../Label'
import Modal, { ModalProps } from '../../Modal'
import ModalTitle from '../../ModalTitle'
import Separator from '../../Separator'
import Spacer from '../../Spacer'
import Value from '../../Value'
import poorFag from "../../../assets/img/poorfag.png";
import poorRug from "../../../assets/img/logo.png";

const AccountModal: React.FC<ModalProps> = ({ onDismiss }) => {

  const { account, reset } = useWallet()

  const handleSignOutClick = useCallback(() => {
    onDismiss!()
    reset()
  }, [onDismiss, reset])

  const yamBalance = useTokenBalance(yamAddress)
  const yamV2Balance = useTokenBalance(yamV2Address)

  return (
    <Modal>
      <ModalTitle text="My Account" />

      <Spacer size="lg" />

      <div style={{ display: 'flex' }}>
        <StyledBalanceWrapper>
          <CardIcon>
              <img src={poorFag} height="32" style={{ marginTop: -4 }} />
          </CardIcon>
          <StyledBalance>
            <Value value={getDisplayBalance(yamBalance)} />
            <Label text="PoorFag Balance" />
          </StyledBalance>
        </StyledBalanceWrapper>

        <div style={{ alignSelf: 'stretch' }}>
          <Separator orientation="vertical" />
        </div>

        <StyledBalanceWrapper>
          <CardIcon>
              <img src={poorRug} height="32" style={{ marginTop: -4 }} />

          </CardIcon>
          <StyledBalance>
            <Value value={getDisplayBalance(yamV2Balance, 18)} />
            <Label text="PoorRug Balance" />
          </StyledBalance>
        </StyledBalanceWrapper>
      </div>

      <Spacer size="lg" />
      <Button
        href={`https://etherscan.io/address/${account}`}
        text="More info"
        variant="secondary"
      />
      <Spacer />
      <Button
        onClick={handleSignOutClick}
        text="Sign out"
      />
    </Modal>
  )
}

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const StyledBalanceWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: ${props => props.theme.spacing[4]}px;
`

const StyledBalanceIcon = styled.div`
  font-size: 36px;
  margin-right: ${props => props.theme.spacing[3]}px;
`

const StyledBalanceActions = styled.div`
  align-items: center;
  display: flex;
  margin-top: ${props => props.theme.spacing[4]}px;
`

export default AccountModal