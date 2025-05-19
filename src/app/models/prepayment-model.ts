
export interface PrePaymentModel {
    hotelId: number;
    roomId: number;
    hotelName: string;
    hotelLocation: string;
    customerName: string;
    customerEmail: string;
    roomType: string;
    roomNumber: string;
    totalPrice: number;
    totalHours: number;
    bookingId: number;
}

export interface PaymentResquestBody {
    ReservaID: number;
}

export interface PaymentResponse {
    msg: string;
}