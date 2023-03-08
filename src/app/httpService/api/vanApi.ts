import { axiosInstance } from "../axios"

export interface IQueryVan {
  page:number;
  pageSize:number;
  vanLocation?:string;
  berths?:number;
}

export const getCampervanPage = (params:IQueryVan) => {
    return axiosInstance({
      url: '/campervan/page',
      method: 'get',
      params
    })
  }