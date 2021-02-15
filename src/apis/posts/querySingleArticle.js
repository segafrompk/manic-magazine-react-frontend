import axios from 'axios';
import { apiAddress } from '../ENV';

// const postData = {
//     categoryLink: '/categories/random-category',
//     categoryName: 'GEAR / TOYS & GAMES',
//     articleTitle: 'LOREM IPSUM DOLOR',
//     articleBody:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam suscipit placerat. Pellentesque gravida nulla risus, ultrices mollis ante suscipit at. Sed ultricies aliquet sem in venenatis. Fusce quis eleifend orci. Nunc aliquet aliquam lectus. Curabitur nec congue ex. Donec eu eleifend quam, sed tincidunt tortor. Ut condimentum blandit lacus, et accumsan dui scelerisque in. Fusce scelerisque diam vel ex sodales, a sagittis est cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque congue quis est id maximus.\nNulla non mauris tincidunt orci vehicula eleifend. Aenean quis est vitae nisl convallis ornare consectetur sit amet elit. Etiam tellus enim, condimentum dictum egestas a, varius et ligula. Vestibulum venenatis orci ipsum, quis malesuada dui consectetur quis. Etiam sit amet felis ut metus malesuada pharetra ut quis augue. In volutpat purus vel fringilla pellentesque. Donec libero lectus, lacinia in maximus a, imperdiet tincidunt enim. Pellentesque blandit lobortis risus sit amet accumsan. Vestibulum viverra eu tortor finibus volutpat. Duis vulputate egestas est, id euismod dolor dapibus vitae. Etiam sodales, mi ac consequat vehicula, nulla massa faucibus ante, id tincidunt libero erat scelerisque nulla. Sed ut eleifend dui. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.\nSed commodo, lectus sit amet fringilla malesuada, justo ligula tincidunt justo, et tempus nisl nibh quis felis. Maecenas ullamcorper id mi accumsan tristique. Proin luctus, velit vel varius faucibus, leo ante rutrum ante, id volutpat arcu dolor non leo. In eget nunc ultrices, viverra eros nec, suscipit purus. Duis ac diam nisl. Fusce dui est, fermentum a sagittis ut, elementum non dui. Cras convallis, sapien ac vestibulum vestibulum, augue nibh elementum ex, vel molestie diam ante eu tortor. Aliquam vel ipsum et magna auctor fringilla eu pulvinar est. Nam aliquam augue massa, et ullamcorper est molestie ut. Proin volutpat hendrerit lacus a bibendum. Cras mi elit, posuere iaculis dolor et, condimentum rhoncus ipsum.',
//     articleLink: '/posts/saafasda/adsasfad',
//     author: {
//         photos: { authorName: 'Jelena Jelena', authorId: '001' },
//         article: { authorName: 'Jelena Jelena', authorId: '001' },
//     },
//     articleCover: {
//         url:
//             'https://image.brazilianbikinishop.com/images/products/top-lulifama-top-seamless-barbie-pink-luli-babe-0.jpg',
//         alt: 'Placeholder photo',
//     },
//     tags: ['lorem', 'ipsum', 'dolor', 'sit', 'amet'],
//     related: [
//         {
//             categoryLink: '/categories/saafasda',
//             categoryName: 'GEAR / TOYS & GAMES',
//             articleCover: {
//                 url:
//                     'https://image.brazilianbikinishop.com/images/products/top-lulifama-top-seamless-barbie-pink-luli-babe-0.jpg',
//                 alt: 'Placeholder description',
//             },
//             articleTitle: 'LOREM IPSUM DOLOR',
//             articleShort:
//                 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius maximus massa id iaculis. In sodales, nulla sit amet efficitur mollis, eros quam finibus justo, eu imperdiet libero nunc eget ligula. Maecenas consectetur semper quam sed scelerisque.',
//             articleLink: '/posts/dafasd/afasdas',
//         },
//         {
//             categoryLink: '/categories/saafasda',
//             categoryName: 'GEAR / TOYS & GAMES',
//             articleCover: {
//                 url:
//                     'https://image.brazilianbikinishop.com/images/products/top-lulifama-top-seamless-barbie-pink-luli-babe-0.jpg',
//                 alt: 'Placeholder description',
//             },
//             articleTitle: 'LOREM IPSUM DOLOR',
//             articleShort:
//                 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius maximus massa id iaculis. In sodales, nulla sit amet efficitur mollis, eros quam finibus justo, eu imperdiet libero nunc eget ligula. Maecenas consectetur semper quam sed scelerisque.',
//             articleLink: '/posts/dafasd/afasdas',
//         },
//         {
//             categoryLink: '/categories/saafasda',
//             categoryName: 'GEAR / TOYS & GAMES',
//             articleCover: {
//                 url:
//                     'https://image.brazilianbikinishop.com/images/products/top-lulifama-top-seamless-barbie-pink-luli-babe-0.jpg',
//                 alt: 'Placeholder description',
//             },
//             articleTitle: 'LOREM IPSUM DOLOR',
//             articleShort:
//                 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius maximus massa id iaculis. In sodales, nulla sit amet efficitur mollis, eros quam finibus justo, eu imperdiet libero nunc eget ligula. Maecenas consectetur semper quam sed scelerisque.',
//             articleLink: '/posts/dafasd/afasdas',
//         },
//         {
//             categoryLink: '/categories/saafasda',
//             categoryName: 'GEAR / TOYS & GAMES',
//             articleCover: {
//                 url:
//                     'https://image.brazilianbikinishop.com/images/products/top-lulifama-top-seamless-barbie-pink-luli-babe-0.jpg',
//                 alt: 'Placeholder description',
//             },
//             articleTitle: 'LOREM IPSUM DOLOR',
//             articleShort:
//                 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius maximus massa id iaculis. In sodales, nulla sit amet efficitur mollis, eros quam finibus justo, eu imperdiet libero nunc eget ligula. Maecenas consectetur semper quam sed scelerisque.',
//             articleLink: '/posts/dafasd/afasdas',
//         },
//     ],
// };

export default axios.create({ baseURL: `${apiAddress}/articles/` });
