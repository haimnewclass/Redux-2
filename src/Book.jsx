import {store,AddOneCharAction,AddCharAction} from './reducerCounter'


export const Book=()=>{
    return<div>Book <input onChange={(e)=>{
        // dispach
        console.log('Book');
        console.log(store.getState());
        //store.dispatch(AddOneCharAction());
        let len = e.target.value.length;
        store.dispatch(AddCharAction(len));
    }} /></div>
}