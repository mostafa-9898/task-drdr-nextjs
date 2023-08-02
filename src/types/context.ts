import { ReactElement } from "react";
import { IProdcut } from "./product";


export interface IState {
    selected: IProdcut[]
}

export interface IAction {
    type: "ADD";
    payload: IProdcut
}



export interface IChildren {
    children: ReactElement;
}

export interface IContextState {
    state: IState;
    dispatch: React.Dispatch<IAction>;
}

