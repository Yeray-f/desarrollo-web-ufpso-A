class ProductCard extends HTMLElement{

connectedCallback(){

const nombre = this.getAttribute("nombre");
const precio = this.getAttribute("precio");
const descripcion = this.getAttribute("descripcion");
const imagen = this.getAttribute("imagen");

this.innerHTML = `
<div class="card">

<img src="${imagen}" class="producto-img">

<h3>${nombre}</h3>

<p>${descripcion}</p>

<div class="precio">$${precio}</div>

<button class="btn-comprar">Comprar</button>

</div>
`;

}

}

customElements.define("product-card", ProductCard);


const productos = [

{
nombre:"Laptop Gamer",
precio:"$5.200.000",
descripcion:"Laptop de alto rendimiento para juegos",
imagen:"https://exitocol.vteximg.com.br/arquivos/ids/24525680/portatil-gamer-asus-tuf-gaming-intel-core-i5-12500h-24gb-ddr4-1tb-ssd-156-pulgadas-geforce-rtx-3050-4gb-gddr6.jpg?v=638615844706700000"
},

{
nombre:"Samsung S26 Ultra",
precio:"$8.200.000",
descripcion:"Smartphone que define el futuro de la privacidad y la inteligencia artificial aplicada al rendimiento extrem",
imagen:"https://media.falabella.com/falabellaCO/73555668_1/w=1500,h=1500,fit=cover"
},

{
nombre:"Mouse RGB",
precio:"320.000",
descripcion:"Mouse gamer con iluminación RGB",
imagen:"https://http2.mlstatic.com/D_Q_NP_2X_669171-MCO95801631420_102025-P.webp"
},

{
nombre:"Teclado Mecánico",
precio:"120.000",
descripcion:"Teclado mecánico profesional",
imagen:"https://digitalmtx.com/wp-content/uploads/Teclado-Gamer-Meetion-Retroiluminado-MT-K9320-5724-1.webp"
}

];


const catalogo = document.getElementById("catalogo");

productos.forEach(producto =>{

const tarjeta = document.createElement("product-card");

tarjeta.setAttribute("nombre",producto.nombre);
tarjeta.setAttribute("precio",producto.precio);
tarjeta.setAttribute("descripcion",producto.descripcion);
tarjeta.setAttribute("imagen",producto.imagen);

catalogo.appendChild(tarjeta);

});