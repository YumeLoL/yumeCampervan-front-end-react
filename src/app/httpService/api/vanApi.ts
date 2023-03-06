import { axiosInstance } from "../axios"


export const getCampervanPage = (params:any) => {
    return axiosInstance({
      url: '/campervan/page',
      method: 'get',
      params
    })
  }