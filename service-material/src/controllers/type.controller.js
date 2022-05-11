const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const index = async (req, res, next) => {
    const materialTypes = await prisma.type.findMany({
        orderBy: {
            name: 'asc'
        }
    })

    return res.json(materialTypes)
}

const store = async (req, res, next) => {
    const { name } = req.body
    const result = await prisma.type.create({
        data: {
            name
        }
    })
    return res.json(result)
}

module.exports = {
    index,
    store
}