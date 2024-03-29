import React from 'react'

const Navigation = ({ onRouteChange, isSignedIn }) => {
        if (isSignedIn) {
            return (
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick={() => onRouteChange('signout')} className='f3 link din black underline pa3 pointer'>Sair</p>
                </nav>
            )   
        } else {
            return (
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick={() => onRouteChange('signin')} className='f3 link din black underline pa3 pointer'>Entrar</p>
                    <p onClick={() => onRouteChange('register')} className='f3 link din black underline pa3 pointer'>Registrar</p>
                </nav>
            ) 
        }
}

export default Navigation