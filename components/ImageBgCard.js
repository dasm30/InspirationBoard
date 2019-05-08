import React from 'react'
import ImageBg from './ImageBg'
import { Label } from 'semantic-ui-react'
import './ImageBgCard.scss'

const ImageBgCard = ({
  children,
  url,
  user,
  userAvatar,
  onImageClick,
  onLabelClick,
  ...rest
}) => {
  const imageProps = {
    avatar: true,
    spaced: 'right',
    src: userAvatar,
  }
  return (
    <div className='image-bg-card' {...rest}>
      <ImageBg
        onClick={onImageClick}
        url={url}
      />
      <Label
        basic
        as='a'
        content={user}
        image={imageProps}
        onClick={onLabelClick}
      />
    </div>
  )
}
export default ImageBgCard
