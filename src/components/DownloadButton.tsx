import { TButtonProps } from "@/types/downloadButton/TButtonProps"

export default function DownloadButton({hrefDown, btnText, functionality,className}:TButtonProps){
  return (
    <>
    {/* Se tiver o link de download, torna-se um link para esse download */}
      {hrefDown ? (
        <a href={hrefDown} >
          <button onClick={functionality} className={className}>{btnText}</button>
        </a>
      ): <button onClick={functionality} className={className}>{btnText}</button>}
    </>
  )
}