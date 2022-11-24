
const Title = ({children,titleClass}) => {
  return (
    // <div className={titleClass}>{children}</div>
    <div className={`font-dancing text-center ${titleClass}`}>{children}</div>
  )
}

export default Title