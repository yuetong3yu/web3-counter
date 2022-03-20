const main = async () => {
  const Counter = await hre.ethers.getContractFactory('Counter')
  const counter = await Counter.deploy()
  await counter.deployed()

  console.log(`✨ Contact Deployed ✨ ${counter.address}`)

  const count = await counter.get()
  console.log(`🪓 Current Count(1): ${count}`)

  await counter.add()
  const count1 = await counter.get()
  console.log(`🪓 Current Count(2): ${count1}`)

  await counter.add()
  const count2 = await counter.get()
  console.log(`🪓 Current Count(3): ${count2}`)
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
