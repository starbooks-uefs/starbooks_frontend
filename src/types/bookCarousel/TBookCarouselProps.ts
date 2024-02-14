export type TBookCarouselProps = {
    id: number | undefined,
    img: string | undefined,
    title: string | undefined,
    author: string | undefined,
    currentPrice: number | undefined,
    functionality?: () => void,
    href: any
  }