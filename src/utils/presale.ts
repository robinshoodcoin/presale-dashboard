import { Contract, ethers } from "ethers";
import { BigNumber } from "ethers";
import { DEFI_CONFIG } from "../defi/config";
import { NETWORKS } from "../defi/networks";
import PresaleABI from "./abis/Presale_Swap.json";
import { CONTRACT_ADDRESSES } from "../constants";
import { toTokenUnitsBN } from ".";

const BSC_CHAINID: 56 | 97 = DEFI_CONFIG.mainChain;
const BSC_RPC = NETWORKS[BSC_CHAINID].rpcUrl;

export const swapBNB = async (signer: ethers.Signer, amount: string) => {
  const provider = new ethers.providers.JsonRpcProvider(BSC_RPC, BSC_CHAINID);
  const contract: Contract = new ethers.Contract(
    CONTRACT_ADDRESSES[BSC_CHAINID].PRESALE,
    PresaleABI.abi,
    provider
  );
  const connectedContract = contract.connect(signer);
  const txR: ethers.providers.TransactionResponse =
    await connectedContract.swapBNB({ value: ethers.utils.parseEther(amount) });
  return txR;
};

export const swapStable = async (
  signer: ethers.Signer,
  token: string,
  amount: string
) => {
  const provider = new ethers.providers.JsonRpcProvider(BSC_RPC, BSC_CHAINID);
  const contract: Contract = new ethers.Contract(
    CONTRACT_ADDRESSES[BSC_CHAINID].PRESALE,
    PresaleABI.abi,
    provider
  );
  const connectedContract = contract.connect(signer);
  const txR: ethers.providers.TransactionResponse =
    await connectedContract.swapStable(token, ethers.utils.parseEther(amount));
  return txR;
};

export const getBNBPrice = async (): Promise<number> => {
  const provider = new ethers.providers.JsonRpcProvider(BSC_RPC, BSC_CHAINID);
  const contract: Contract = new ethers.Contract(
    CONTRACT_ADDRESSES[BSC_CHAINID].PRESALE,
    PresaleABI.abi,
    provider
  );
  const value = await contract.getBNBPrice();
  return toTokenUnitsBN(value.toString(), 8).toNumber();
};

export const getBNBBalance = async (account: string): Promise<BigNumber> => {
  const provider = new ethers.providers.JsonRpcProvider(BSC_RPC, BSC_CHAINID);
  return await provider.getBalance(account);
};

export const getTokenAddress = (token: string, chainId: number) => {
  if (!Object.keys(CONTRACT_ADDRESSES).includes(chainId.toString()))
    return ethers.constants.AddressZero;
  return CONTRACT_ADDRESSES[chainId as 56 | 97][
    token as "BUSD" | "USDT" | "USDC"
  ];
};
