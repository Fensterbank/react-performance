// Code splitting
// 💯 webpack magic comments
// http://localhost:3000/isolated/final/01.extra-2.js

import React from 'react'

const Tilt = React.lazy(() => import(/* webpackPrefetch: true */ '../tilt'))

function App() {
  const [showTilt, setShowTilt] = React.useState(false)

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={showTilt}
          onChange={e => setShowTilt(e.target.checked)}
        />
        {' show tilt'}
      </label>
      <React.Suspense fallback={<div>loading tilt...</div>}>
        {showTilt ? <Tilt>This is tilted!</Tilt> : null}
      </React.Suspense>
    </div>
  )
}

export default App
