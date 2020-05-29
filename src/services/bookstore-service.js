export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 31.49,
      cover: 'https://images-na.ssl-images-amazon.com/images/I/51oxXEG6TRL._SX379_BO1,204,203,200_.jpg',
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 30.21,
      cover: 'https://images-na.ssl-images-amazon.com/images/I/419zAwJJH4L._SX415_BO1,204,203,200_.jpg',
    },
    {
      id: 3,
      title: 'The Road to React: Your journey to master plain yet pragmatic React.js',
      author: 'Robin Wieruch',
      price: 23.99,
      cover: 'https://m.media-amazon.com/images/I/31apmbgpwkL.jpg',
    },
  ]

  getBooks() {
    const request = new Promise((resolve, reject) => {
      const randError = Math.round(Math.random() * 100);
      if (randError < 86) {
        setTimeout(() => resolve(this.data), 700)
      } else {
        setTimeout(() => reject(new Error('Service is not avalible')), 1000)
      }
    })
    return request;
  }
}
