# TECHX INTERNSHIP TEST

## Instalación y ejecución

1. Clona el repositorio o descarga el código fuente.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   El proyecto estará disponible en `http://localhost:5173` (o el puerto que indique la terminal).

## Scripts útiles

- `npm install`: Instala todas las dependencias del proyecto.
- `npm run dev`: Inicia el servidor de desarrollo con Vite.
- `npm test`: Ejecuta las pruebas unitarias con Jest.
- `npm test -- --coverage`: Ejecuta las pruebas y muestra el reporte de cobertura.

## Decisiones técnicas

- **React + TypeScript**: Para una mejor experiencia de desarrollo y tipado estático.
- **Vite**: Herramienta de desarrollo rápida y moderna para proyectos React.
- **Tailwind CSS**: Utilizado para estilos rápidos y responsivos.
- **Jest + React Testing Library**: Para pruebas unitarias de componentes y lógica.
- **Estructura modular**: Los filtros y lógica de productos están separados en componentes y hooks personalizados para mayor mantenibilidad.

## Pruebas unitarias

- Las pruebas unitarias están ubicadas junto a los componentes o funciones que prueban, usando el sufijo `.test.tsx` o `.test.ts`.
- Para ejecutar las pruebas:
  ```bash
  npm test
  ```
- Para ver el reporte de cobertura:
  ```bash
  npm test -- --coverage
  ```
- El objetivo de cobertura es **>= 80%** en los módulos probados.

## Notas adicionales

- Si tienes problemas con la configuración de Jest y TypeScript, revisa que el archivo `tsconfig.jest.json` tenga:
  ```json
  {
    "extends": "./tsconfig.app.json",
    "compilerOptions": {
      "module": "commonjs",
      "verbatimModuleSyntax": false
    }
  }
  ```
- Si necesitas limpiar los reportes de cobertura, puedes borrar la carpeta `coverage`.
