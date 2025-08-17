import {prefixStorage} from "unstorage";

export default defineEventHandler(async (event) => {
        const query = getQuery(event)
        const id = query.id as string
        if (!id) {
            throw createError({
                statusCode: 400,
                statusMessage: 'id is required'
            })
        }
        const body = await readBody(event)
        const storage = useStorage('db')
        const pageStorage = prefixStorage(storage, 'page')
        return await pageStorage.setItem(id, body);
    }
)