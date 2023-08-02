import { createContext, useReducer } from "react";

// types
import {
    IState, IAction,
    IChildren, IContextState
} from "../types/context";



// -------------------------- reducer --------------------------

const initialState = {
    selected: []
}

function reducer(state: IState = initialState, action: IAction) {
    switch (action.type) {
        case "ADD":
            if (!state.selected.find(item => item.id === action.payload.id)) {
                state.selected.push({
                    ...action.payload,
                    quantity: 1,
                });
                return {
                    // state ghabli ro negahdar
                    ...state,
                    // selectedItems toye state ro update kon
                    selected: [...state.selected],
                }
            } else {
                return state;
            }

        default:
            return state
    }
}


// -------------------------- context --------------------------

export const CartContext = createContext<IContextState>({} as IContextState)

const CartContextProvider = ({ children }: IChildren) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
