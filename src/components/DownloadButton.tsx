type buttonProps = {
  className?:string | undefined
  functionality?: () => void
  btnText: string,
  hrefDown: string
}

export default function DownloadButton({hrefDown, btnText, functionality,className}:buttonProps){
  return (
    <>
    {/* Se tiver o link de download, torna-se um link para esse download */}
      {hrefDown ? (
        <a href={hrefDown} target="_blank">
          <button onClick={functionality} className={className}>{btnText}</button>
        </a>
      ): <button onClick={functionality} className={className}>{btnText}</button>}
    </>
  )
}