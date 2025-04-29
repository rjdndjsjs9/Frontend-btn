import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { pharos } from './chain';

export const config = getDefaultConfig({
    appName: 'Be The Nation',
    projectId: 'YOUR_PROJECT_ID', // You can get this from https://cloud.walletconnect.com
    chains: [pharos],
}); 