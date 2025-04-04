import { BellIcon } from "@heroicons/react/24/outline";

const notifications = [
  { id: 1, text: "Nuevo mensaje del equipo de ventas", urgent: true },
  { id: 2, text: "Revisión de proyecto pendiente", urgent: false },
];

export default function NotificationsPage() {
  return (
    <ul className="space-y-3">
      {notifications.map((notification) => (
        <li
          key={notification.id}
          className={`flex items-start space-x-2 p-3 rounded-lg ${
            notification.urgent ? "bg-red-50" : "bg-gray-50"
          }`}
        >
          <BellIcon className="h-5 w-5 text-yellow-600 mt-1" />
          <span className="text-sm text-gray-700">{notification.text}</span>
        </li>
      ))}
    </ul>
  );
}
