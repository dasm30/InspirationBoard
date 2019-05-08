import React, { useContext, useEffect } from 'react'
import { Grid, Header } from 'semantic-ui-react'
import ResponsiveLayout from 'containers/ResponsiveLayoutNoSSR'
import InspiringSection from 'components/InspiringSection'
import { fetchAll } from 'apis/dropmark'
import { Store } from 'store'
import { setData } from 'store/actions/dropmark'
import 'isomorphic-fetch'
import './index.scss'

const Component = ({
  data = [],
}) => {
  const { dropmark: { dispatch } } = useContext(Store)
  useEffect(() => {
    setData(dispatch, data)
  }, data)
  if (!data.length) {
    return <h1 className='home-error'>An error has occured while retrieving the data</h1>
  }
  const desktop = (
    <div className='home'>
      <Grid padded className='page'>
        <Grid.Column width={16}>
          <Header as='h1'>Inspiration starts here</Header>
          <Header as='h2'>
            Discover ideas from all over the web, and get personalized recommendations based on the topics you love. Get a taste below!
          </Header>
        </Grid.Column>
        {
          data.map((el, i) => <InspiringSection key={i} index={i} />)
        }
      </Grid>
    </div>
  )

  return <ResponsiveLayout>
    {desktop}
  </ResponsiveLayout>
}
const Home = React.memo(Component)
Home.getInitialProps = async (props) => {
  const response = await fetchAll()
  const data = response.map(json => {
    return {
      title: json.name,
      mainItem: json.items.shift(),
      allItems: json.items,
      items: json.items.slice(0, 3),
      user: json.user_name,
      userAvatar: json.user_avatar,
      id: json.id,
    }
  })
  return { data }
}
export default Home
