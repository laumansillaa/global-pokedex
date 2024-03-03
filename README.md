# Global Pokédex

A continuación encontrará el proceso de instalación, e información referida a este proyecto.

## Tecnologias

- Vue
- Vite
- Vue-router
- Vuex
- Axios
- CSS Modules

## Instalación

#### Instalar dependencias con el siguiente comando

```
    npm install
```

### Iniciar el proyecto de manera local

```
    npm run dev
```

### ¿Desea compilar el proyecto para producción? 
-   Recuerde que es necesario tener previamente instaladas las dependencias.
```
    npm run build
```

### Iniciar la preview

```
    npm run preview
```

## El proyecto

El proyecto como se mencionó anteriormente esta contruido con Vue y Vite. En `/router` encontraremos que el proyecto consta de dos rutas, una landing inicial, y la vista de home. Tenemos un documento `navigation.js`, donde podemos incluir nuestras rutas, para una mejor administración. Si en un futuro nuestro proyecto crece, esto nos va a beneficiar mucho en caso de querer hacer cambios de rutas, si tuviéramos necesidad de hacerlos. La idea es hacer cambios en un lugar, y que estos se inyecten en toda la raíz del proyecto.

Vamos a necesitar datos para mostrarle al cliente ¿no?. Para esto, tenemos una carpeta `/services`, que incluye nuestra instancia de axios, la cual usaremos para realizar las peticiones. Podemos generar una única configuración, para todas nuestras actions. En `pokédex-service` vamos a ver que está armado en un objeto, si bien actualmente tenemos peticiones a una misma api, en un futuro podríamos querer incluir otro tipo de personajes, lo cual podría causar confusiones a la hora de declarar nuevos services. Por ejemplo, si quisiéramos agregar personajes de Los Simpsons, podemos agregar en un nuevo documento con un objeto `simpsonsApi`, que va a contener todos nuestros métodos. De esta forma, resultará más claro distinguir las distintas API's.

Toda la información, será gestionada en `/store`. Donde usaremos las distintas funcionalidades que nos proporciona Vuex, para un ágil manejo de los datos que requerimos en la web. También tenemos una carpeta `adapter`. Imaginemos que en un futuro, nuestros personajes modifican algún nombre de una propiedad, esto hará que tengamos que ir por todo nuestro proyecto cambiando este valor. Con un adapter, solo tenemos que hacer el cambio en un documento.

Todas las vistas del proyecto están incluidas en `/views`, acá podremos encontrar nuestra landing inicial, y el Home. Siguiendo esta estructura, será más fácil acceder a las distintas vistas, a medida que nuestro proyecto vaya escalando. 

En `/components` se encuentran los distintos elementos que iremos requiriendo para construir nuestra web. Carpeta para los Botones, Inputs, Cards, Loaders, etc. La idea es hacer componentes que puedan ser reutilizados en todo el sitio, ahorrando que tengan que ser construidos nuevamente. ¿Queremos modificar el estilo de nuestros inputs? La idea es que podamos modificarlos desde un solo lugar. Hacer componentes reutilizables a veces es un desafío, pero personalmente me gusta dedicarle tiempo a construir mis propios elementos, y no tener que depender de librerías externas.

Una carpeta `utils`, donde podemos incluir funciones que vayamos a necesitar, y que puedan ser reutilizadas a futuro. 

La carpeta `styles`, tiene una configuración base para nuestro proyecto, incluyendo variables css para gestionar de manera más optima por ejemplo, los colores.



### Nota
- Adicionalmente usamos el módulo UUID, para almacenar valores con un ID único. No soy partidario de instalar muchas dependencias en un mismo proyecto, pero este módulo es bastante pequeño y no va a afectar el bundle del proyecto.
