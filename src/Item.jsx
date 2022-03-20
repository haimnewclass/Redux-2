import { useState } from 'react'
import {store,AddOneCharAction} from './reducerCounter'

export const Item=()=>{
    const [state,setState] = useState(0);

    store.subscribe(()=>{
        setState(store.getState())
        console.log(store.getState());
    })

    return<div>Item
    Number of chars from Book{state}
Item
    </div>
}