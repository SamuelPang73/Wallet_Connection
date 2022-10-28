import { InjectedConnector } from "@web3-react/injected-connector";

export const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42, 1337, 31337] });

export const PROVIDER = "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";