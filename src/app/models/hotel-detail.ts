export interface HotelDetailModel {
    id: number;
    name: string;
    location: string;
    description: string;
    pricePerHour: number;
    images: string[];
    amenities: AmenityModel[];
  }

  export interface AmenityModel {
    icon: string;
    label: string;
  }