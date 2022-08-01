import React from 'react'

export const Form = () => {


    return (
        <>
            <form className='form-main'>
                <h2></h2>
                <input type="text" placeholder='Hi Please write First Name' onChange={UpdateFname} />
                <input type="text" placeholder='Hi Please enter Password' />
                <button className='button'></button>
            </form>
        </>
    )
}
