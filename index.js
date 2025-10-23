// Capturar los argumentos de la línea de comandos
const args = process.argv.slice(2);
const [metodo, recurso, ...params] = args;

// Función para obtener todos los productos
async function obtenerProductos() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const productos = await response.json();
    console.log('Lista de productos:');
    console.log(JSON.stringify(productos, null, 2));
    
  } catch (error) {
    console.error('Error al obtener productos:', error.message);
  }
}

// Función para obtener un producto específico
async function obtenerProductoPorId(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const producto = await response.json();
    console.log(`Producto con ID ${id}:`);
    console.log(JSON.stringify(producto, null, 2));
    
  } catch (error) {
    console.error('Error al obtener el producto:', error.message);
  }
}

// Función para crear un nuevo producto
async function crearProducto(title, price, category) {
  try {
    const nuevoProducto = {
      title,
      price: parseFloat(price),
      description: `Producto ${title}`,
      image: 'https://i.pravatar.cc',
      category
    };

    const response = await fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevoProducto)
    });
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const productoCreado = await response.json();
    console.log('Producto creado exitosamente:');
    console.log(JSON.stringify(productoCreado, null, 2));
    
  } catch (error) {
    console.error('Error al crear el producto:', error.message);
  }
}

// Función para eliminar un producto
async function eliminarProducto(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: 'DELETE'
    });
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const resultado = await response.json();
    console.log(`Producto con ID ${id} eliminado exitosamente:`);
    console.log(JSON.stringify(resultado, null, 2));
    
  } catch (error) {
    console.error('Error al eliminar el producto:', error.message);
  }
}

// Lógica principal
if (metodo === 'GET' && recurso) {
  if (recurso === 'products') {
    obtenerProductos();
  } else if (recurso.startsWith('products/')) {
    const productId = recurso.split('/')[1];
    if (productId) {
      obtenerProductoPorId(productId);
    } else {
      console.log('ID de producto no válido');
    }
  } else {
    console.log('Recurso no reconocido');
  }
} else if (metodo === 'POST' && recurso === 'products') {
  // Extraer title, price y category de los parámetros
  const [title, price, category] = params;
  
  if (title && price && category) {
    crearProducto(title, price, category);
  } else {
    console.log('Faltan parámetros para crear el producto');
    console.log('Uso: npm run start POST products <title> <price> <category>');
  }
} else if (metodo === 'DELETE' && recurso) {
  if (recurso.startsWith('products/')) {
    const productId = recurso.split('/')[1];
    if (productId) {
      eliminarProducto(productId);
    } else {
      console.log('ID de producto no válido');
    }
  } else {
    console.log('Recurso no válido para DELETE');
  }
} else {
  console.log('Comando no reconocido');
  console.log('Comandos disponibles:');
  console.log('  npm run start GET products');
  console.log('  npm run start GET products/<id>');
  console.log('  npm run start POST products <title> <price> <category>');
  console.log('  npm run start DELETE products/<id>');
}