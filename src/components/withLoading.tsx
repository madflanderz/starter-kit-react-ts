import React, { Suspense } from 'react'

function withLoading(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  )
}

export default withLoading
