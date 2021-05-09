import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
      posts: {
        create: {
          title: 'Hello, world',
        },
      },
      profile: {
        create: {
          bio: 'I like turtles',
        },
      },
    },
  })

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  })

  console.log("allUsers -------------------------")
  console.log(allUsers)

  console.log("user.post -------------------------")
  console.log(allUsers[0].posts[0])


  const profile = await prisma.profile.findUnique({
    where: {
      id: 1
    }
  })

  console.log("select one test -----------------")
  console.log(profile)
}

main()
.catch((e) => {
  throw e
})
.finally(async () => {
  await prisma.$disconnect()
})
