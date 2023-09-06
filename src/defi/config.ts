import { SupportedNetworks } from "./types";

export const DEFI_CONFIG: any = {
  supportedNetworkIds: [56, 97] as const, // important
  mainChain: 56 as SupportedNetworks,
};
