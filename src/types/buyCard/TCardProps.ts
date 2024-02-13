export type TCardProps = {
    bookName: string | undefined,
    author: string | undefined,
    currentPrice: number | undefined,
    textBtn: string | undefined,
    functionality: () => void,
    btnText: string
    changeBtnClas: string,
    hrefDown: string | null
}