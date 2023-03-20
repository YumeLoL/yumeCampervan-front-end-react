import { axiosInstance } from "../axios"

// get available date by vanId
export const getBookedDates = (vanId:number) =>{
    return axiosInstance({
      url: `/bookings/available-dates/${vanId}`,
      method: 'get'
      })
  }