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
    ]  

  getBooks() {
    const request = new Promise((resolve) => {
      setTimeout(() => resolve(this.data), 1500)
    })
    return request;
  }
}
