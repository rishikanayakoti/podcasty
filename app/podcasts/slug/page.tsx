import React from 'react'
import NotFound from './not-found';
import podcast from '@/sanity/schemas/podcast';
import 'tailwindcss/tailwind.css'

type PageProps = {
  params: {
    podcastId: string
  };
};

const fetchPodcast = async(podcastId: string) => {
  const res = await fetch(`http://localhost:3001/podcasts/${podcastId}`);

  {/* @ts-ignore */}
  const podcast: Podcast = await res.json();
  return podcast;
};

// { params: { podcastId } }: PageProps 
async function PodcastPage() {
  // const podcast = await fetchPodcast(podcastId);

  // if(!podcast.id) return NotFound();
  return (
    <div className='sm:m-1 body-font font-mabry'>
      {/* Podcast Name: {podcast.name} <br/> */}
      {/* Podcast Title: {podcast.title} <br /> */}
      {/* Podcast  */}
      <div className='outline rounded-lg flex flex-col w-100 h-full p-5 m-5 sm:m-2 sm:p-2'>
        <p className="text-center mb-2 text-4xl">Podcast Name</p>
        <div className='lg:h-96 lg:min-w-full flex lg:flex-row lg:p-5 sm:flex-col'>
          <div className='outline rounded-lg text-center lg:w-2/3 sm:mb-2 sm:w-auto'>[Video/Audio]</div>
          <div className='place-content-center outline rounded-lg flex lg:flex-col lg:w-1/3 lg:ml-1 sm:flex-col sm:mt-1'>
            <div className='sm:w-auto'>
              <div className='p-2 m-2'>Author Name: </div>
            </div>
            <div className='sm:w-0.5 sm:justify-between sm:flex sm:flex-row'>
              <div className='p-2 mx-2'>Duration: </div>
              <div className='p-2 mx-2'>Genre: </div>
            </div>
            <div className='sm:w-0.5 sm:justify-between sm:flex sm:flex-row'>
              <div className='p-2 mx-2'>Views: </div>
              <div className='p-2 mx-2'>Likes: </div>
            </div>
          </div>
        </div>
        <div className='p-5 flex flex-col place-content-center lg:p-5 lg:ml-1 sm:w-auto sm:p-1 sm:mt-1'>
          <p className='text-xl'>Description</p>
          <p className='bg-white lg:mt-2 lg:mb-2 outline lg:p-2 rounded-lg sm:p-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium voluptatem repellendus, ea, totam odit quos quasi porro doloremque nihil similique reiciendis ipsam vel nemo facilis hic odio magnam quas placeat.</p>
        </div>
        <div className='flex lg:flex-row justify-center sm:flex-col sm:mt-2'>
          <div className='sm:flex sm:flex-row sm:justify-between sm: w-auto'>
            <button className='p-2 m-2 outline rounded-lg bg-[#f3a642] hover:bg-[#77c9ed] hover:border-black hover:border-b-2 hover:border-r-2 sm:w-1/2'>More from [Author Name]</button>
            <button className='p-2 m-2 outline rounded-lg bg-[#f3a642] hover:bg-[#77c9ed] hover:border-black hover:border-b-2 hover:border-r-2 sm:w-1/2'>More from [This TopicName]</button>
          </div>
          <div className='sm:flex sm:flex-col'>
            <button className='p-2 m-2 outline rounded-lg bg-[#000000] text-white hover:bg-[#FF90E7] hover:text-black hover:border-black hover:border-b-2 hover:border-r-2'>HOME</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PodcastPage