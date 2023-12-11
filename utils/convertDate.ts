// Firebase Firestore stores dates as strings ex.:("2021-12-31T23:59:59.999Z")

export default function convertDate (dateString: string): string {
  const date = new Date(dateString);
  let month = date.toLocaleString('pt-BR', { month: 'long' });
  month = month.charAt(0).toUpperCase() + month.slice(1, 3);
  const year = date.getFullYear().toString().slice(-2);
  return `${ month }/${ year }`;
};
