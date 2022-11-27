import React from 'react'

const PrimayBtn = ({children,addClass}) => {
  return (
    <div className={`btn-primary ${addClass}`}>{children}</div>
  )
}

export default PrimayBtn