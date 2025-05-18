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

export interface BookingModel{
    hotelId: number;
    roomId: number;
    hotelName: string;
    hotemLocation: string;
    roomType: string;
    startDate: string;
    endDate: string;
    totalPrice: number;
    totalHours: number;
}