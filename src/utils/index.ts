import { BigNumber as BN } from "bignumber.js";

const DESKTOP_DRAWER_WIDTH = 250;
const IPAD_DRAWER_WIDTH = 160;

export const calculateTimeLeft = (date: string) => {
  const difference = +new Date(date) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  // console.log(timeLeft);

  return timeLeft;
};

export const getDrawerWidth = (mobile: boolean, ipad: boolean) => {
  if (mobile) return "auto";
  if (ipad) return IPAD_DRAWER_WIDTH;
  return DESKTOP_DRAWER_WIDTH;
};

export const openInNewTab = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

/**
 * Convert 10.999 to 10999000
 */
export const toBaseUnitBN = (rawAmt: string | number, decimals: number) => {
  const raw = new BN(rawAmt);
  const base = new BN(10);
  const decimalsBN = new BN(decimals);
  return raw.times(base.pow(decimalsBN)).integerValue();
};

/**
 * Convert 10999000 to 10.999
 */
export const toTokenUnitsBN = (
  tokenAmount: string | number,
  tokenDecimals: number
) => {
  const amt = new BN(tokenAmount);
  const digits = new BN(10).pow(new BN(tokenDecimals));
  return amt.div(digits);
};

/**
 * Convert token amount 10999000 with price 1 to 10.999 (USD)
 */

export const toTokenAmountUSD = (
  tokenAmount: string | number,
  tokenDecimals: number,
  tokenPrice: number
) => {
  const amt = new BN(tokenAmount);
  const digits = new BN(10).pow(new BN(tokenDecimals));
  const price = new BN(tokenPrice);
  return amt.multipliedBy(price).div(digits);
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const kFormatter = (num: number, digits?: number) => {
  var si = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (
    (num / si[i].value).toFixed(digits ? digits : 0).replace(rx, "$1") +
    si[i].symbol
  );
};

export const getAccountShorthand = (account: string) => {
  return `${account.substring(0, 6)}...${account.substring(
    account.length - 4
  )}`;
};

export const formatDateFromTimestamp = (
  timestamp: number,
  format: string = "dd/MM/yyyy hh:mm:ss"
) => {
  const date = new Date(timestamp * 1000);
  var z = {
    M: date.getUTCMonth() + 1,
    d: date.getUTCDate(),
    h: date.getUTCHours(),
    m: date.getUTCMinutes(),
    s: date.getUTCSeconds(),
  };

  format = format.replace(/(M+|d+|h+|m+|s+)/g, function (v) {
    return (
      (v.length > 1 ? "0" : "") + z[v.slice(-1) as "M" | "d" | "h" | "m" | "s"]
    ).slice(-2);
  });

  return format.replace(/(y+)/g, function (v) {
    return date.getFullYear().toString().slice(-v.length);
  });
};

export const titleize = (str: string) => {
  return str.replace(/^./, str[0].toUpperCase());
};
