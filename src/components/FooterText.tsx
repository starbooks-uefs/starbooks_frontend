import Link from "next/link"
import { TFooterTextProps } from "@/types/footerText/TFooterTextProps"

export default function FooterText( {title, firstTopic, secondTopic}: TFooterTextProps ) {
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