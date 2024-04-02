import { USER_ROLE } from "@/constant/role"
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type IMeta ={
    page : number,
    limit : number,
    total : number
}
export type UserRole =  keyof typeof USER_ROLE;

export interface DrawerItems {
    title : string,
    path : string,
    parentPath ?:  string,
    icon? :OverridableComponent<SvgIconTypeMap<{},'svg'>>&{muiName :  string} ,
    child ? : DrawerItems[] 
}

export type responseSuccessType = {
    data : any,
    meta ?: IMeta
}

export type IGenericErrorResponse = {
    statusCode  :  number,
    message :  string,
    errorMessages : IGenericErrorMessages[] 
}

export type IGenericErrorMessages ={
    path : string | number,
    message :  string
}