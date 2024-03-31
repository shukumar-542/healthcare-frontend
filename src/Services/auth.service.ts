import { RemoveFromToLocalStorage, getToLocalStorage, setLocalStorage } from "@/utils/localStorage"
import { authKey } from "../constant/authKey"
import { decodeToken } from "@/utils/jwtDecode"

export const storeUserInfo = (accessToken: string) => {
    setLocalStorage(authKey, accessToken)
}

export const getUserInfo = () => {
    const authToken = getToLocalStorage(authKey)
    if (authToken){
        const decodeData : any = decodeToken(authToken);
        return {
            ...decodeData, role : decodeData?.role.toLowerCase()
        }
    }
}

export const isLoggedIn =()=>{
    const authToken = getToLocalStorage(authKey)
    if(authToken){
        return !!authToken
    }
}
export const removeUser =()=>{
    return RemoveFromToLocalStorage(authKey)
   
}