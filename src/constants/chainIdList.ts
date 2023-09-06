const isTest = false;
import { Chain } from "wagmi";
const testChainIdList: [Chain] = [
  {
    id: 97,
    name: "Binance Smart Chain Testnet",
    network: "binance",
    nativeCurrency: {
      decimals: 18,
      name: "tBNB",
      symbol: "tBNB",
    },
    rpcUrls: {
      default: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    },
    blockExplorers: {
      default: { name: "BscScan", url: "https://testnet.bscscan.com/" },
    },
    testnet: true,
  },
];

const prodChainList: [Chain] = [
  {
    id: 56,
    name: "Binance Smart Chain Mainnet",
    network: "binance",
    nativeCurrency: {
      decimals: 18,
      name: "BNB",
      symbol: "BNB",
    },
    rpcUrls: {
      default: "https://bsc-dataseed1.binance.org",
    },
    blockExplorers: {
      default: { name: "BscScan", url: "https://bscscan.com" },
    },
    testnet: false,
  },
];

const chainIdList: [Chain] = isTest ? testChainIdList : prodChainList;

export const isSupportedChain = (chainId: number) => {
  return chainIdList.find((chain) => chain.id === chainId) === undefined
    ? false
    : true;
};

export default chainIdList;
