import React from 'react'

export const Small = React.memo(({ value }) => {
    console.log('me volví a llamar :(')
    return (
        <small>{ value }</small>
    )
})