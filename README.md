# TECHX INTERNSHIP TEST - Documentación del Proyecto

## Descripción del Proyecto
Este proyecto es una aplicación React desarrollada como parte del proceso de selección para TECHX. Implementa un sistema de visualización y filtrado de productos con interfaz responsive, pruebas unitarias

## [🌐 Ver Demo en Vivo](https://prueba-tecnica-techx.vercel.app/)

## Tecnologias utilizadas

- **React + TypeScript**: Para una mejor experiencia de desarrollo y tipado estático.
- **Vite**: Herramienta de desarrollo rápida y moderna para proyectos React.
- **Tailwind CSS**: Utilizado para estilos rápidos y responsivos.
- **Jest + Testing Library**: Para pruebas unitarias de componentes y lógica.

Pasos para configurar el proyecto

1. Clonar el repositorio
 ```bash
  git clone https://github.com/emaenriquez/prueba-tecnica-techx
  cd prueba-tecnica-techx
```
1. Instala las dependencias:
```bash
  npm install
```
1. Inicia el servidor de desarrollo:
```bash
  npm run dev
```
El proyecto estará disponible en `http://localhost:5173` (o el puerto que indique la terminal).

## Scripts útiles

- `npm install`: Instala todas las dependencias del proyecto.
- `npm run dev`: Inicia el servidor de desarrollo con Vite.
- `npm test`: Ejecuta las pruebas unitarias con Jest.
- `npm test -- --coverage`: Ejecuta las pruebas y muestra el reporte de cobertura.

## Estructura del proyecto
```bash
PRUEBATECNICA/
├── public/                    # Archivos públicos
├── src/
│   ├── assets/                # Recursos estáticos
│   │   └── react.svg
│   ├── components/            # Componentes reutilizables
│   │   ├── ContactUs.tsx          # Formulario de contacto
│   │   ├── ContactUs.test.tsx     # Pruebas del formulario
│   │   ├── Filters.tsx            # Filtro de productos
│   │   ├── Navbar.tsx             # Barra de navegación
│   │   ├── ProductCard.tsx        # Tarjeta individual de producto
│   │   └── ProductList.tsx        # Lista de productos
│   ├── data/
│   │   └── products.json          # Datos estáticos de productos
│   ├── types/
│   │   └── product.ts             # Tipado del producto
│   ├── utils/
│   │   └── regex.ts               # Expresiones regulares de validación
│   |   └── useFilteredProducts.ts     # Hook personalizado para filtrado
|── App.tsx                    # Componente raíz
│── index.css                  # Estilos globales
│── main.tsx                   # Punto de entrada principal
│── setupTests.ts              # Configuración de Testing Library
├── vite-env.d.ts  # Tipado de entorno Vite
```