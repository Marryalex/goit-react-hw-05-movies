import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesAPI from '../../services/movies-api';
import NotFoundMsg from '../../components/NotFoundMsg/NotFoundMsg';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    moviesAPI.getReviews(movieId).then(({ results }) => {
      setReviews(results);
    });
  }, [movieId]);


  return (
    <>
      {reviews && (
        <>
          {reviews.length > 0 ? (
            <div>
              {reviews.map(({ id, author, content }) => {
                return (
                  <li key={id}>
                    <h3>{author}:</h3>
                    <p>"{content}"</p>
                  </li>
                );
              })}
            </div>
          ) : (
            <NotFoundMsg msg="No Reviews on this movie..." />
          )}
        </>
      )}
    </>
  );
};
//   return (
//     <>
//       {reviews.length > 0 ? (
//         <ul>
//           {reviews.map(({ id, author, content }) => (
//             <li key={id}>
//               <p>Author: {author}</p>
//               <p>Reviews: {content}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <NotFoundMsg msg="No Reviews on this movie..." />
//       )}
//     </>
//   );
// }