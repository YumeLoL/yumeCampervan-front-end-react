import { axiosInstance } from "../axios"

export interface IQueryVan {
  page:number;
  pageSize:number;
  vanLocation?:string;
  berths?:number;
  vanTypeId?:number;
}

// van api
export const getCampervanPage = (params:IQueryVan) => {
    return axiosInstance({
      url: '/campervan/page',
      method: 'get',
      params
    })
  }


// get all van type api
export const getAllType= () => {
  return axiosInstance({
    url: `/vanType`,
    method: 'get'
    })
}

// vanType api
export const getVanType = (vanTypeId:number) => {
  return axiosInstance({
    url: `/vanType/${vanTypeId}`,
    method: 'get'
    })
}