export interface CardProps {
    id: number;
    title: string;
    author: string;
    desc: string;
}

function Card({ id, title, author, desc }: CardProps) {
    return (

        <div className="m-2 min-w-[240px] border-2 border-gray-400 rounded-lg shadow">

            <a href="#">
                <img className="rounded-t-lg" src="https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg" alt="" />
            </a>
            <div className="px-3 py-1 text-white">
                <a href="#">
                    <h5 className="mb-0.5 text-base font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <a href="#">
                    <h5 className="mb-0.5 text-xs font-bold tracking-tight first-letter:text-sm text-gray-900 dark:text-white">{author}</h5>
                </a>
                <p className="mb-2 text-xs font-normal text-gray-700 dark:text-gray-400  first-letter:uppercase first-letter:text-sm first-letter:font first-letter:mr-0">{desc}</p>

                <div className="flex justify-between">
                    <a href="#">
                        <button type="button" className="text-white focus:ring-2 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-300 shadow-sm shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-full text-sm px-1 py-1 mr-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="black-300" className="w-6 h-6">
                                <path className='fill-black-300' stroke-linecap="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                            </svg>
                        </button>
                    </a>
                    <a href="#">
                        <button type="button" className="text-white focus:ring-2 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-300 shadow-sm shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-full text-sm px-1 py-1 mr-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="red-500" className="w-6 h-6">
                                <path className='fill-red-500' stroke-linecap="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </div>

    );
}

export default Card;