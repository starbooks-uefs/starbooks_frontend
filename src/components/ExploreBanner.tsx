import PrimaryButton from "./PrimaryButton";

export default function ExploreBanner() {
  return (
    <div className='flex flex-col w-full mt-14 items-center justify-center bg-bannerExplore'>
      <div className='w-9/12 mt-16 text-center'>
        <h1 className='text-4xl font-semibold text-purpleTitleBanner'>Explore os livros lançados recentemente</h1>
      </div>
      <div className='mt-5 w-8/12 text-center text-3xl font-medium'>
        <h1>Compre os mais recentes lançamentos literários na nossa plataforma de venda de E-Books</h1>
      </div>
      <div className='w-1/5 mt-5 mb-10'>
        <PrimaryButton className="w-full bg-yellowBtn font-bold rounded-2xl px-4 py-3" text="Visualizar E-Books"/>
      </div>
    </div> 
  )
}