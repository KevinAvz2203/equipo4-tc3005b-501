"use client";

import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useApiHandler } from "@/app/hooks/useApiHandler";

export default function Page() {
  const { count, incrementCounter, displayHelloWorld } = useApiHandler();

  return (
    <div className="flex w-full h-full justify-center items-center flex-col">
      <h1 className="text-3xl font-bold">
        Bienvenido a la sección de API & Route Handlers
      </h1>
      <h1 className="text-xl">
        Da clic en los siguientes botones para ejecutar peticiones a la API
      </h1>

      <div className="my-8 text-center">
        <h1>Contador: {count}</h1>
        <button
          onClick={incrementCounter}
          className="px-6 py-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
        >
          Incrementar Contador (API)
        </button>
      </div>

      <div className="my-8 text-center">
        <h1>Descubre el mensaje sorpresa</h1>
        <button
          onClick={displayHelloWorld}
          className="px-6 py-2 mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
        >
          Abrir el mensaje sorpresa
        </button>
      </div>

      <ToastContainer position="top-center" />
    </div>
  );
}
