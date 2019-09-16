// interfaz para representar la
// estructura del objeto que se
// recibe del servicio que consume la app (el backend)
export interface Movie {
  id?: number;
  title: string;
  description: string;
  genre: string;
  year: number;
  duration: string;
  createdAt?: string;
}
