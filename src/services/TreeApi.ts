import Request from "./Request.ts";

export default class TreeApi {

    static async createWish(data: any) {
        const request = new Request(
            "POST", 
            "/api/wish/create-wish", 
            data
        );
        const response = await request.send();
        return response;
    }

    static async getWishes() {
        const request = new Request(
            "GET", 
            "/api/wish/wishes"
        );
        const response = await request.send();
        return response;
    }
}
