import { useEffect, useState } from 'react'

export function useCatImge ({ fact }) {
  const [imageURL, setImageURL] = useState('')

  useEffect(() => {
    if (!fact) return

    const fourWords = fact.split(' ', 4).join(' ')
    fetch(
      `https://cataas.com/cat/says/${fourWords}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response
        setImageURL(url)
      })
  }, [fact])

  return { imageURL }
} // Custom hook que recibe un fact y devuelve la imagen url
