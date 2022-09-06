export interface ICarType {
    id?: number;
    thumbnailSrc: JSX.Element[];
    name: string;
    vanType: string;
    sleep: number;
    originalPrice?: number;
    currentPrice: number;
    onClick?: () => void;
  }