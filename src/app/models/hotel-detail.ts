export interface HotelDetailModel {
    id: number;
    name: string;
    location: string;
    description: string;
    pricePerHour: number;
    images: string[];
    amenities: AmenityModel[];
    availability: DayAvailability[]; // Opcional, puede no estar presente
  }

  export interface AmenityModel {
    icon: string;
    label: string;
  }

  export interface DayAvailability {
    date: string;        // "YYYY-MM-DD"
    startHour: number;   // Ej. 9
    endHour: number;     // Ej. 18
  }