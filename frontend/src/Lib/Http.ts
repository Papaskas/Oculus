import axios from 'axios';


type request<T> = {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  data?: T | null;
}
class Http {
  private getAxiosInstance() {
    return axios.create({
      baseURL: 'http://localhost:4500/',
      timeout: 1000,
    });
  }

  static async request<T>({ url, method, data = null }: request<T> ) {
    const baseUrl = 'http://localhost:4500';
    const axios = new Http().getAxiosInstance();

    return await axios({
      url: baseUrl + url,
    });
  }
}

export default Http;
