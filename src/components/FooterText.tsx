import Link from "next/link"

type FooterTextProps = {
  title: string,
  firstTopic: string,
  secondTopic: string | null
}

export default function FooterText( {title, firstTopic, secondTopic}: FooterTextProps ) {
  return (
    <div className='flex justify-center flex-col'>
      <h1 className='mb-3 text-base'>{title}</h1>
      <Link href="/" className='mb-1 font-light'>{firstTopic}</Link>
      {secondTopic ? (
        <Link href="/" className='mb-1 font-light'>{secondTopic}</Link>
      ): null}
    </div>
  )
}