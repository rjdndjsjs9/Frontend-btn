import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, sepolia } from 'wagmi/chains';

export const config = getDefaultConfig({
    appName: 'Be The Nation',
    projectId: 'YOUR_PROJECT_ID', // You can get this from https://cloud.walletconnect.com
    chains: [mainnet, sepolia],
}); 