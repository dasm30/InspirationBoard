import React from 'react'
import ImageBg from './ImageBg'
import { Button } from 'semantic-ui-react'
import './ButtonOverImage.scss'

const ButtonOverImage = ({
  children,
  url,
  icon,
  ...rest
}) => {
  return (
    <div className='button-over-image' {...rest}>
      <ImageBg url={url}>
        <div className='button'>
          <Button active circular inverted icon='arrow right' size='huge' />
          <h3>See all</h3>
        </div>
      </ImageBg>
    </div>
  )
}
export default ButtonOverImage
