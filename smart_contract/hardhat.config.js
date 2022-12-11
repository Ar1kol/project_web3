require("@nomiclabs/hardhat-waffle")

module.exports ={
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/uqIENQlQdguCFnr2-orh-c19GRFG4Zit",
      accounts: ['035324c13d95d41b4d35d8e66db8bc12e1e98a9d1f25e1fb5cdfe04376455ca4']
    }
  }
}

