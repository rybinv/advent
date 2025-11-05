import Request from "./Request.ts";


export default class QuizColoredApi {

    static async postAnswer(data: any) {
        const request = new Request(
            "POST", 
            `/api/quiz/color-quiz`, 
            data
        );

        const response = await request.send();
        return response;
    }
}
