export const shipFactory = (length) => {
  let noOftimesHit = 0;
  const isHit = () => {
    noOftimesHit++;
  };
  const isSunk = () => {
    if (length === noOftimesHit) return true;
    else return false;
  };
  return { isHit, isSunk };
};


