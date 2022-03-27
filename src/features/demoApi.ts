import { axiosMethod, axiosRequest } from "src/utils/fetchUtil";

const mockApi = `https://6210b0334cd3049e178245b0.mockapi.io/api/todos`;

class Api {
    apiEndPoint: string;

    constructor() {
        this.apiEndPoint = mockApi;
    }

    getApi() {
        return axiosRequest({ url: mockApi, method: axiosMethod.GET })
    }
}

export default new Api();
