import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const { setUser } = useContext( UserContext )

    const user = {
        id: 1234,
        name: 'Luisa'
    }

    return (
        <div>
            <h1>Login Screen</h1>
            <hr/>
            <button 
                onClick={ () => setUser( user ) }
                className='btn btn-primary'
            >
                Login
            </button>
        </div>
    )
}
