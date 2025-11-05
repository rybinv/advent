import Request from "./Request.ts";


export default class UserApi {

    static async login(data: any) {
        const request = new Request(
            "POST", 
            "/api/auth/login", 
            data
        );
        const response = await request.send();
        return response;
    }

    static async register(data: any) {
        const request = new Request(
            "POST", 
            "/api/auth/register", 
            data
        );

        const response = await request.send();
        return response;
    }
}
