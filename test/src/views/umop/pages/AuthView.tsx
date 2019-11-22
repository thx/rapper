import React, { useState } from 'react'
import { MuxCard } from '@alife/mux-components'

export default function AuthView() {
  const [state, setState] = useState()
  return (
    <>
      <MuxCard title="如果你看得到这个页面，说明你有权限" />
    </>
  )
}
