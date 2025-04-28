export interface HotelItemModel {
    id: number;
    name: string;
    location: string;
    description: string;
    image: string;
    pricePerHour: number;
    availableRooms: number;
    amenities: string[];
    rating: number;
    isPopular: boolean;
}