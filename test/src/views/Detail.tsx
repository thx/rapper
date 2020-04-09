import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default () => {
  const history = useHistory()
  console.log('detail', history)
  useEffect(() => {
    console.log('history', history.location.search)
  }, [history])

  return <div>详情</div>
}