"use client";

import { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import "@rainbow-me/rainbowkit/styles.css";
// components
import { HeroSection, OurTeam, Roadmap, Tokenomics } from "@/components/home";
import { WagmiConfig, configureChains, createClient, chain } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { RainbowKitProvider, wallet, darkTheme } from "@rainbow-me/rainbowkit";
import chainIdList from "../constants/chainIdList";
import Navbar from "@/components/layout/Navbar";

const { chains, provider } = configureChains(chainIdList, [
  jsonRpcProvider({ rpc: (chain: any) => ({ http: chain.rpcUrls.default }) }),
]);

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      wallet.rainbow({ chains }),
      wallet.walletConnect({ chains }),
      wallet.trust({ chains }),
      wallet.metaMask({ chains }),
    ],
  },
]);

const WagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function Home() {
  const [isHidden, setIsHidden] = useState(true);

  const stickNavbar = () => {
    if (window !== undefined) {
      const windowHeight = window.scrollY;
      setIsHidden(windowHeight < 87);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  const theme = darkTheme();
  // theme.colors. = "#ffffff";
  // theme.colors.connectButtonInnerBackground = "#000000";
  return (
    <WagmiConfig client={WagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={theme}
        coolMode
        modalSize="compact"
      >
        <Navbar />
        <main className="flex flex-col items-center justify-between min-h-screen p-5 md:p-24">
          <HeroSection />
          <OurTeam />
          <Roadmap />
          <Tokenomics />
          {/* scroll to top */}
          <button
            type="button"
            className={`bg-[#3a4566] hover:bg-[#2872fa] text-[#2872fa] hover:text-[#fff] flex items-center justify-center hover:border-[#fff] w-11 h-11 rounded-full transition-colors delay-75 fixed bottom-10 right-10 ${
              isHidden ? "hidden" : "visible"
            }`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUpIcon className="w-4 h-4 text-white" />
          </button>
        </main>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
