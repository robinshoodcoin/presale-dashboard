import { DEFI_CONFIG } from "./config";

export type Network = {
  name: string;
  rpcUrl: string;
  infoPageUrl: string;
};

const supportedNetworkIds = DEFI_CONFIG.supportedNetworkIds; // important
export type SupportedNetworks = (typeof supportedNetworkIds)[number];
