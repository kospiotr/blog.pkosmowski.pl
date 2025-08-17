export default defineEventHandler(async (event) => {
    return await useStorage('db').getKeys();
})