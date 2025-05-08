export interface RoomAvailability {
  date: string;
  startHour: number;
  endHour: number;
}

export interface Amenity {
  icon: string;
  label: string;
}

export interface HotelRoom {
  id: number;
  type: string; // Ej: Básica, Estándar, Premium
  description: string;
  pricePerHour: number;
  currency: string;
  images: string[];
  amenities: Amenity[];
  availability: RoomAvailability[];
}

export interface HotelDetailModel {
  id: number;
  name: string;
  location: string;
  description: string;
  rooms: HotelRoom[];
}