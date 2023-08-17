import React from 'react'
import { useCatImge } from './hooks/useCatImage'
import './css/appStyle.css'
import { useCatFact } from './hooks/useCatFact'
import Otro from './components/Otro'

export function App () {
  const { fact, refreshRandomFact } = useCatFact()
  const { imageURL } = useCatImge({ fact })

  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <main className='layoutMainFlex'>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>

      <section className='textImageLine'>
        {fact && <p>{fact}</p>}
        {imageURL && <img src={imageURL} alt='Cat image extracted from cataas API' />}
      </section>

      <Otro />
    </main>
  )
}
