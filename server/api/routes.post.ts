import type {Page} from "~~/server/api/page.get";

export default defineEventHandler(async (event) => {
        const storage = useStorage('db');
        const keys = await storage.getKeys()
        const out = {}


        return out;
    }
)