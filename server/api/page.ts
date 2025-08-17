export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig(event)
    console.log('page loaded', event.path, config.DATABASE_CONNECTION_STRING);
    return {
        meta: {
            title: 'title',
            description: 'description',
            keywords: ['keyword1', 'keyword2'],
            layout: "default"
        },
        content: 'content'
    }
})