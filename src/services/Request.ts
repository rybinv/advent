import axios, { AxiosInstance } from 'axios';


export default class Request {
    private client!: AxiosInstance;
    method: string;
    path: string;
    data: any;
    apiEndpoint: string;

    constructor(method: string, path: string, data: any = {}) {
        this.method = method;
        this.path = path;
        this.data = data;
        this.apiEndpoint = import.meta.env.VITE_BACKEND_URL;
        this.setupClient();
    }

    private setupClient() {
        this.client = axios.create({
            withCredentials: true,
            baseURL: this.apiEndpoint,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            }
        })

        this.client.interceptors.request.use((request: any) => {
            request.headers.Authorization = `${Request.getToken()}`;
            return request
        })

        this.client.interceptors.response.use(response => response, error => {
            if (error.response) {
                if (error.response.status === 401) {
                    Request.forgetToken();
                    window.location.href = '/login';
                }
            }
            return error.response;
        })

    }

    async send() {
        if (this.method == "GET") {
            return await this.get();
        } else if (this.method == "POST") {
            return await this.post();
        }
        throw new Error("Wrong request method")
    }

    private async get() {
        const response = await this.client.get(`${this.path}`);
        if (response.status !== 200) {
            throw new Error(response.data.msg)
        }
        return response.data
    }

    private async post() {
        const response = await this.client.post(`${this.path}`, this.data);
        if (response.status == 422) {
            throw new Error(response.data.errors);
        }
        return response;
    }

    static getToken(): string | null {
        return localStorage.getItem('apiToken');
    }

    static rememberToken(token: string) {
        localStorage.setItem('apiToken', token);
    }

    static forgetToken() {
        localStorage.removeItem('apiToken');
    }

    static tokenExists(): boolean {
        return !!Request.getToken();
    }
}