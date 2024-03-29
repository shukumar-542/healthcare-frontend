export const setLocalStorage =(key : string, token : string)=>{
    if(!key || typeof window === undefined){
        return ""
    }
    localStorage.setItem(key, token)
}

export const  getToLocalStorage = (key :  string)=>{
 if(!key || typeof window === undefined){
    return ""
 }
 return localStorage.getItem(key)
}
export const  RemoveFromToLocalStorage = (key :  string)=>{
 if(!key || typeof window === undefined){
    return ""
 }
 return localStorage.removeItem(key)
}