export default {
  id: 'gravity-bridge', // DEPRECATE, only used for Lunie extension, NOT CHAIN ID
  name: 'Gravity Bridge',
  description:
    'Gravity Bridge',
  logo: `logo.svg`,
  website: 'http://gravitybridge.net/',
  apiURL: 'https://gravitychain.io:1317', // use `npx lcp --proxyUrl http://34.123.30.100:1317`
  rpcURL: 'ws://gravitychain.io:26657',
  stakingDenom: 'UGRAVITON',
  coinLookup: [
    {
      viewDenom: 'UGRAVITON',
      chainDenom: 'UGRAVITON',
      chainToViewConversionFactor: 1e-6,
      icon: `currencies/muon.png`,
    },
  ],
  addressPrefix: 'gravity',
  validatorAddressPrefix: 'gravityvaloper',
  validatorConsensusaddressPrefix: 'gravityvalcons', // needed to map validators from staking queries to the validator set
  HDPath: `m/44'/118'/0'/0/0`,
  lockUpPeriod: `3 days`,
  fees: {
    default: {
      gasEstimate: 350000,
      feeOptions: [
        {
          denom: 'UGRAVITON',
          amount: 0.000,
        },
      ],
    },
  },
  icon: `https://lunie.fra1.digitaloceanspaces.com/network-icons/cosmos.png`,

  // This is only to be used as a developer tool and for testing purposes
  // NEVER ENABLE LOCALSIGNING IN PRODUCTION OR FOR MAINNETS
  localSigning: false,
}
