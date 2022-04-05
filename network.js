export default {
  id: 'cerberus-chain-1', // DEPRECATE, only used for Lunie extension, NOT CHAIN ID
  name: 'Cerberus',
  description:
    'Cerberus',
  logo: `logo.svg`,
  website: '',
  apiURL: 'https://api.cerberus.zone:1317', // use `npx lcp --proxyUrl http://34.123.30.100:1317`
  rpcURL: 'https://rpc.cerberus.zone:26657',
  stakingDenom: 'CRBRUS',
  coinLookup: [
    {
      viewDenom: 'CRBRUS',
      chainDenom: 'ucrbrus',
      chainToViewConversionFactor: 1e-6,
      icon: `currencies/muon.png`,
    },
  ],
  addressPrefix: 'cerberus',
  validatorAddressPrefix: 'cerberusvaloper',
  validatorConsensusaddressPrefix: 'cerberusvalcons', // needed to map validators from staking queries to the validator set
  HDPath: `m/44'/118'/0'/0/0`,
  lockUpPeriod: `3 days`,
  fees: {
    default: {
      gasEstimate: 350000,
      feeOptions: [
        {
          denom: 'CRBRUS',
          amount: 0.001,
        },
      ],
    },
  },
  icon: `https://lunie.fra1.digitaloceanspaces.com/network-icons/cosmos.png`,

  // This is only to be used as a developer tool and for testing purposes
  // NEVER ENABLE LOCALSIGNING IN PRODUCTION OR FOR MAINNETS
  localSigning: false,
}
