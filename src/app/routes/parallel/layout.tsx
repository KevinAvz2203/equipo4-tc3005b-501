import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parallel Routes",
  description: "Ejemplo de rutas paralelas en Next.js 15",
};

interface ParallelLayoutProps {
  children: React.ReactNode;
  analytics: React.ReactNode;
  dashboard: React.ReactNode;
  notifications: React.ReactNode;
}

export default function ParallelLayout({
  children,
  analytics,
  dashboard,
  notifications,
}: ParallelLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      
      <body className={`${inter.className} bg-gray-100 min-h-screen`}>
        <main className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-8 text-blue-600">
            Dashboard Empresarial
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sección principal */}
            <section className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
              {children}
            </section>

            {/* Sidebar con rutas paralelas */}
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-blue-800">
                  Análisis
                </h2>
                {analytics}
              </div>

              <div className="bg-green-50 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-green-800">
                  Resumen
                </h2>
                {dashboard}
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-yellow-800">
                  Notificaciones
                </h2>
                {notifications}
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
