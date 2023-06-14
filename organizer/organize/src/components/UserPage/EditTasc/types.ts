import { type } from "os";
import { Dispatch, FunctionComponent } from "react";

type TState = {
    id: string,
    call: boolean,
}

export type TEdit = {
    id: string,
    closeEdit: Dispatch<TState>,
    edit: TState
}

export type TEditComponent = FunctionComponent<TEdit>;
