import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import ResponsiveLayout from 'containers/ResponsiveLayoutNoSSR'
import ImageBgCard from 'components/ImageBgCard'
import ImageCard from 'components/ImageCard'
import { fetchCollection } from 'apis/dropmark'
import { removeEndpoints } from 'utils/string'
import { openInNewTab } from 'utils/events'
import loremIpsum from 'utils/lorem'
import 'isomorphic-fetch'
import './Collection.scss'

const Component = ({
  title,
  allItems = [],
  description,
  mainItem,
  user,
  userAvatar,
}) => {
  const desktop = (
    <div className='collection'>
      <Grid padded className='page'>
        <Grid.Row>
          <Grid.Column width={6}>
            <ImageBgCard
              light='true'
              onImageClick={openInNewTab(mainItem.url)}
              onLabelClick={openInNewTab(removeEndpoints(mainItem.url))}
              url={mainItem.content}
              user={user}
              userAvatar={userAvatar}
            />
          </Grid.Column>
          <Grid.Column className='page-header' width={10}>
            <Header as='h1'>{title}</Header>
            <Header as='h4'>
              {description || loremIpsum}
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered className='page-cards'>
          {
            allItems.map(item => {
              const {
                user_name: user,
                user_avatar: userAvatar,
                url,
              } = item
              return (
                <ImageCard
                  key={item.id}
                  item={item}
                  light='true'
                  onClick={openInNewTab(url)}
                  url={url}
                  user={user}
                  userAvatar={userAvatar}
                />
              )
            })
          }
        </Grid.Row>
      </Grid>
    </div>
  )

  return <ResponsiveLayout>
    {desktop}
  </ResponsiveLayout>
}
const Collection = React.memo(Component)
Collection.getInitialProps = async (props) => {
  const json = await fetchCollection(props.query.id)
  return {
    title: json.name,
    mainItem: json.items.shift(),
    allItems: json.items,
    user: json.user_name,
    userAvatar: json.user_avatar,
    id: json.id,
    description: json.description,
  }
}
export default Collection
