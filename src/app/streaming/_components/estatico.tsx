"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Estatico() {
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/streaming" },
    { label: "No Loading UI", href: "/streaming/noLoadingUI" },
    { label: "Loading the whole page", href: "/streaming/loadingWholePage" },
    {
      label: "Components With Suspense",
      href: "/streaming/loadingWithSuspense",
    },
  ];

  return (
    <div className="flex w-full bg-gray-600 p-5 justify-center items-center flex-col">
      <div className="font-bold text-white text-3xl mb-2">
        Loading UI and Streaming
      </div>
      <div className="flex flex-row gap-x-1">
        {links.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={`p-2 rounded-2xl transition ${
              pathname === href
                ? "bg-blue-500 text-white"
                : "bg-sky-50 hover:bg-blue-300"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
