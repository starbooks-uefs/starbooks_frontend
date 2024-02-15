import DownloadButton from "./DownloadButton";

export default function ExploreBanner() {
  return (
    <div className='p-12 gap-12 flex flex-col w-full mt-14 items-center justify-center bg-bannerExplore'>
      <div className='w-9/12 text-center'>
        <h1 className='text-4xl font-semibold text-purpleTitleBanner'>Explore os livros lançados recentemente</h1>
      </div>
      <div className='w-8/12 text-center text-3xl font-medium'>
        <h1>Compre os mais recentes lançamentos literários na nossa plataforma de venda de E-Books</h1>
      </div>
    </div> 
  )
}