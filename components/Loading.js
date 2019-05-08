import React from 'react'
import { Grid, Loader } from 'semantic-ui-react'

const Loading = props => {
  const { style, children, ...rest } = props
  const defaultStyle = { height: '50vh', display: 'flex', alignItems: 'center' }
  return (
    <Grid.Column style={{ ...defaultStyle, ...style }}>
      <Loader active inline='centered' {...rest}>
        {children}
      </Loader>
    </Grid.Column>
  )
}
export default Loading
