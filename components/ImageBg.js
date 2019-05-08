import React from 'react'
import './ImageBg.scss'

const ImageBg = ({
  children,
  url,
  ...rest
}) => {
  return (
    <div
      className='image-bg'
      style={{
        backgroundImage: `url(${url})`,
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
export default ImageBg
