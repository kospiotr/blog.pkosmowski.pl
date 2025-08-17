import {createStorage, prefixStorage} from "unstorage";

export type Page = { id: string, path: string, title: string, content: string }

export default defineEventHandler(async (event): Promise<Page | Page[]> => {
        const query = getQuery(event)
        const id = query.id as string
        const storage = useStorage('db')
        const pageStorage = prefixStorage(storage, 'page')
        if (id) {
            const result = await pageStorage.getItem(id)
            if (!result) {
                throw createError({
                    statusCode: 404,
                    statusMessage: 'Page not found'
                })
            }
            return Object.assign({id}, result) as Page;
        }
        else {
            const keys = await pageStorage.getKeys()
            return (await pageStorage.getItems(keys))
                .map((item) =>
                    Object.assign({}, {id: item.key}, item.value) as Page
                );
        }
    }
)