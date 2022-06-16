import { useEffect, useState } from 'react';
import { fetchReviews } from 'services/fetchApi';
import { mappedReviews } from 'utils/mappedReviews';
import ReviewsItem from './ReviewsItem/ReviewsItem';
import styled from 'styled-components';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchReviews(movieId).then(({ results }) => {
      setReviews(mappedReviews(results));
    });
  }, [movieId]);

  return (
    <List>
      {reviews.length > 0 ? (
        reviews.map(item => (
          <Item key={item.id}>
            <ReviewsItem name={item.name} text={item.text} photo={item.photo} />
          </Item>
        ))
      ) : (
        <h3>No Data</h3>
      )}
    </List>
  );
};

const List = styled.ul`
  margin-top: 2px;
  list-style: none;
  & img {
    margin-top: 10px;
  }
`;

const Item = styled.li`
  margin-top: 8px;
`;

export default Reviews;
