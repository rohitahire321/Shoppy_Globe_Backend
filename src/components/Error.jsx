import React from 'react'
import { useRouteError } from 'react-router'

function Error() {

  const err = useRouteError()
  return (
    <div className='bg-blue-950'>
      <h1 className='mb-20 m-5'>OOPS! Wrong URL</h1>
      <h2>{err.data}</h2>
      <h2>{err.status}</h2>
      <h2>{err.statusText}</h2>
    </div>
  )
}

export default Error
