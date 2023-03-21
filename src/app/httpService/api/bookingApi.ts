import { axiosInstance } from "../axios"

// get available date by vanId
export const getDisabledDates = (vanId:number) =>{
    return axiosInstance({
      url: `/bookings/disabledDates/${vanId}`,
      method: 'get'
      })
  }

export const getAllBookings = () =>{
    return axiosInstance({
      url: `/bookings`,
      method: 'get'
      })
  }