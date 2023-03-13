export interface IVan {
  berths: number;
  createdAt: string;
  employeeId: number;
  updatedAt: string;
  vanDescription: string;
  vanId: number;
  vanImg: string[];
  vanLocation: string;
  vanName: string;
  vanPricePerDay: number;
  vanStatus: string;
  vanTypeId: number;
  vanTypeName: string;
}

export interface IVanType {
  vanTypeId?: number,
  vanTypeName?: string,
  updatedAt?: string,
  createdAt?: string
}
