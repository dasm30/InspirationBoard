import React, { useContext } from 'react'
import {
  Grid,
  Header,
  Divider,
} from 'semantic-ui-react'
import ImageCardGroup from './ImageCardGroup'
import ImageBgCard from './ImageBgCard'
import ButtonOverImage from './ButtonOverImage'
import { Store } from 'store'
import { removeEndpoints } from 'utils/string'
import { openInNewTab } from 'utils/events'
import Router from 'next/router'
import './InspiringSection.scss'

const goToCollection = id => e => {
  e.preventDefault()
  Router.push({
    pathname: '/collection',
    query: { id },
  }, undefined, { shallow: true })
}

const InspiringSection = ({ index }) => {
  const { dropmark: { state } } = useContext(Store)
  const {
    title,
    mainItem,
    items = [],
    user,
    userAvatar,
    id,
  } = state.data[index]
  return (
    <Grid.Row className='inspiring-section'>
      <Grid.Column className='header' width={16}>
        <Divider hidden section />
        <Header as='h2'>{title}</Header>
        <Divider hidden />
      </Grid.Column>
      <Grid.Column className='col-1' width={4}>
        <ImageBgCard
          onImageClick={openInNewTab(mainItem.url)}
          onLabelClick={openInNewTab(removeEndpoints(mainItem.url))}
          url={mainItem.content}
          user={user}
          userAvatar={userAvatar}
        />
      </Grid.Column>
      <Grid.Column className='col-2' width={12}>
        <ImageCardGroup
          items={items.slice(0, 2)}
          itemsPerRow={2}
        />
        {
          items.length > 2 && <ButtonOverImage onClick={goToCollection(id)} url={items[2].content} />
        }
      </Grid.Column>
    </Grid.Row>
  )
}
export default React.memo(InspiringSection)
