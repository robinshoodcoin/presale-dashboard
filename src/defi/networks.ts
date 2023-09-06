import { SupportedNetworks, Network } from "./types";

export const NETWORKS: {
  [networkId in SupportedNetworks]: Network;
} = {
  56: {
    name: "BSC",
    rpcUrl: "https://bsc-dataseed1.binance.org/",
    infoPageUrl: "https://bscscan.io/tx/",
  },
  97: {
    name: "BSC TEST",
    rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    infoPageUrl: "https://testnet.bscscan.io/tx/",
  },
};
