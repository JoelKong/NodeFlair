import { useState } from "react";
import db from "../../database/db";
import SimplifiedJobDesc from "../../components/SimplifiedJobDesc";

export default function Home() {
  const [activeElement, setActiveElement] = useState(db[0]);

  return (
    <main className="flex items-center justify-center w-screen h-full bg-gray-200">
      <section className="w-5/6 h-full">
        <SimplifiedJobDesc
          db={db}
          activeElement={activeElement}
          setActiveElement={setActiveElement}
        />
      </section>
    </main>
  );
}
