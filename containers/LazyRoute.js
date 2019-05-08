import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'
import Loading from 'components/Loading'

const Loader = <Loading style={{ height: '100vh' }}>
  Loading...
</Loading>

const LazyRoute = (props) => {
  return <Suspense fallback={Loader}>
    <Route {...props} />
  </Suspense>
}

export default React.memo(LazyRoute)
