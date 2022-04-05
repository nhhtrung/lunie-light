export default {
  id: 'umee-1', // DEPRECATE, only used for Lunie extension, NOT CHAIN ID
  name: 'Umee Network',
  description:
    'Umee',
  logo: `logo.svg`,
  website: 'https://www.umee.cc',
  apiURL: 'http://localhost:1317', // use `npx lcp --proxyUrl http://34.123.30.100:1317`
  rpcURL: 'ws://localhost:26657',
  stakingDenom: 'UMEE',
  coinLookup: [
    {
      viewDenom: 'UMEE',
      chainDenom: 'uumee',
      chainToViewConversionFactor: 1e-6,
      icon: `currencies/muon.png`,
    },
  ],
  addressPrefix: 'umee',
  validatorAddressPrefix: 'umeevaloper',
  validatorConsensusaddressPrefix: 'umeevalcons', // needed to map validators from staking queries to the validator set
  HDPath: `m/44'/118'/0'/0/0`,
  lockUpPeriod: `3 days`,
  fees: {
    default: {
      gasEstimate: 350000,
      feeOptions: [
        {
          denom: 'UMEE',
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
