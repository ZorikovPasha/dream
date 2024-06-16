import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosInstance } from 'axios'
import { Product } from '../@types/ententy/Product'

export interface ICategoryCard {
  image: string
  name: string
}

const apiConfig = {
  returnRejectedPromiseOnError: true,
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
}

class Axios {
  protected _axios: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this._axios = axios.create(config)
  }
}

class Api extends Axios {
  constructor(config: AxiosRequestConfig) {
    super(config)
  }

  private success = <T>(response: AxiosResponse<T>): T => {
    return response.data
  }

  private error = <T>(error: AxiosError<T>): void => {
    throw error
  }

  protected get = <T>(url: string): Promise<T> => {
    return this._axios.get(url).then(this.success).catch(this.error)
  }

  protected post = <T, B>(url: string, data?: B): Promise<T> => {
    return this._axios.post(url, data).then(this.success).catch(this.error)
  }

  protected put = <T, B>(url: string, data?: B): Promise<T> => {
    return this._axios.put(url, data).then(this.success).catch(this.error)
  }
}

class UserApi extends Api {
  constructor(config: AxiosRequestConfig) {
    super(config)
  }

  getMainpageSliderImage = () => {
    return this.get<{ images: string[] }>('/mainPage/sliderImage')
  }
  getCategories = () => {
    return this.get<ICategoryCard[]>('/mainPage/categoryItems')
  }
  getProductsByCategory = (query: string) => {
    return this.get<Product[]>('/product' + query)
  }
}


export const publicApiClient = new UserApi(apiConfig)
