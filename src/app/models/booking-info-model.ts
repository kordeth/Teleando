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

export interface BookingRequestBody {
    HabitacionID:  number;
    NombreCliente: string;
    FechaInicio:   string;
    FechaFin:      string;
}

export interface BookingResponse {
    reserva_id: number;
    msg: string;
}