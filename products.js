class Products{
    constructor(name, description, quantity){
        this.name = name;
        this.description = description;
        this.quantity = quantity;

    }
}

class ProductsManagement{
    constructor(){
        this.listproducts = []
    }
    addProducts(product){
        this.listproducts.push(product); //push es una funcion que me permite agragar cosas
    }
    removeProducts(product){
        for (var i = 0; i < this.listproducts.length; i++){
            if(this.listproducts[i] == product){
                this.listproducts.splice(i, 1);
                return;
            }
        }
        return;
    }
    updateProducts(product, newproduct){
        for (var i = 0; i < this.listproducts.length; i++){
            if(this.listproducts[i] == product){
                this.listproducts[i] == newproduct;
                return;
            }
        }
    }
    //esta es una funcion para mostrar productos
    showProducts(){
        //esta funcion que devuelva products
        return this.listproducts;
    }
}
//Hacemos exportable este codigo de la sgte forma:
export{Products, ProductsManagement}