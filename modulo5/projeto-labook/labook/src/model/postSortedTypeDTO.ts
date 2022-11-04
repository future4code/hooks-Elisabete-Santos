import { POST_TYPES } from "../model/post"

export enum ORDER {
    ASC= 'asc',
    DESC = 'desc'
 }

export type typePostSortedByType = {
    type: string, 
    sort: string,
    order: string
}