import { axiosInstance } from "../axios"

export interface IQueryVan {
  page:number;
  pageSize:number;
  vanLocation?:string;
  berths?:number;
}

// van api
export const getCampervanPage = (params:IQueryVan) => {
    return axiosInstance({
      url: '/campervan/page',
      method: 'get',
      params
    })
  }


// vanType api
export const getVanType = (vanTypeId:number) => {
  return axiosInstance({
    url: `/vanType/${vanTypeId}`,
    method: 'get'
    })
}