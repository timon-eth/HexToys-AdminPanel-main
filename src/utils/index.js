import { ethers } from "ethers";

export function isAddress(address) {
  try {
      ethers.utils.getAddress(address);
  } catch (e) { return false; }
  return true;
}

export function truncateWalletString(walletAddress) {
  if (!walletAddress) return walletAddress;
  const lengthStr = walletAddress.length;
  const startStr = walletAddress.substring(0, 4);
  const endStr = walletAddress.substring(lengthStr - 4, lengthStr);
  return startStr + '...' + endStr;
}

export function shortString(originalStr, length) {
  if (!originalStr) return originalStr;
  const lengthStr = originalStr.length;
  if (lengthStr <= length) {
    return originalStr;
  } else {
    return originalStr.substring(0, length) + '...';
  }  
}

export function formatNum(value) {
  let intValue = Math.floor(value)
  if (intValue < 10) {
    return '' + parseFloat(value).toPrecision(2)
  } else if (intValue < 1000) {
    return '' + intValue
  } else if (intValue < 1000000) {
    return parseFloat(String(intValue / 1000.0)).toFixed(1) + 'K'
  } else if (intValue < 1000000000) {
    return parseFloat(String(intValue / 1000000.0)).toFixed(1) + 'M'
  } else if (intValue < 1000000000000) {
    return parseFloat(String(intValue / 1000000000.0)).toFixed(1) + 'B'
  } else {
    return parseFloat(String(intValue / 1000000000000.0)).toFixed(1) + 'T'
  }
}
