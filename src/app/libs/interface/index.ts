export interface IVan {
    id?: number;
    thumbnailSrc?: any[];
    name?: string;
    vanType?: string;
    sleep?: number;
    location?: string;
    originalPrice?: number;
    currentPrice?: number;
    discount?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>  | any;
    // toRoute?:string;
  }

export interface IPost {
  id: number;
  title: string;
  img: string;
  durations: string;
  highlights: string[];
  content: string;
}


