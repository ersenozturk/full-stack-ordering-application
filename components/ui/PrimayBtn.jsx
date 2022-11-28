import React from 'react'

const PrimayBtn = ({children,addClass,type}) => {
  return (
    <button type={type ? type : 'button'} className={`btn-primary ${addClass}`}>{children}</button>
  )
}

export default PrimayBtn