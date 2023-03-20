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

// get van details by id
export const getVanById = (vanId:string)=>{
  return axiosInstance({
    url: `/campervan/${vanId}`,
    method: 'get',
  })
}

// get all van type api
export const getAllType= () => {
  return axiosInstance({
    url: `/vanType`,
    method: 'get'
    })
}

// get all vanType 
export const getVanType = (vanTypeId:number) => {
  return axiosInstance({
    url: `/vanType/${vanTypeId}`,
    method: 'get'
    })
}


