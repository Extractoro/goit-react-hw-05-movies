export const mappedCast = list =>
  list.cast.map(item => ({
    id: item.id,
    name: item.original_name,
    character: item.character,
    photo: item.profile_path,
  }));
