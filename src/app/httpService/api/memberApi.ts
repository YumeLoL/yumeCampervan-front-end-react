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

// loginCheck
export const loginCheck = ()=>{
    return axiosInstance({
      url: `/loginCheck`,
      method: 'get',
    })
  }

  export const getAllMembers = () =>{
    return axiosInstance({
      url: `/member/all`,
      method: 'get'
      })
  }
