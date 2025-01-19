#  🖥 Logs de los Contenedores

El historial de despliegues y los logs de los contenedores proporcionan información detallada sobre las acciones realizadas, los estados alcanzados y cualquier problema ocurrido durante las operaciones.

## Filtros

Para facilitar la búsqueda y análisis de los despliegues registrados, se ofrecen filtros configurables que permiten ajustar la visualización según criterios específicos. Estos filtros incluyen:

1. **Rango de Fechas:**

   - Permite seleccionar un rango de tiempo definido por el usuario, indicando fechas de inicio y fin.
   - Uso:
     - Selecciona la fecha inicial y final en los calendarios.
     - Los registros mostrados corresponderán únicamente a ese rango de tiempo.

2. **Tipo de Acción:**

   - Ofrece un menú desplegable con las siguientes opciones:
     - **Todos los tipos:** Muestra todas las acciones registradas.
     - **Lanzamiento:** Filtra únicamente los registros relacionados con el despliegue de contenedores.
     - **Detención:** Filtra las acciones que implican detener contenedores.
   - Uso:
     - Selecciona la acción deseada en el menú desplegable para mostrar los registros correspondientes.

3. **Búsqueda Combinada:**

   - Es posible combinar el rango de fechas y el tipo de acción para una búsqueda más específica y detallada.

Estos filtros proporcionan flexibilidad para analizar los despliegues y acciones según las necesidades del usuario, reduciendo la cantidad de registros visualizados a los más relevantes.

## Historial de Despliegues

El historial de despliegues permite rastrear las acciones realizadas sobre los contenedores. Incluye:

### Elementos Clave

1. **Fecha y Hora:**

   - Cada despliegue está registrado con un sello de tiempo para identificar cuándo ocurrió.

2. **Acción Realizada:**

   - Puede ser "Lanzamiento" o "Detención".

3. **Resultado:**

   - **Éxito:**
     - Indica que los contenedores fueron desplegados correctamente.
     - Ejemplo: "Contenedores desplegados: nombre\_del\_contenedor".
   - **Error:**
     - Indica que hubo problemas durante el despliegue.
     - Ejemplo: "No se pudieron desplegar contenedores".

4. **Resumen del Despliegue:**

   - Incluye detalles sobre el estado final del contenedor y tareas ejecutadas, como:
     - "Contenedores iniciados correctamente."
     - "Puertos del cliente y servidor."

## Logs Completos

Debajo de cada interacción registrada en el historial, existe un botón denominado **Logs Completos**. Al pulsarlo, se muestra el registro detallado del despliegue, incluyendo todos los pasos realizados y cualquier error ocurrido. Esto es particularmente útil para iIdentificar el origen de fallos técnicos y resolverlos con base en la información específica del log.

### Información Incluida en los Logs Completos

- **Tareas Ejecutadas:** Registra cada paso del despliegue, como la construcción de imágenes, la instalación de dependencias, y la inicialización del contenedor.
- **Mensajes de Error:** Detalla cualquier problema detectado, incluyendo mensajes técnicos específicos.
- **Detalles Técnicos:** Información como el tamaño del contexto de construcción, comandos ejecutados, y contenedores temporales eliminados.

### Ejemplo de Log Completo

```
Sending build context to Docker daemon  3.215MB
Step 1/15 : FROM node:18-alpine as builder
 ---> 870e98b7d793
Step 2/15 : WORKDIR /app
 ---> Using cache
 ---> 3bb9d9c7a168
Step 3/15 : COPY package*.json ./
 ---> Using cache
 ---> acb611a869d6
Step 4/15 : RUN npm install
 ---> Using cache
 ---> 6def632d712f
Step 5/15 : COPY . .
 ---> Using cache
 ---> 994e61f9b403
Step 6/15 : RUN rm -rf server
 ---> Running in ebd203061f45
 ---> Removed intermediate container ebd203061f45
 ---> b0542a043a3c
Step 7/15 : RUN npm run build
 ---> Running in ac2c77443aac
```

El botón **Ocultar Logs Completos** permite regresar a la vista inicial con solo el resumen mostrado.

