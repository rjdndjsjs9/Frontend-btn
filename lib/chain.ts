import { defineChain } from 'viem'

export const pharos = defineChain({
    id: 50002,
    name: 'Pharos',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'PHA',
    },
    rpcUrls: {
        default: {
            http: ['https://devnet.dplabs-internal.com'],
            webSocket: ['wss://devnet.dplabs-internal.com'],
        },
    },
    blockExplorers: {
        default: { name: 'Explorer', url: 'https://pharosscan.xyz' },
    },

})