import React from 'react'

const ImageLinkForm = () => {
    return (
        <div>
            <p className='f3'>
                {'Este Magic Brain irá detectar rostos em suas fotos. Faça uma tentativa.'}
            </p>
            <div>
                <input className='f4 pa2 w-70 center ' type='tex' />
                <button className='' >Detectar</button>
            </div>
        </div>
    )
}

export default ImageLinkForm;