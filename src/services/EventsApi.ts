import Request from "./Request.ts";

export default class WindowApi {

    static async createLike(data: any) {
        const request = new Request(
            "POST", 
            "/api/event/likes", 
            data
        );
        const response = await request.send();
        return response;
    }

}
