// =============================================
// PRODUCTOS disponibles para comprar
// =============================================
const productos = [
  {
    id: 1,
    nombre: "Transporte Logístico",
    descripcion: "Envío aéreo de carga nacional e internacional",
    precio: 150000,
    storage: "local"      // guarda en localStorage
  },
  {
    id: 2,
    nombre: "Venta de Pasajes",
    descripcion: "Pasaje aéreo con servicios incluidos",
    precio: 80000,
    storage: "session"    // guarda en sessionStorage
  },
  {
    id: 3,
    nombre: "Servicio de Mantenimiento",
    descripcion: "Mantenimiento preventivo de aeronaves",
    precio: 200000,
    storage: "local"      // guarda en localStorage
  }
];

// =============================================
// Al hacer clic en Comprar: muestra opciones
// =============================================
function mostrarOpciones(idProducto) {
  const producto = productos.find(function(p) { return p.id === idProducto; });
  if (!producto) return;

  const confirmar = confirm(
    "🛒 " + producto.nombre + "\n\n" +
    "📋 " + producto.descripcion + "\n" +
    "💲 Precio: $" + producto.precio.toLocaleString("es-AR") + "\n\n" +
    "¿Desea agregar este servicio al carrito?"
  );

  if (confirmar) {
    agregarAlCarrito(producto);
  }
}

// =============================================
// Guarda el producto en el storage correspondiente
// =============================================
function agregarAlCarrito(producto) {
  if (producto.storage === "local") {
    var carritoLocal = JSON.parse(localStorage.getItem("carritoLocal")) || [];
    carritoLocal.push(producto);
    localStorage.setItem("carritoLocal", JSON.stringify(carritoLocal));
    alert("✅ \"" + producto.nombre + "\" agregado al carrito.\n(Guardado en localStorage)");

  } else if (producto.storage === "session") {
    var carritoSession = JSON.parse(sessionStorage.getItem("carritoSession")) || [];
    carritoSession.push(producto);
    sessionStorage.setItem("carritoSession", JSON.stringify(carritoSession));
    alert("✅ \"" + producto.nombre + "\" agregado al carrito.\n(Guardado en sessionStorage)");
  }
}

// =============================================
// Asigna el evento click a cada botón de compra
// =============================================
document.addEventListener("DOMContentLoaded", function() {
  var botones = document.querySelectorAll(".btn-compra");

  botones.forEach(function(boton, indice) {
    boton.addEventListener("click", function(evento) {
      evento.preventDefault();
      mostrarOpciones(indice + 1); // ids 1, 2, 3
    });
  });
});
