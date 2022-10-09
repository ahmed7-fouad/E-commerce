import { produceWithPatches } from 'immer';
import React from 'react';
const Helmet=(props)=>{
    document.title='Food ordering site -' + props.title;
    return(
        <div className='w-100'>{props.children}</div>
    )
}
export default Helmet;