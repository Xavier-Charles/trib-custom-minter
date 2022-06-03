async function main() {
  const TribunalNFT = await ethers.getContractFactory("TribunalCustomNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const tribunalNFT = await TribunalNFT.deploy();
  await tribunalNFT.deployed();
  console.log("Contract deployed to address:", tribunalNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  /**
   * Tribunal NFT: Contract Adddress: 0x64DA298bDd8200482b821951308eAc0732d3A5e8
   */
