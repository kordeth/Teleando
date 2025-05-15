    export interface HomeModel {
    data: Data[];
    }
 
    export interface Data {
        ofertas:   Oferta[];
        populares: Oferta[];
    }
    
    export interface Oferta {
        idHotel:     number;
        nombre:      string;
        descuento?:  number;
        distrito:    string;
        ciudad:      string;
        HotelImagen: string;
    }