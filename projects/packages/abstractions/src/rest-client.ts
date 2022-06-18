import axios, { AxiosInstance, AxiosResponse } from "axios";

export abstract class RestClient {
  private readonly axiosClient: AxiosInstance;

  constructor(baseUrl: string, headers: Record<string, string>, parseResponseBody = true) {
    this.axiosClient = axios.create({
      baseURL: baseUrl,
      headers,
      transformResponse: parseResponseBody ? undefined : res => res
    });
  }

  public async get<TRes>(path: string): Promise<RestResponse<TRes>>;
  public async get<TParams, TRes>(path: string, params: TParams): Promise<RestResponse<TRes>>;
  public async get<TParams, TRes>(path: string, params?: TParams): Promise<RestResponse<TRes>> {
    const { data, status } = await this.axiosClient.get<TRes>(path, { params });

    return { data, status };
  }

  public async post<TBody, TRes>(path: string, body: TBody): Promise<RestResponse<TRes>>;
  public async post<TParams, TBody, TRes>(
    path: string,
    body: TBody,
    params: TParams
  ): Promise<RestResponse<TRes>>;
  public async post<TParams, TBody, TRes>(
    path: string,
    body: TBody,
    params?: TParams
  ): Promise<RestResponse<TRes>> {
    const { data, status } = await this.axiosClient.post<TRes, AxiosResponse<TRes>, TBody>(
      path,
      body,
      { params }
    );

    return { data, status };
  }

  public async put<TBody, TRes>(path: string, body: TBody): Promise<RestResponse<TRes>>;
  public async put<TParams, TBody, TRes>(
    path: string,
    body: TBody,
    params: TParams
  ): Promise<RestResponse<TRes>>;
  public async put<TParams, TBody, TRes>(
    path: string,
    body: TBody,
    params?: TParams
  ): Promise<RestResponse<TRes>> {
    const { data, status } = await this.axiosClient.put<TRes, AxiosResponse<TRes>, TBody>(
      path,
      body,
      { params }
    );

    return { data, status };
  }

  public async delete<TRes>(path: string): Promise<RestResponse<TRes>>;
  public async delete<TBody, TRes>(path: string, body: TBody): Promise<RestResponse<TRes>>;
  public async delete<TParams, TBody, TRes>(
    path: string,
    body: TBody,
    params: TParams
  ): Promise<RestResponse<TRes>>;
  public async delete<TParams, TBody, TRes>(
    path: string,
    body?: TBody,
    params?: TParams
  ): Promise<RestResponse<TRes>> {
    const { data, status } = await this.axiosClient.delete<TRes>(path, { params, data: body });

    return { data, status };
  }
}

interface RestResponse<T> {
  status: number;
  data: T;
}
