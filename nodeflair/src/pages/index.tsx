import { useState } from "react";
import db from "../../database/db";
import SimplifiedJobDesc from "../../components/SimplifiedJobDesc";
import DetailedJobDesc from "../../components/DetailedJobDesc";

export default function Home() {
  // Selected Job
  const [activeElement, setActiveElement] = useState(db[0]);

  return (
    <main className="flex items-center justify-center w-screen h-full bg-gray-200">
      <section className="w-[95%] lg:w-5/6 h-fit pb-12 flex flex-row">
        <div className="lg:w-[calc(50%-2rem)] w-full h-full flex flex-col items-center">
          <SimplifiedJobDesc
            db={db}
            activeElement={activeElement}
            setActiveElement={setActiveElement}
          />
        </div>
        <DetailedJobDesc activeElement={activeElement} />
      </section>
    </main>
  );
}
