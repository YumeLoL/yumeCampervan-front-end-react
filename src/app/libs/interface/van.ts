export interface IVan {
  berths: number;
  createdAt: string;
  employeeId: number;
  updatedAt: string;
  vanDescription: string;
  vanId: number;
  vanImageUrl: string;
  vanLocation: string;
  vanName: string;
  vanPricePerDay: number;
  vanStatus: string;
  vanTypeId: number;
}

export interface IVanType {
  vanTypeId?: number,
  vanTypeName?: string,
  updatedAt?: string,
  createdAt?: string
}
