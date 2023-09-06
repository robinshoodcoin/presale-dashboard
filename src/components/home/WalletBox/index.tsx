import React, { useEffect, useState } from "react";
import Image from "next/image";

import { calculateTimeLeft, toTokenUnitsBN } from "@/utils";
import TimeLeft from "./TimeLeft";
import OptionButton from "./OptionButton";
import walletOptions from "./walletOptions";
import { ethers } from "ethers";
import { getTokenAddress, swapStable } from "@/utils/presale";
import { approve, getAllowance, getTokenBalance } from "@/utils/erc20";
import { DEFI_CONFIG } from "@/defi/config";
import { CONTRACT_ADDRESSES } from "@/constants";
import { useAccount, useNetwork, useSigner, useSwitchNetwork } from "wagmi";

const WalletBox = () => {
  const date = "2023-09-25"; // countdown date
  const start_date = "2023-09-06";
  const [timeLeft, setTimeLeft] = useState<any>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timerId = setInterval(() => {
      const timeLeft: any = calculateTimeLeft(date);

      const totalSecondsBetweenStartAndDate =
        new Date(date).getTime() - new Date(start_date).getTime();
      const totalSecondsBetweenStartAndNow =
        new Date().getTime() - new Date(start_date).getTime();
      const _progress = Number(
        (
          (totalSecondsBetweenStartAndNow / totalSecondsBetweenStartAndDate) *
          100
        ).toFixed(2)
      );
      setProgress(_progress);
      setTimeLeft(timeLeft);
      if (_progress >= 100) {
        clearInterval(timerId);
        setProgress(100);
        setTimeLeft(null);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  const { isConnected, address: wallet } = useAccount();
  const { chain } = useNetwork();
  const { data: signer } = useSigner();
  const [tokenAmount, setTokenAmount] = useState(0);
  const [token, setToken] = useState(walletOptions[0].value);
  const [mrwAmount, setMRWAmount] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [isSwapping, setSwapping] = useState(false);
  const [isApproved, setApproved] = useState(false);
  const [balance, setBalance] = useState(ethers.constants.Zero);
  const [allowance, setAllowance] = useState(ethers.constants.Zero);

  console.log(isConnected);
  const onChangeToken = (value: number) => {
    setTokenAmount(value);
    setMRWAmount(value / 0.001);
  };

  const onChangeMRW = (value: number) => {
    setMRWAmount(value);
    setTokenAmount(value * 0.001);
  };

  const onMax = () => {
    onChangeToken(toTokenUnitsBN(balance.toString(), 18).toNumber());
  };

  useEffect(() => {
    if (!isConnected) {
      setBalance(ethers.constants.Zero);
      return;
    }
    setMRWAmount(tokenAmount / 0.001);
    const erc20Address = getTokenAddress(token.toUpperCase(), chain?.id || 56);
    setLoading(true);
    getTokenBalance(erc20Address, wallet || ethers.constants.AddressZero)
      .then((res) => {
        setBalance(res);
      })
      .catch((err) => {
        setBalance(ethers.constants.Zero);
      });
    getAllowance(
      erc20Address,
      wallet || "",
      CONTRACT_ADDRESSES[DEFI_CONFIG.mainChain as 56 | 97].PRESALE
    ).then((res) => {
      setAllowance(res);
      setLoading(false);
    });
  }, [isConnected, wallet, token, isSwapping, chain]);

  useEffect(() => {
    if (allowance.gte(balance)) {
      setApproved(true);
    } else {
      setApproved(false);
    }
  }, [allowance, balance]);

  const onSwap = () => {
    if (DEFI_CONFIG.mainChain !== chain?.id) {
      alert("Please change the network to Binance Smart Chain!");
      return;
    }
    if (tokenAmount === 0) {
      alert("The minimum amount must be above 0!");
      return;
    }

    if (ethers.utils.parseEther(tokenAmount.toString()).gt(balance)) {
      alert("Please input an available amount!");
      return;
    }

    if (!wallet || !signer) {
      return;
    }

    setLoading(true);
    swapStable(signer, token, tokenAmount.toString())
      .then(async (res) => {
        await res.wait();
        setLoading(false);
        setSwapping(!isSwapping);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const onApprove = () => {
    if (!wallet || !signer) {
      return;
    }
    const erc20Address = getTokenAddress(token.toUpperCase(), chain?.id || 56);
    setLoading(true);
    approve(
      signer,
      erc20Address,
      CONTRACT_ADDRESSES[DEFI_CONFIG.mainChain as 56 | 97].PRESALE
    )
      .then(async (res) => {
        await res.wait();
        setApproved(true);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
        console.log(err);
      });
  };
  return (
    <>
      <div className="max-w-[450px] w-full bg-white rounded-2xl shadow-md border-[3px] border-[#ffffff13] overflow-hidden">
        <section className="bg-[#121619] flex flex-col items-center justify-start p-4 text-white text-center">
          {timeLeft && <TimeLeft timeLeft={timeLeft} />}
          {/* {timeLeft && <TimeLeft timeLeft={0} />} */}
          <h4>BUY IN BEFORE PRICE INCREASES!</h4>
          <div
            data-percent="30"
            className="relative w-full h-6 my-2 overflow-hidden bg-white rounded-3xl"
          >
            <div
              className="bg-[#308807] absolute h-full"
              style={{ width: progress + "%" }}
            />
            <div className="absolute w-full h-full text-xs font-semibold leading-6 text-center text-black">
              Next Stage Price: $0.002
              {/* Next Stage Price: TBA */}
            </div>
          </div>
          <p className="mb-2 text-[15px] sm:text-base font-semibold py-1">
            {/* USDT Raised: $18,217,969.92 / $19,954,489.73 */}
            Total Raised: $14,103.23
          </p>
          <p className="mb-2 text-[12px] font-semibold py-1">
            You can find our token contract {" "}
            <a
              href="https://bscscan.com/address/0x3E6106e52ACDC50fA0a8997e1bD9170D6a7a25c7"
              target="_blank"
              className="underline"
            >
              here!
            </a>
          </p>
        </section>

        {/* swap area */}
        <div className="relative w-full p-4">
          <p className="relative mb-4 text-sm font-semibold text-center">
            1 RHC = $0.001
          </p>
          {/* token choose section */}
          <section className="flex items-center justify-center w-full gap-2">
            {walletOptions.map((item) => (
              <OptionButton
                key={item.value}
                selected={token == item.value}
                setSelectedBtn={() => setToken(item.value)}
                text={item.name}
                icon={item.icon}
              />
            ))}
          </section>

          <section className="my-4 bg-white">
            <div className="flex flex-col flex-wrap sm:flex-row">
              <aside className="w-full mb-3 sm:w-1/2 sm:pr-1 sm:mb-0">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-[13px] text-[#727b83]">
                    {" "}
                    Amount in{" "}
                    <span className="font-bold uppercase">
                      {token.toUpperCase()}
                    </span>{" "}
                    you pay{" "}
                  </label>
                  <div
                    className="font-bold cursor-pointer text-[13px] text-[#182b48]"
                    onClick={onMax}
                  >
                    Max
                  </div>
                </div>

                <div className="relative flex items-start">
                  <input
                    type="number"
                    placeholder="0"
                    value={tokenAmount}
                    className="text-base font-medium bg-[#F1F4F6] text-gray-600 overflow-hidden whitespace-no-wrap m-0 block w-full appearance-none rounded-md min-h-[50px] py-2 px-[15px] border-2 border-[#F1F4F6] text-ellipsis focus:outline-none focus:border-[#F1F4F6] bg-clip-padding transition-colors duration-200 ease-in-out"
                    onChange={(e) => onChangeToken(parseFloat(e.target.value))}
                  />
                  <div className="absolute flex items-center top-[27px] right-[16px] -translate-y-1/2">
                    <Image
                      src={`/assets/token/${token.toLowerCase()}.png`}
                      alt={token.toLowerCase()}
                      width={50}
                      height={50}
                      className="h-[28px] w-[28px]"
                    />
                  </div>
                </div>
              </aside>

              <aside className="w-full sm:w-1/2 sm:pl-1">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-[13px] text-[#727b83]">
                    {" "}
                    Amount in <span className="font-bold uppercase">
                      RHC
                    </span>{" "}
                    you receive{" "}
                  </label>
                </div>

                <div className="relative flex items-start">
                  <input
                    type="number"
                    value={mrwAmount}
                    pattern="\d*"
                    placeholder="0"
                    className="text-base font-medium bg-[#F1F4F6] text-gray-600 overflow-hidden whitespace-no-wrap m-0 block w-full appearance-none rounded-md min-h-[50px] py-2 px-[15px] border-2 border-[#F1F4F6] text-ellipsis focus:outline-none focus:border-[#F1F4F6] bg-clip-padding transition-colors duration-200 ease-in-out"
                    onChange={(e) => onChangeMRW(parseFloat(e.target.value))}
                  />
                  <div className="absolute flex items-center top-[27px] right-[16px] -translate-y-1/2">
                    <Image
                      src="/assets/logo.png"
                      alt="eth"
                      width={50}
                      height={50}
                      className="h-[28px] w-[28px]"
                    />
                  </div>
                </div>
              </aside>
            </div>
            <label className="block text-[13px] text-[#727b83]">
              Balance:{" "}
              <span className="font-bold uppercase">
                {toTokenUnitsBN(balance.toString(), 18).toNumber().toFixed(3)}
              </span>
            </label>
          </section>

          <section className="w-full mt-4">
            <button
              className="text-white bg-black leading-none font-medium text-sm mb-2 w-full py-3 px-4 rounded-full h-[42px] border-2 border-black"
              onClick={isApproved ? onSwap : onApprove}
              style={{
                background: "#000000",
              }}
              disabled={isLoading || !isConnected}
            >
              {isLoading && <div className="lds-dual-ring"></div>}
              {!isLoading && (isApproved ? "Buy Now" : "Approve")}
            </button>

            <a
              className="text-[#535353] bg-[#f1f4f6] leading-none font-medium text-sm w-full py-3 px-4 rounded-full h-[42px] flex justify-center items-center border-2 border-[#f1f4f6]"
              href="https://robins-organization-9.gitbook.io/guide/overview/how-to-buy/how-to-buy-usdrhc"
              target="_blank"
              style={{ background: "#cf2e2e", color: "white" }}
            >
              How To Buy
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default WalletBox;
