import React, { useEffect, useState } from 'react'

const CAT_FACT_ENDPOINT = 'https://catfact.ninja/fact'

export function App () {
  const [fact, setFact] = useState(null)
  const [imageURL, setImageURL] = useState('')

  useEffect(() => {
    fetch(CAT_FACT_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const fourWords = fact.split(' ', 4).join(' ')
        fetch(`https://cataas.com/cat/says/${fourWords}?size=50&color=red&json=true`)
          .then(res => res.json())
          .then(response => {
            const { url } = response
            setImageURL(url)
          })
      })
  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageURL && <img src={'https://cataas.com' + imageURL} alt='Cat image extracted from cataas API' />}
    </main>
  )
}
