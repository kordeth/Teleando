export interface HotelDetailResponse {
  data: HotelDetailModel[];
}

export interface HotelDetailModel {
  HotelID:        number;
  nombre:         string;
  direccion:      string;
  distrito:       string;
  ciudad:         string;
  tipoHabitacion: TipoHabitacion[];
}

export interface TipoHabitacion {
  idTipoHabitacion: number;
  nombre:           string;
  descripcion:      string;
  precio:           number;
  imagenRuta:       string;
  habitaciones:     Habitaciones[];
  comodidades:      Comodidades[];
}

export interface Comodidades {
  idComodidad:     number;
  comodidadNombre: string;
  icon_Class:      string;
}

export interface Habitaciones {
  idHabitacion:     number;
  disponible:       boolean;
  numeroHabitacion: string;
}
