export default function Home() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">
        Bienvenido al Panel de Control
      </h2>
      <p className="text-gray-600">
        Aquí puedes monitorear todas las métricas importantes de tu negocio en
        tiempo real.
      </p>
      <div className="bg-indigo-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-indigo-800">
          Actualizaciones Recientes
        </h3>
        <ul className="list-disc list-inside mt-2 space-y-2 text-indigo-700">
          <li>Sistema estable - sin errores reportados</li>
          <li>Última actualización: hace 2 horas</li>
        </ul>
      </div>
    </div>
  );
}
