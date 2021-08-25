//exportamos nuestra interface
export interface Product {
    //definimos los tipos de datos que nos manda nuestro backend
    id: number;
    name: string;
    price: number;
    description:string;
    categoryId: number;
    stock: number;


}