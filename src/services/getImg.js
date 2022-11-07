import noImg from '../images/image-not-found.png';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const getImg = el => {
  if (el.profile_path) {
    return `${IMG_URL + el.profile_path}`;
  } else if (el.poster_path) {
    return `${IMG_URL + el.poster_path}`;
  }
  return noImg;
};

export default getImg;