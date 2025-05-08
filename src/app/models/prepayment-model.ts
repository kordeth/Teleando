import { BookingInfoModel } from "./booking-info-model";

export interface PrePaymentModel {
    transactionId: string;
    amount: number;
    taxes: number;
    totalAmount: number;
    currency: string;
    customerName: string;
    customerLastName: string;
    customerEmail: string;
    customerPhone: string;
    bookingInfo: BookingInfoModel;
}