import { axiosInstance } from "../axios"

// get available date by vanId
export const getDisabledDates = (vanId:number) =>{
    return axiosInstance({
      url: `/member/bookings/disabledDates/${vanId}`,
      method: 'get'
      })
  }

  export const getAllBookings = () =>{
    return axiosInstance({
      url: `/member/bookings/all`,
      method: 'get'
      })
  }

