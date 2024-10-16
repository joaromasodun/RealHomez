/* eslint-disable react/prop-types */
export default function Button({children, className}) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  )
}
