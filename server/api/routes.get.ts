export type Route = { id: string, type: string, path: string, title: string, createdAt: string, updatedAt: string }

export default defineEventHandler(async (event): Promise<Route[]> => {
        const query = getQuery(event)
        const id = query.id as string
        const storage = useStorage('db')
        return await storage.getItem('routes') as Route[] || []
    }
)