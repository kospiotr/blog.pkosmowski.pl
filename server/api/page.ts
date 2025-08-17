export default defineEventHandler((event) => {
    console.log('page loaded', event.path);
    return {
        meta: {
            title: 'title',
            description: 'description',
            keywords: ['keyword1', 'keyword2'],
            image: {
                url: 'https://example.com/image.jpg',
                alt: 'Image description'
            }
        },
        content: 'content'
    }
})