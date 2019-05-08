import React from 'react'
import { Card } from 'semantic-ui-react'
import ImageCard from './ImageCard'
import { openInNewTab } from 'utils/events'

const ImageCardGroup = ({
  items,
  ...rest
}) => {
  return (
    <Card.Group itemsPerRow={2} {...rest}>
      {
        items.map(item => {
          const {
            user_name: user,
            user_avatar: userAvatar,
            url,
          } = item
          return (
            <ImageCard
              key={item.id}
              item={item}
              onClick={openInNewTab(url)}
              url={url}
              user={user}
              userAvatar={userAvatar}
            />
          )
        })
      }
    </Card.Group>
  )
}
export default React.memo(ImageCardGroup)
