
export function convertDate(date){
  const dateSplited = date.split('-');

  const day = dateSplited[2];
  const month = dateSplited[1];
  const year = dateSplited[0];

  const brDate = `${day}/${month}/${year}`;

  return brDate;
}