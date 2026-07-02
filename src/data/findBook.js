import { books } from './books.js'

export function findBook(moodId, seasonId, genreId) {
  // 1. Cerchiamo prima una corrispondenza perfetta: mood + stagione + genere
  const perfectMatch = books.find(book =>
    book.moods.includes(moodId) &&
    book.seasons.includes(seasonId) &&
    book.genre === genreId
  )

  if (perfectMatch) {
    return perfectMatch
  }

  // 2. Se non c'è, cerchiamo almeno una corrispondenza sul mood
  const moodMatch = books.find(book => book.moods.includes(moodId))

  if (moodMatch) {
    return moodMatch
  }

  // 3. Se non troviamo nemmeno quello, restituiamo null
  return null
}