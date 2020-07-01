//prueba esta en este archivo, para poder testear
import {Products, ProductsManagement} from "./products.js";
 let p1 = new Products("Pollo","Pollo sofia", 20);
 let p2 = new Products("Galletas","Galletas mabel", 50);
 let p3 = new Products("Pollo","Pollo Imba", 50);

 let manager = new ProductsManagement();
manager.addProducts(p1);
manager.addProducts(p2);
/*manager.removeProducts(p1); /*Para actualizar no deberia borrar nada, sino
                                no lo encontrará, asi qe por eso quitamos esta parte*/
manager.updateProducts(p1, p3);/*Estamos diciendo que quiero cambiar
                                el p1 por el p3*/

/*Aqui ya podemos usar o probar con show products(lo 
agregamos en el archivo Products.js)lo que esta sucediendo aqui*/
console.log(manager.showProducts());