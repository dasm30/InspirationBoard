import React from 'react'
import { Image, Card } from 'semantic-ui-react'
import { removeEndpoints } from 'utils/string'
import moment from 'moment'
import './ImageCard.scss'

const ImageCard = ({
  children,
  item,
  url,
  user,
  userAvatar,
  onClick,
  ...rest
}) => {
  const {
    name,
    content,
    description,
    created_at: createdAt,
  } = item
  return (
    <Card className='image-card' {...rest}>
      <Image
        onClick={onClick}
        src={content}
      >
        {children}
      </Image>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className='date'>Created {moment(createdAt, 'YYYY-MM-DD HH:mm:SS Z').fromNow()}</span>
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a
          href={removeEndpoints(url)}
          rel='noopener noreferrer'
          target='_blank'
        >
          <Image avatar src={userAvatar} />
          <span>{user}</span>
        </a>
      </Card.Content>
    </Card>
  )
}
export default ImageCard
