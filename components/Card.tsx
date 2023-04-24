import Image from "next/image";
import Link from "next/link";

export interface CardProps {
  title: string;
  author: string;
  desc: string;
  _slug: string;
  bannerURL: string;
  favorites?: number;
}

function Card({ title, author, desc, _slug, bannerURL }: CardProps) {
  return (
    <div className="min-w-[320px] max-w-[320px]  bg-white flex flex-col m-2 border-2 border-gray-400 rounded-lg shadow">
      <Link href={`/podcasts/${_slug}`} className="w-full relative rounded-lg min-h-[200px] max-h-[200px]">
        <Image fill className="rounded-t-lg" src={bannerURL} alt={title} />
      </Link>
      <div className=" border-t border-black p-3 flex flex-col">
        <div className="min-h-[150px] max-h-[150px] justify-between">
          <Link
            href={`/podcasts/${_slug}`}
            className="mb-0.5 text-xl font-bold tracking-tight text-gray-900 hover"
          >
            {title}
          </Link>
          <h5 className="mb-0.5 text-base font-bold tracking-tight first-letter:text-sm text-gray-900">
            <small>by </small>
            {author}
          </h5>
          <p className="mb-2 text-base font-normal text-gray-700 first-letter:uppercase first-letter:text-sm first-letter:font first-letter:mr-0">
            {desc}
          </p>
        </div>

        <div className="flex flex-row justify-between">
          <Link
            href={`/podcasts/${_slug}`}
            type="button"
            className="w-[100px] p-2 text-white bg-black flex items-center justify-evenly rounded-md hover:bg-[#77c9ed] hover:text-black hover:border-black hover:border-b-2 hover:border-r-2"
          >
            <p>Listen</p>
          </Link>
          <button
            type="button"
            className="text-white focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg border border-black text-sm px-1 py-1 mr-2 mb-2 hover:bg-[#77c9ed] hover:text-black hover:border-black hover:border-b-2 hover:border-r-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="red-500"
              className="w-6 h-6"
            >
              <path
                className="fill-red-500"
                stroke-linecap="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
