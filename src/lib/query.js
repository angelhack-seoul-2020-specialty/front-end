import axios from 'axios';
import nprogress from 'nprogress'

const query = (data) => new Promise((resolve, reject) => {
  nprogress.start()
  
  axios(data)
      .then(res => resolve(res.data))
      .catch(err => reject(err))
      .then(() => nprogress.done())
})

export { query }
