export default defineEventHandler(async (event) => {
        const query = getQuery(event)
        const id = query.id as string
        if (!id) {
            throw createError({
                statusCode: 400,
                statusMessage: 'ID is required'
            })
        }
        const body = await readBody(event)
        return await useStorage('db').setItem(id, body);
    }
)