import { environment } from "src/environments/environment";

export const baseURL_List = {
    GET_USER_LIST : `${environment.baseURL}users`,
    POST_USER : `${environment.baseURL}users`,
    UPDATE_USER : `${environment.baseURL}users/1`
}