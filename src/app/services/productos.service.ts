import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor( private http: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos(){
    return new Promise(( resolve, rejects) => {

      this.http.get('https://angular-portafolio-ef914.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Producto[]) => {
        this.productos = resp;
        this.cargando = false;
        resolve();
      });

    });
  }
  getProducto( id: string ){
    return this.http.get(`https://angular-portafolio-ef914.firebaseio.com/productos/${id}.json`);
  }

  buscarPoducto( termino: string){

    if ( this.productos.length === 0 ){
        //cargar productos 
      this.cargarProductos().then( () => {
        // ejecutar despues de tener los productos
        // y aplicar filtro
        this.filtrarProductos( termino );
      });

    }else{
      // aplicar filtro
      this.filtrarProductos( termino );
    }

    this.productosFiltrado = this.productos.filter( producto => {
      return true;
    });
    console.log(this.productosFiltrado);
  }

  private filtrarProductos( termino: string ) {

    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if ( prod.categoria.indexOf( termino ) >= 0  || prod.titulo.indexOf( termino ) >= 0 ){

        this.productosFiltrado.push( prod );
      }

    });
  }
}


