export const mappedReviews = (list = []) =>
  list.map(item => ({
    id: item.id,
    name: item.author,
    photo: item.author_details.avatar_path,
    text: item.content,
  }));
