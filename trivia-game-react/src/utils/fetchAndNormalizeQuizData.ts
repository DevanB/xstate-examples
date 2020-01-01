import {fetchQuizData, normalizeQuizData} from '.'

export const fetchAndNormalizeQuizData = async () => {
  try {
    const data = await fetchQuizData()
    return Promise.resolve(normalizeQuizData(data.results))
  } catch (error) {
    return Promise.reject(error)
  }
}
