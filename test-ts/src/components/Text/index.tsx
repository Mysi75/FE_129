import React from 'react'
import { TTextComponent } from './type'

const Text: TTextComponent = (prop) => {
    const {
        text,
        className
    } = prop
    return(
        <div className='text'>
            {text}
        </div>
    )
}

export default Text;