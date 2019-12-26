import {fetchQuizData, normalizeQuizData} from '.'

export const fetchAndNormalizeQuizData = () => 
  new Promise(async (resolve, reject) => {
    try {
      const data = await fetchQuizData()
      resolve(normalizeQuizData(data.results))
    } catch (error) {
      reject(error)
    }
  })
