const threshold = 3;
const windowMs = 7 * 24 * 60 * 60 * 1000;
const topic = 'Instrucciones contradictorias';
const processName = 'Incorporación de personal';

const reports = [
  { id: 'demo-1', receivedAt: '2026-11-19T12:00:00Z', topic, processName },
  { id: 'demo-2', receivedAt: '2026-11-21T12:00:00Z', topic, processName },
  { id: 'demo-3', receivedAt: '2026-11-23T12:00:00Z', topic, processName },
];

function countRelatedReports(history, incoming) {
  const end = Date.parse(incoming.receivedAt);
  const matching = history.filter((report) => {
    const time = Date.parse(report.receivedAt);
    return report.topic === incoming.topic
      && report.processName === incoming.processName
      && time >= end - windowMs
      && time <= end;
  });
  return new Set(matching.map((report) => report.id)).size;
}

const latest = reports.at(-1);
const previousCount = countRelatedReports(reports.slice(0, -1), latest);
const currentCount = countRelatedReports(reports, latest);

console.log(`Antes del envío: ${previousCount} reportes en siete días.`);
if (previousCount < threshold && currentCount >= threshold) {
  console.log(`Nueva alerta: ${latest.topic} · ${currentCount} reportes en siete días.`);
  console.log('Siguiente paso: revisar la alerta y asignar una acción.');
}
