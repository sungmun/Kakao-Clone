const nameJoin = (names = []) => {
  const nameStr = names.join(', ');
  return nameStr.length > 40 ? `${nameStr.slice(0, 39)}...` : nameStr;
};

export default nameJoin;
