export const stringCapitalizer = (str: string) => {
  if (!str) {
    return str; // Return the original str if it's not in the expected format
  }

  return str.split(' ').map((str) => {
    if(str.length < 2){
      return str.toUpperCase();
    }

    return str[0].toUpperCase() + str.substring(1).toLowerCase();
  })
    .join(' ');
};