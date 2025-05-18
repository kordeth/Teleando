export interface BookingModel{
    hotelId: number;
    roomId: number;
    hotelName: string;
    hotelLocation: string;
    roomNumber: string;
    roomType: string;
    startDate: string;
    endDate: string;
    totalPrice: number;
    totalHours: number;
}

export interface BookingRequestBody {
    HabitacionID:  number;
    NombreCliente: string;
    FechaInicio:   string;
    FechaFin:      string;
}
