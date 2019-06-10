'use strict'

const db = require('../server/db')
const {User, File} = require('../server/db/models')
// const {File} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  console.log(`seeded ${users.length} users`)

  const file = await Promise.all([
    File.create({
      companyId: 1231232,
      companyName: 'ICE',
      sharePriceDate: '2019-12-10',
      sharePrice: 3.2,
      comments: 'The stock forecast predicts murky waters'
    }),

    File.create({
      companyId: 981273,
      companyName: 'NYSE',
      sharePriceDate: '2019-10-11',
      sharePrice: 12.12,
      comments: 'The stock forecast looks good'
    })
  ])

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
