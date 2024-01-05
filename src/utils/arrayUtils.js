export function hashtagsCleaner(tags) {
  if (tags.length === 0) return ["discovr", "server", "discord"];

  let MAX_TAGS = 6;

  const tagsTotalLength = tags.reduce(
    (acc, currentString) => acc + currentString.length,
    0
  );

  if (tagsTotalLength > 70) {
    MAX_TAGS = MAX_TAGS - 1;
  }

  if (tags.length > MAX_TAGS) {
    return tags.slice(0, MAX_TAGS);
  }

  return tags;
}

export function computeRating(ratings) {
  if (ratings.length === 0) return 0;

  const totalRating = ratings.reduce((acc, currRating) => acc + currRating, 0);

  const result = totalRating / ratings.length;

  return Math.round(result);
}
