import React, { Suspense } from 'react'

function withLoading(Component: React.ComponentType) {
  return (props: {}) => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  )
}

export default withLoading
