import Request from "./Request.ts";


export default class QuizApi {

    static async getQuestion(quiz_id: string) {
        const request = new Request(
            "GET", 
            `/api/quiz/get-question/${quiz_id}`
        );
        const response = await request.send();
        return response;
    }

    static async postAnswer(data: any) {
        const request = new Request(
            "POST", 
            `/api/quiz/answer`, 
            data
        );

        const response = await request.send();
        return response;
    }
}
