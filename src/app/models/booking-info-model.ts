export interface BookingInfoModel {
    selectedDate: string;
    selectedHours: number;
    name: string;
    location: string;
    roomType: string;
    image: string;
    pricePerHour: number;
    totalPrice: number;
    rangeFormatted: string;
    currency: string;
}