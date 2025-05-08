export interface HotelItemModel {
    id: number;
    name: string;
    location: string;
    description: string;
    image: string;
    minPricePerHour: number;
    currency: string;
    rating: number;
    isPopular: boolean;
    position: HotelPositionModel;
}

export interface HotelPositionModel {
    latitude: number;
    longitude: number;
}