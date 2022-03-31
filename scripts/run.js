const main = async () => {
  const Counter = await hre.ethers.getContractFactory('Counter')
  const counter = await Counter.deploy()
  await counter.deployed()

  console.log(`✨ Contact Deployed ✨ ${counter.address}`)
}

main()
  .then(() => {
    console.log('🪐 success!')
    process.exit(0)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
