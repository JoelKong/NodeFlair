import Image from "next/image";

export default function SimplifiedJobDesc({
  db,
  activeElement,
  setActiveElement,
}: any): JSX.Element {
  return (
    <>
      {db.map((jobs: any) => {
        return (
          <section
            key={jobs.id}
            onClick={() => setActiveElement(jobs)}
            className={`${
              activeElement.id === jobs.id && "lg:border-green-500"
            } relative p-4 mt-4 flex flex-col w-[95%] h-fit border-2 bg-white border-gray-300 rounded-xl whitespace-nowrap overflow-hidden hover:cursor-pointer hover:shadow-md transition-transform hover:-translate-y-1`}
          >
            <div className="flex flex-col sm:flex-row">
              <div>
                <Image
                  src={`/${jobs.logo}`}
                  alt={jobs.company}
                  width={50}
                  height={50}
                />
              </div>
              <section className="flex flex-col w-5/6 sm:pl-3 sm:pt-0 pt-2">
                <div className="flex flex-row font-normal">
                  <p>{jobs.company}</p>
                  <span className="pl-5">{`${jobs.star} ★`}</span>
                </div>
                <p className="font-bold">{jobs.title}</p>
                <div className="flex flex-row">
                  <p className="font-bold text-green-400 pr-4">{jobs.posted}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="25"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="gray"
                      d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144Zm0 224a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64Z"
                    />
                  </svg>
                  <p className="text-gray-500">{jobs.location}</p>
                </div>
                <div className="flex flex-row">
                  <p className="font-semibold pr-2">{jobs.salary}</p>
                  <div className="rounded-md text-center bg-gray-200 w-10">
                    <p className="text-gray-600">EST</p>
                  </div>
                </div>
              </section>
              <div className="sm:relative absolute right-4">
                <p className="font-semibold text-green-600 bg-green-200 rounded-md pt-1 pb-1 pl-2 pr-2">
                  {jobs.category}
                </p>
              </div>
            </div>
            <div className="w-full border-gray-100 border-2 mt-5"></div>
            <div className="flex flex-row flex-wrap w-full max-h-10 truncate">
              {jobs.requirements.map((requirement: string, index: number) => {
                return (
                  <div
                    key={index}
                    className="mr-2 mt-1 pt-1 pb-1 pl-2 pr-2 rounded-md bg-gray-200 text-gray-500 font-semibold"
                  >
                    <span>{requirement}</span>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </>
  );
}
