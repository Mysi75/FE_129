import { type } from "os"
import { clearOrganize } from "../store/action-creatos/organize"

export interface ITask {
    id: string,
    date: string,
    title: string,
    content: string,
}

interface IUser {
    id: string,
    name: string,
    tasks: Array<ITask>| null,
}

export interface OrganizeState {
    user: IUser,
    loading: boolean,
    error: string | null,
    success: string | null,
}

export enum OrganizeActionTypes {
    SET_ORGANIZE = "SET_ORGANIZE" ,
    GET_ORGANIZE = "GET_ORGANIZE", 
    EDIT_TASK = "EDIT_TASK",
    REMOVE_TASK = "REMOVE_TASK",
    FETCH_ORGANIZE = "FETCH_ORGANIZE",
    ERROR_ORGANIZE = "ERROR_ORGANIZE",
    CLEAR_ORGANIZE = "CLEAR_ORGANIZE"
}

type SetOrganizeAction = {
    type: OrganizeActionTypes.SET_ORGANIZE,
    payload: string,
}

type GetOrganizeAction = {
    type: OrganizeActionTypes.GET_ORGANIZE,
    payload: IUser,
}

type EditTaskAction = {
    type: OrganizeActionTypes.EDIT_TASK,
    payload: string
}

type RemoveTaskAction = {
    type:  OrganizeActionTypes.REMOVE_TASK,
    payload: string, 
}

type FetchOrganizeAction = {
    type:  OrganizeActionTypes.FETCH_ORGANIZE,
}

type ErrorOrganizeAction = {
    type: OrganizeActionTypes.ERROR_ORGANIZE,
    payload: string,
}

type ClearOrganizeAction = {
    type: OrganizeActionTypes.CLEAR_ORGANIZE
}

export type OrganizeActions =
GetOrganizeAction |
SetOrganizeAction |
EditTaskAction |
RemoveTaskAction |
FetchOrganizeAction |
ErrorOrganizeAction |
ClearOrganizeAction;

