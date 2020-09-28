import React from 'react'

const Rank = ({name, entries}) => { 
    return (
        <div>
        {`${name} , sua classificação atual é...`}
        <div className='white f1 '>
        {entries}
        </div>
        </div>
    )
     /* (
        <div>
            <div className="white f3">
                {'André, sua classificação atual é...'}
            </div>
            <div className="white f1">
                {'#5'}
            </div>
        </div>
    ) */
}

export default Rank