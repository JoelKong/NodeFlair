import Image from "next/image";
import { HiOutlineExternalLink } from "react-icons/hi";
import { AiOutlineShareAlt } from "react-icons/ai";

export default function DetailedJobDesc({ activeElement }: any): JSX.Element {
  return (
    <section className="p-4 mt-4 w-2/4 h-fit min-h-screen border-2 bg-white border-gray-300 rounded-xl whitespace-nowrap lg:block hidden">
      <div className="flex flex-row w-fit">
        <div>
          <Image
            src={`/${activeElement.logo}`}
            alt={activeElement.company}
            width={50}
            height={50}
          />
        </div>
        <div className="flex flex-col pl-4">
          <div className="flex flex-row font-normal">
            <p>{activeElement.company}</p>
            <span className="pl-5">{`${activeElement.star} ★`}</span>
          </div>
          <a className="text-green-500 font-medium underline cursor-pointer">
            Go to Company Page
          </a>
          <p className="font-bold">{activeElement.title}</p>
          <div className="flex flex-row text-gray-500">
            <p className="pr-4">{activeElement.posted}</p>
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
            <p>{activeElement.location}</p>
          </div>
          <div className="flex flex-row pt-3 w-fit">
            <button className="bg-green-500 text-white font-bold w-fit rounded-lg pr-4 pl-4 pt-2 pb-2 flex flex-row items-center hover:shadow-md transition-transform hover:-translate-y-1">
              <HiOutlineExternalLink />
              <p className="pl-1">Apply</p>
            </button>
            <button className="text-green-400 border-2 border-green-400 rounded-lg font-bold pr-4 pl-4 pt-2 pb-2 ml-3 hover:shadow-md transition-transform hover:-translate-y-1">
              Save
            </button>
            <button className="text-green-400 border-2 border-green-400 rounded-lg font-bold pr-4 pl-4 pt-2 pb-2 ml-3 text-2xl hover:shadow-md transition-transform hover:-translate-y-1">
              <AiOutlineShareAlt />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
