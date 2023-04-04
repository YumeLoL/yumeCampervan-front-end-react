import { BookingStatus } from "../../libs/constant"
import { IBooking } from "../../libs/interface/booking"
import { axiosInstance } from "../axios"

// get available date by vanId
export const getDisabledDates = (vanId:string) =>{
    return axiosInstance({
      url: `/member/bookings/disabledDates/${vanId}`,
      method: 'get'
      })
  }

// get all bookings
export const getAllBookings = () =>{
  return axiosInstance({
    url: `/member/bookings/all`,
    method: 'get'
    })
}

// post a new booking request
export const postBooking = (params:any) =>{
  return axiosInstance({
    url: `/member/bookings/request`,
    method: 'post',
    headers:{'Content-Type':'application/x-www-form-urlencoded'},
    data: params
    })
}

// get bookings by memberId with bookingStatus
export const getAllBookingsByMemberId = (memberId:string, params: {bookingStatus:BookingStatus}) =>{
  return axiosInstance({
    url: `/member/bookings/${memberId}`,
    method: 'get',
    params
    })
}

