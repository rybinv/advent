import Request from "./Request.ts";

export default class WindowApi {

    static async createWindow(data: any) {
        const request = new Request(
            "POST", 
            "/api/house/create-window", 
            data
        );
        const response = await request.send();
        return response;
    }

    static async getWindows() {
        const request = new Request(
            "GET", 
            "/api/house/all-windows"
        );
        const response = await request.send();
        return response;
    }
}
