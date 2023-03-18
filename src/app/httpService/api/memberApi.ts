import { axiosInstance } from "../axios"

type ILogin = {
  memberEmail:string
  memberPassword:string
}

// login
export const login =  (data:ILogin)=>{
    return axiosInstance({
      url: `/login`,
      method: 'post',
      data
    })
  }

// logout
export const logout =  ()=>{
    return axiosInstance({
      url: `/logout`,
      method: 'post',
    })
  }

// signup
export const signup = (data:any)=>{
    return axiosInstance({
      url: `/signup`,
      method: 'post',
      data
    })
  }