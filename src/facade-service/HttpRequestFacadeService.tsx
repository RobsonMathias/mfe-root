export class HttpRequestFacadeService {
    public get(url: string, query: any): Promise<any> {
        console.log('GET REQUEST ------> ', url, query);
        return Promise.resolve();
    }

    public put(url: string, query: any): Promise<any> {
        console.log('PUT REQUEST ------> ', url, query);
        return Promise.resolve();
    }

    public post(url: string, query: any): Promise<any> {
        console.log('POST REQUEST ------> ', url, query);
        return Promise.resolve();
    }

    public delete(url: string, query: any): Promise<any> {
        console.log('DELETE REQUEST ------> ', url, query);
        return Promise.resolve();
    }

    public patch(url: string, query: any): Promise<any> {
        console.log('PATCH REQUEST ------> ', url, query);
        return Promise.resolve();
    }
}
