import React, {ChangeEvent} from 'react';

type UniversalCheackbocks = {
    isDone:boolean
    callBack: (newIsDoneValue:boolean)=>void
}

export const UniversalCheackbocks = (props:UniversalCheackbocks) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        props.callBack(newIsDoneValue);
    }
    return (
        <input type='checkbox' onChange={onChangeHandler} checked={props.isDone}/>
    );
};
