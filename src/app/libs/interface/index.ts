
export interface ICarType {
    id?: number;
    thumbnailSrc?: any[];
    name: string;
    vanType: string;
    sleep: number;
    originalPrice?: number;
    currentPrice: number;
    discount?: boolean;
    onClick?: () => void;
  }