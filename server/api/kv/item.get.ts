export default defineEventHandler(async (event) => {
        const query = getQuery(event)
        const id = query.id as string
        if (!id) {
            throw createError({
                statusCode: 400,
                statusMessage: 'ID is required'
            })
        }
        return await useStorage('db').getItem(id);
    }
)