import {useCallback, useEffect, useState} from "react";
import BigNumber from "bignumber.js";
import {provider} from "web3-core";
import {useWallet} from "use-wallet";
import {getTotalSupply} from "../utils/erc20";

const UseTotalSupply = (tokenAddress: string) => {
    const [totalSupply, setTotalSupply] = useState(new BigNumber(0))
    const { account, ethereum }: { account: string, ethereum: provider } = useWallet()

    const fetchTotalSupply = useCallback(async () => {
        const balance = await getTotalSupply(ethereum, tokenAddress)
        setTotalSupply(new BigNumber(balance))
    }, [ethereum, tokenAddress])

    useEffect(() => {
        if (ethereum) {
            fetchTotalSupply()
            let refreshInterval = setInterval(getTotalSupply, 10000)
            return () => clearInterval(refreshInterval)
        }
    }, [ethereum, setTotalSupply, tokenAddress])

    return totalSupply
}


export default UseTotalSupply