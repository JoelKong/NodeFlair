import db from "../database/db";
import Image from "next/image";

export default function SimplifiedJobDesc(): JSX.Element {
  return (
    <>
      {db.map((jobs) => {
        return (
          <div className="w-full lg:w-1/3 h-32 border-[3px] border-green-500 bg-white rounded-lg p-4 mt-4 flex flex-row">
            <div>
              <Image
                src={`/${jobs.logo}`}
                alt={jobs.company}
                width={50}
                height={50}
              />
            </div>
            <div className="flex flex-row pl-3 w-4/6">
              <p>{jobs.company}</p>
              <span>{jobs.star}</span>
            </div>
          </div>
        );
      })}
    </>
  );
}
