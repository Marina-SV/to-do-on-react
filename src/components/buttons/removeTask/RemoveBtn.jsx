import React from 'react';
import classes from "./RemoveBtn.module.css";

const RemoveBtn = (props) => {
    const {id, remove} = props;
    return (
        <>
            <span onClick={()=>remove(id)} className={classes['remove-btn']}></span>
        </>

    );
};

export default RemoveBtn;