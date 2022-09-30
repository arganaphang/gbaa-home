import Link from "next/link";
import React from "react";
import { NavLinks } from "~/utils/constant";

const Index: React.FC = () => {
  return (
    <nav className="flex h-20 items-center justify-between px-16">
      <Link href={`/`}>
        <a className="handwriting text-2xl text-black">Baptis Amanat Agung</a>
      </Link>
      <ul className="flex gap-5">
        {NavLinks.map((e) => (
          <li key={e.to}>
            <Link href={`${e.to}`}>
              <a className="text-sm font-extralight text-gray-500">{e.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Index;
