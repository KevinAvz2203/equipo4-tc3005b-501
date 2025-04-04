import { useState } from "react";
import { toast } from "react-toastify";

export function useApiHandler() {
  const [count, setCount] = useState(0);

  const incrementCounter = async () => {
    try {
      const response = await fetch("/api/counter", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Error al hacer la petición");
      }

      const data = await response.json();
      setCount(data.count);
    } catch (error) {
      console.error("Error incrementando el contador:", error);
    }
  };

  const displayHelloWorld = async () => {
    try {
      const response = await fetch("/api/helloworld", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Error al hacer la petición");
      }

      const data = await response.json();
      toast(data.message);
    } catch (error) {
      console.error("Error mostrando el mensaje:", error);
    }
  };

  return {
    count,
    incrementCounter,
    displayHelloWorld,
  };
}
