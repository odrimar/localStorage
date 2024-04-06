//sintaxis para añaddir elementos al localStorage
localStorage.setItem("nombre", "Odrimar");
sessionStorage.setItem("Nombre","Odry");

// si tenemos un objeto  debemos realizar lo siguiente
const producto ={
    nombre:"telefono",
    precio:100
}
console.log(producto);

const prodcutoString = JSON.stringify(producto);
console.log(prodcutoString);
localStorage.setItem( "producto",prodcutoString );

const meses = ['Enero','febrero', 'Marzo','abril','Mayo','Junio'];
console.log(meses);

const meseString = JSON.stringify(meses);
localStorage.setItem('meses',meseString);

const nombre = localStorage.getItem( 'nombre' ) ;
console.log(nombre);

const  product = localStorage.getItem('producto');
const productObject=JSON.parse(product);
console.log(JSON.parse(product));

const mes = localStorage.getItem( 'meses') ;
const mesArreglo = JSON.parse(mes);
console.log(mesArreglo);
