import { Contract, ethers } from "ethers";
import { BigNumber } from "ethers";
import { DEFI_CONFIG } from "../defi/config";
import { NETWORKS } from "../defi/networks";
import { toBaseUnitBN } from ".";

const BSC_CHAINID: 56 | 97 = DEFI_CONFIG.mainChain;
const BSC_RPC = NETWORKS[BSC_CHAINID].rpcUrl;

const erc20Abi = [
  "function allowance(address owner, address spender) external view returns (uint256)",
  "function approve(address spender, uint256 amount) external returns (bool)",
  "function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool)",
  "function balanceOf(address marketMaker) external view returns (uint256)",
  "function symbol() external view returns (string)",
  "function name() external view returns (string)",
  "function decimals() external view returns (uint8)",
  "function totalSupply() external view returns (uint256)",
  "function transferFrom(address sender, address recipient, uint256 amount) public returns (bool)",
  "function transfer(address to, uint256 value) public returns (bool)",
  "event Transfer(address indexed from, address indexed to, uint256 value)",
];

export const getTokenBalance = async (
  tokenAddress: string,
  holderAddress: string
): Promise<BigNumber> => {
  const provider = new ethers.providers.JsonRpcProvider(BSC_RPC, BSC_CHAINID);
  const contract: Contract = new ethers.Contract(
    tokenAddress,
    erc20Abi,
    provider
  );
  return await contract.balanceOf(holderAddress);
};

export const getAllowance = async (
  tokenAddress: string,
  owner: string,
  spender: string
): Promise<BigNumber> => {
  const provider = new ethers.providers.JsonRpcProvider(BSC_RPC, BSC_CHAINID);
  const contract: Contract = new ethers.Contract(
    tokenAddress,
    erc20Abi,
    provider
  );
  return await contract.allowance(owner, spender);
};

export const getTotalSupply = async (
  tokenAddress: string
): Promise<BigNumber> => {
  const provider = new ethers.providers.JsonRpcProvider(BSC_RPC, BSC_CHAINID);
  const contract: Contract = new ethers.Contract(
    tokenAddress,
    erc20Abi,
    provider
  );
  return await contract.totalSupply();
};

export const approve = async (
  signer: ethers.Signer,
  token: string,
  spender: string
) => {
  const provider = new ethers.providers.JsonRpcProvider(BSC_RPC, BSC_CHAINID);
  const contract: Contract = new ethers.Contract(token, erc20Abi, provider);
  const connectedContract = contract.connect(signer);
  // const txR: ethers.providers.TransactionResponse =
  //   await connectedContract.approve(
  //     spender,
  //     BigNumber.from("10000000000000000000000")
  //   );
  const txR: ethers.providers.TransactionResponse =
    await connectedContract.increaseAllowance(
      spender,
      BigNumber.from("100000000000000000000000")
    );
  return txR;
};
