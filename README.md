# Gestor de Productos - Node.js

Aplicación de línea de comandos para gestionar productos utilizando la API de FakeStore.

## Requisitos Previos

- Node.js instalado (versión 14 o superior)
- npm (incluido con Node.js)

## Instalación

1. Clona o descarga este repositorio
2. Navega al directorio del proyecto
3. Instala las dependencias (si las hay):
```bash
npm install
```

## Configuración

El proyecto utiliza ESModules, configurado en el archivo `package.json` con la propiedad `"type": "module"`.

## Comandos Disponibles

### 1. Consultar Todos los Productos

Obtiene y muestra la lista completa de productos disponibles en la API.

**Sintaxis:**
```bash
npm run start GET products
```

**Ejemplo:**
```bash
npm run start GET products
```

**Salida:** Lista completa de 20 productos con sus detalles (id, título, precio, descripción, categoría, imagen y rating).

---

### 2. Consultar un Producto Específico

Obtiene y muestra la información de un producto según su ID.

**Sintaxis:**
```bash
npm run start GET products/<productId>
```

**Ejemplo:**
```bash
npm run start GET products/15
```

**Parámetros:**
- `productId`: ID numérico del producto (1-20)

**Salida:** Información detallada del producto solicitado.

---

### 3. Crear un Producto Nuevo

Envía una petición POST para crear un nuevo producto con los datos proporcionados.

**Sintaxis:**
```bash
npm run start POST products <title> <price> <category>
```

**Ejemplo:**
```bash
npm run start POST products T-Shirt-Rex 300 remeras
```

**Parámetros:**
- `title`: Nombre del producto (sin espacios, usa guiones)
- `price`: Precio del producto (número)
- `category`: Categoría del producto

**Salida:** Confirmación del producto creado con un ID asignado.

**Nota:** La API de FakeStore simula la creación pero no persiste los datos realmente.

---

### 4. Eliminar un Producto

Envía una petición DELETE para eliminar un producto según su ID.

**Sintaxis:**
```bash
npm run start DELETE products/<productId>
```

**Ejemplo:**
```bash
npm run start DELETE products/7
```

**Parámetros:**
- `productId`: ID numérico del producto a eliminar

**Salida:** Confirmación de la eliminación del producto.

**Nota:** La API de FakeStore simula la eliminación pero no modifica realmente la base de datos.

---

## Estructura del Proyecto
```
proyecto/
│
├── index.js          # Archivo principal con la lógica de la aplicación
├── package.json      # Configuración del proyecto y dependencias
└── README.md         # Documentación (este archivo)
```

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución de JavaScript
- **Fetch API**: Para realizar peticiones HTTP a la API
- **ESModules**: Sistema de módulos moderno de JavaScript
- **FakeStore API**: API REST falsa para pruebas y desarrollo

## API Utilizada

Este proyecto consume la [FakeStore API](https://fakestoreapi.com/), una API REST gratuita para pruebas y prototipos.

**Endpoint base:** `https://fakestoreapi.com`

## Características Técnicas

- ✅ Uso de `process.argv` para capturar comandos de terminal
- ✅ Peticiones asíncronas con `async/await`
- ✅ Destructuring y spread operator para manipulación de datos
- ✅ Métodos de arrays y strings (split, startsWith, slice)
- ✅ Manejo de errores con try/catch
- ✅ ESModules habilitados