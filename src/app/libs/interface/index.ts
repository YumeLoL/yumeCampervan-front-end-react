
export interface IVan {
    id?: number;
    thumbnailSrc?: any[];
    name: string;
    vanType: string;
    sleep: number;
    location: string;
    originalPrice?: number;
    currentPrice: number;
    discount?: boolean;
    onClick?: () => void;
  }

