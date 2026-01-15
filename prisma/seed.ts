import path from 'path'
import dotenv from 'dotenv'

// FIX: Vertel dotenv expliciet waar de .env file staat (één map omhoog vanuit prisma/)
dotenv.config({ path: path.resolve(__dirname, '../.env') })

import { PrismaClient } from '../src/generated/prisma/client'
import { faker } from '@faker-js/faker'
import { pbkdf2Sync, randomBytes } from 'crypto'

const prisma = new PrismaClient()

// --- HASHING FUNCTIES ---
const hashOptions = {
  keyLength: 64,
  iterations: 600000,
}

function getSalt(): string {
  return randomBytes(32).toString('hex')
}

function hashPassword(password: string): string {
  const salt = getSalt()
  const hash = pbkdf2Sync(password, salt, hashOptions.iterations, hashOptions.keyLength, 'sha512').toString('hex')
  return `${hashOptions.iterations}$${hashOptions.keyLength}$${hash}$${salt}`
}
// ------------------------

async function main() {
  console.log('Starting seed...')

  // 1. Clean db
  await prisma.fight.deleteMany()
  await prisma.event.deleteMany()
  await prisma.fighter.deleteMany()
  await prisma.gym.deleteMany()
  await prisma.weightClass.deleteMany()
  await prisma.fightingStyle.deleteMany()
  await prisma.newsItem.deleteMany()
  await prisma.session.deleteMany()
  await prisma.user.deleteMany()

  // 2. Create User
  const passwordHash = hashPassword('Test123.')
  const user = await prisma.user.create({
    data: {
      email: 'test@fightcamp.com',
      username: 'Test User',
      password: passwordHash,
      role: 'User',
    },
  })
  console.log(`Created user: ${user.email}`)

  // 3. Weight Classes
  const weightClassesData = [
    { name: 'Flyweight', limitLb: 125 },
    { name: 'Bantamweight', limitLb: 135 },
    { name: 'Featherweight', limitLb: 145 },
    { name: 'Lightweight', limitLb: 155 },
    { name: 'Welterweight', limitLb: 170 },
    { name: 'Middleweight', limitLb: 185 },
    { name: 'Light Heavyweight', limitLb: 205 },
    { name: 'Heavyweight', limitLb: 265 },
  ]
  const weightClasses = []
  for (const wc of weightClassesData) {
    const created = await prisma.weightClass.create({ data: wc })
    weightClasses.push(created)
  }

  // 4. Styles
  const stylesData = ['BJJ', 'Wrestling', 'Muay Thai', 'Boxing', 'Karate', 'Kickboxing']
  const styles = []
  for (const s of stylesData) {
    const created = await prisma.fightingStyle.create({ data: { name: s } })
    styles.push(created)
  }

  // 5. Gyms
  const gyms = []
  for (let i = 0; i < 10; i++) {
    const created = await prisma.gym.create({
      data: {
        name: faker.company.name() + ' MMA',
        location: faker.location.city(),
      },
    })
    gyms.push(created)
  }

  // 6. Fighters
  const fighters = []
  for (let i = 0; i < 15; i++) {
    const wc = faker.helpers.arrayElement(weightClasses)
    const gym = faker.helpers.arrayElement(gyms)
    const style1 = faker.helpers.arrayElement(styles)
    const style2 = faker.helpers.arrayElement(styles)

    const created = await prisma.fighter.create({
      data: {
        firstName: faker.person.firstName('male'),
        lastName: faker.person.lastName('male'),
        nickname: faker.string.alpha(5),
        wins: faker.number.int({ min: 0, max: 30 }),
        losses: faker.number.int({ min: 0, max: 10 }),
        draws: faker.number.int({ min: 0, max: 2 }),
        heightCm: faker.number.int({ min: 160, max: 200 }),
        reachCm: faker.number.int({ min: 160, max: 210 }),
        dob: faker.date.birthdate({ min: 20, max: 40, mode: 'age' }),
        bio: faker.lorem.paragraph(),
        weightClassId: wc.id,
        gymId: gym.id,
        styles: { connect: [{ id: style1.id }, { id: style2.id }] },
      },
    })
    fighters.push(created)
  }
//News Itemspnpm dev
  for (let i = 0; i < 10; i++) {
    await prisma.newsItem.create({
      data: {
        title: faker.lorem.sentence(),
        snippet: faker.lorem.sentence(), 
        content: faker.lorem.paragraphs(2),
        author: faker.person.fullName(),
        publishedAt: faker.date.recent(),
      },
    })
  }

  console.log('Seed complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })