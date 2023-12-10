export default function countMinutes  (value: string) {
  value.replace(/(\r\n|\n|\r)/g, ' ').trim();
  const count = value.split(/\s+/g).length - 1;
  const minutes = count / 150;
  if (minutes < 1) {
    return '1 min';
  } if (minutes === 60) {
    const minuto = `${minutes.toFixed(0)  } min`;
    return minuto;
  } if (minutes < 60) {
    const minutos = `${minutes.toFixed(0)  } min`;
    return minutos;
  } if (minutes === 60) {
    return '1 Hora';
  }
    return '+ de 1 Hora';

};