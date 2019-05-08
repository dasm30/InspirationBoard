import React, { Component } from 'react'
import { Grid, Segment, Image, Divider } from 'semantic-ui-react'
import ResponsiveLayout from 'containers/ResponsiveLayoutNoSSR'

const srcs = [
  'https://i.ytimg.com/vi/efGr0fSJtUc/maxresdefault_live.jpg',
  'http://cdn3.radiosantafe.com/wp-content/uploads/2015/05/Osos-perezosos-.jpg',
  'https://www.ellas.pa/wp-content/uploads/2017/07/07d0ab2a396867054b22f5e345063fe6.jpeg',
  'https://i.blogs.es/3d756e/o-photos-of-sloths-facebook/450_1000.jpg',
  'https://vignette.wikia.nocookie.net/reinoanimalia/images/f/f0/Fg.jpg/revision/latest?cb=20181201203459&path-prefix=es',
  'https://wakyma.com/blog/wp-content/uploads/2017/02/el-perezoso-770x460.jpg',
]

class Lazy extends Component {
  render() {
    const { maxAmount = 1 } = this.props
    const desktop = <div className='product-list'>
      <Segment textAlign='center'>
        <h3>I am a Lazy Component!</h3>
        {
          srcs.map((src, idx) => {
            if (idx >= maxAmount) return undefined
            return <Grid.Row key={idx}>
              <Divider hidden />
              <Image
                centered
                size='medium'
                src={src}
              />
            </Grid.Row>
          })
        }
      </Segment>
    </div>

    return <ResponsiveLayout>
      {desktop}
    </ResponsiveLayout>
  }
}

export default Lazy
