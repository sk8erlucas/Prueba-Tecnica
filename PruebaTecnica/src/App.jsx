import React, { useEffect, useState } from 'react'
import { useCatImge } from './hooks/useCatImage'
import { getRandomFact } from './services/facts'
import './css/appStyle.css'

export function App () {
  const [fact, setFact] = useState(null)

  const { imageURL } = useCatImge({ fact })

  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main className='layoutMainFlex'>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>

      <section className='textImageLine'>
        {fact && <p>{fact}</p>}
        {imageURL && <img src={'https://cataas.com' + imageURL} alt='Cat image extracted from cataas API' />}
      </section>
    </main>
  )
}
