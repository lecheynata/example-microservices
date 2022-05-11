const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const types = ['MDF', 'Coroplast', 'PVC', 'Acrílico', 'Estireno', 'PETG']
    for (const key in types) {
        const result = await prisma.type.upsert({
            where: {
                id: Number(key) + 1
            },
            update: {
            },
            create: {
                name: types[key]
            }
        })

        console.log(result)
    }

    const materials = ['MDF 3MM', 'Coroplast 4MM', 'PVC 3MM', 'Acrílico Cristal 3MM', 'Estireno Cal. 22']
    for (const key in materials) {
        const result = await prisma.material.upsert({
            where: {
                id: Number(key) + 1
            },
            update: {
            },
            create: {
                name: materials[key],
                type: {
                    connect: {
                        id: Number(key) + 1
                    }
                }
            }
        })

        console.log(result)
    }
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })