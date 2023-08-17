import React from 'react'
import { useCatImge } from '../hooks/useCatImage'

const Otro = () => {
  const { imgeUrl } = useCatImge({ fact: 'Random Fact' })

  return (
    <>
      {imgeUrl && <img src={imgeUrl} />}
    </>
  )
}

export default Otro
