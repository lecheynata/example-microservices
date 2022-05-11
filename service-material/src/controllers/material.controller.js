const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

const index = async (req, res, next) => {
    const materials = await prisma.material.findMany({
        include: {
            type: true
        },
        orderBy: {
            type: {
                name: 'asc'
            }
        }
    })
    return res.json(materials)
}

const store = async (req, res, next) => {
    const { name, typeId } = req.body
    const result = await prisma.material.create({
        data: {
            name,
            typeId: Number(typeId)
        }
    })

    return res.json(result)
}

module.exports = {
    index,
    store
}