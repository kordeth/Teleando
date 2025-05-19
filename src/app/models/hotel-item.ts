export interface HotelListModel {
    data: HotelItemModel[];
    }

export interface HotelItemModel {
    idHotel: number;
    nombre: string;
    distrito: string;
    ciudad: string;
    rating: number;
    descripcion: string;
    HotelImagen: string;
    precio: number;
    latitud: number;
    longitud: number;
}