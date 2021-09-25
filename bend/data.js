import bcrypt from 'bcryptjs'
const data = {
  users:[
    {
      name:'Ak',
      email:'akash@exe.com',
      password: bcrypt.hashSync('1234',8),
      isAdmin: true,
    },
    {
      name:'ross',
      email:'ross@exe.com',
      password: bcrypt.hashSync('1234' ,8),
      isAdmin: false,
    },
  ],
  products: [
      {
        name:' Regular Fit Shirt ',
        category:'Shirts',
        image:'./img/p1.jpg',
        price:399,
        brand:'GRITSTONES',
        rating:1.6,
        numReviews:103,
        countOfStock:29,
        description:'Gentle hand wash or machine wash with similar colours. '
      },
      {
        name:'Slim Fit StylishSleeve ',
        category:'Shirts',
        image:'./img/p1.jpg',
        price:499,
        brand:'VeBNoR',
        rating:4.9,
        numReviews:783,
        countOfStock:10,
        description:'Gentle hand wash or machine wash with similar colours. '
      },
      {
        name:' Casual Shirt',
        category:'Shirts',
        image:'./img/p1.jpg',
        price:990,
        brand:'Dennis Lingo',
        rating:2.9,
        numReviews:589,
        countOfStock:55,
        description:'Gentle hand wash or machine wash with similar colours. '
      },
      {
        name:' Slim Fit Shirt ',
        category:'Shirts',
        image:'./img/p1.jpg',
        price:459,
        brand:'U-TURN',
        rating:2.6,
        numReviews:785,
        countOfStock:209,
        description:'Gentle hand wash or machine wash with similar colours. '
      },
      {
        name:' Plain Slim Fit Casual Shirt ',
        category:'Shirts',
        image:'./img/p1.jpg',
        price:749,
        brand:'Allen Solly',
        rating:3,
        numReviews:898,
        countOfStock:11,
        description:'Gentle hand wash or machine wash with similar colours. '
      },      
      {
        name:' Slim fit Casual Shirt',
        category:'Shirts',
        image:'./img/p1.jpg',
        price:809.12,
        brand:'Van Heusen',
        rating:4.7,
        numReviews:875,
        countOfStock:0,
        description:'Gentle hand wash or machine wash with similar colours.'
      },
    ]
};
export default data