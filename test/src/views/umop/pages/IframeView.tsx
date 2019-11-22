import React, { useEffect, createRef } from 'react'
import { IFrame } from 'components/styled/iframe'
import customHistory from 'models/history'
import { stringify } from 'querystring'

import { useSelector } from 'react-redux'
import { getLocationSearch } from 'models/redux/modules/common/selectors'

const HOSTNAME = `https://dianjiang.di.taobao.com`

export default function IframeView() {
  const ref = createRef<HTMLIFrameElement>()
  const search = useSelector(getLocationSearch)
  const url = `${HOSTNAME}/?${stringify({iframe: 1})}#!${search.url || '/pack-dynamic/index'}`

  useEffect(() => {
    if (!ref.current || !ref.current.contentWindow) {
      return
    }
    window.addEventListener('message', digestMessage)
    return () => window.removeEventListener('message', digestMessage)
  }, [])

  return (
    <IFrame
      src={url}
      ref={ref}
    />
  )

  function digestMessage(event: MessageEvent) {
    if (event.isTrusted && event.origin.lastIndexOf(HOSTNAME) === -1) {
      // secure check
      return
    }

    if (!event.data || typeof event.data !== 'object') {
      return
    }

    switch (event.data.type) {
      case 'nav':
        if (event.data.url === search.url) {
          break
        }
        customHistory.push({
          url: event.data.url,
        })
        break
      case 'dialog':
        break
    }
  }
}
