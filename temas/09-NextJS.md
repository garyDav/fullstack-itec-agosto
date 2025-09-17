# NEXT.js

#### Recomendaciones

* [Introducción a React](https://react.dev/blog/2023/03/16/introducing-react-dev)

* [Youtube - React + Typescript](https://www.youtube.com/watch?v=dNxaP_BTtwQ&list=PLCKuOXG0bPi26-eawizqyLOgM7j66H_4M)

* [Next.js Docs](https://nextjs.org/docs)

#### Configurar Ubuntu (Opcional)

Para seguir este tutorial en caso de trabajar con Ubuntu, necesitará lo siguiente:

- Un servidor de desarrollo con Ubuntu 22.04, un usuario no root con privilegios `sudo` y un firewall activo. Consulte esta [guía de configuración inicial para servidores](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-22-04).

- Docker instalado en su servidor, siguiendo los pasos 1 y 2 de [How To Install and Use Docker on Ubuntu 22.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04).

- Docker Compose instalado en su servidor conforme el paso 1 de [How To Install and Use Docker Compose on Ubuntu 22.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-22-04).

- Una Alternativa a S.O. Linux se utilizará WSL2 con Windows 11 Pro, es lo que utilizaré en el curso.

#### Conocimientos previos

- JasaScript Básico o Intermedio (ECMAScript 6).

- Manejo de la terminal Básico

---

## Sección 1: Introducción

En esta sección, se revisan distintos puntos de como utilizar la plataforma del curso en sí, rescataremos las instalaciones necesarias:

#### Instalaciones Recomendadas

##### Instalaciones recomendadas - Curso de Next.js

##### Instalaciones Necesarias

- [Visual Studio Code](https://code.visualstudio.com/)

- [Postman](https://www.postman.com/downloads/)

- [Mongo Compass](https://www.mongodb.com/try/download/compass)

- [Git](https://git-scm.com/)

```
git config --global user.name "Tu nombre"
git config --global user.email "Tu correo"
```

- [Node](https://nodejs.org/es/)

```opcional - Yarn
npm install --global yarn
```

- [Google Chrome](https://www.google.com.mx/intl/es-419/chrome/?brand=CHBD&gclid=Cj0KCQiAtrnuBRDXARIsABiN-7AAMm13Ae3KDIib46Laxfe6tzD_w4yvDdpq5XsPw1eNlOkZ_0-3x3IaAvLEEALw_wcB&gclsrc=aw.ds)

- [Docker Desktop](https://www.docker.com/get-started)

Descargar imagen de Mongo 5.0.0

```
docker pull mongo:5.0.0
```

## Introducción a Next.js

**Next.js**, es un Framework poderoso para servir contenido estático y generado desde el lado del servidor, todo lo que puedes hacer en React.js lo puedes hacer en Next.js.

Al ser un marco de trabajo hay ciertos lineamientos, ciertas herramientas, que ya vienen al abrirlo de la caja, es bastante poderoso.

En pocas palabras, puedes hacer todo o que sabes en **React** + Mejoras de rendimiento, SEO, separación de código, router, dependencias, y más.

En el sitio oficial de React, menciona que si ustedes quieren incluir aplicaciones renderizadas del lado del servidor, recomiendan que ustedes prueben Next.js, también hay otro popular que es Gatsby, si quieren crear contenido estático, por ejemplo páginas web estáticas, pero Next.js también ofrece ese servicio, de hecho Next.js y Gatsby son cierta competencia una entre otra.

Otro punto importante que se mira desde la documentación oficial de React.js es que se asume que nuestro entorno de trabajo, o lo que tenemos en el backend por ejemplo es Node.js, esto no significa que necesariamente tienen que utilizar Node.js en el Backend para realizar nuestras API, pueden utilizar lo que guste, péro traten de dar una oportulidad a Node.js, pueden hacer todo con Node.js acceder al FileSystem del Servidor, etc. es súmamente poderoso.

Next.js cambia el paradigma de los **SPA** (Single Page Application), y te da opciones para trabajar tus aplicaciones. Por ejemplo pueden tener dos características principales como ser el **_Server-Side Rendering_** y/o **_Generación Estática_**. Al mismo tiempo, Next.js ofrece:

- **SSR:** Server-side rendering.
- **SSG:** Static-site generation.
- **CSR:** Client Side Rendering.
- **ISR:** Incremental Static Regeneration.
- **DR:** Dynamic Routing.

#### Un SPA funciona así

1. El usuario entra a una [URL](#) el cual inicial la primera solicitud, lo llamamos (request).

2. Luego el servidor responde con un (reponse).

3. Ahí es donde el cliente recibe esa solicitud, ésta tiene la información de diferentes dependencias que vamos a ocupar, los estilos hay que cargarlos de este URL, etc. Usualmente viene un documento **HTML** con todas sus referencias, que son necesarias para mostrar la aplicacion como nosotros queremos.

4. Si estamos trabajando con un SPA, todo el sitio web o la mayor parte de él. La computadora cliente (Navegador) interpreta la respuesta y aquí viene nuestro contenido de React.js, React empieza a generar la aplicación, empieza a usar el `useState`, los `useEffect`, los `useLayoutEffect`, el `useReducer`, crea el `context`, ahí empieza a generar toda esa parte, esto no es malo es sumamente poderos y útil que podamos crear **SPA**. Especialmente si son aplicaciones que están en la intranet, aplicaciones que no importa que sean **SEO friendly**.

**¿Qué pasaría si una persona (Cliente) sólo quiere ver el `About` de nuestro sitio web?**, entonces cargaría absolumamente todo, cargaría completamente toda la aplicación y eso implica módulos que posiblemente nunca usará, pero quizá lo peor de todo es que el **SPA no** es **SEO friendly**, los SPA tienen SEO, pero sólo en una pantalla, por que es la única página que se está generando, se puede hacer difierentes alteraciones, y el equipo de Google dijo que pronto los bots puedan renderizar la aplicación en memoria para así analizar meta tags y otra información, por el momento los SPA son conciderados no SEO friendly.

**¿Y qué es eso del SEO (Search Engine Optimization)?**, esto ayuda mucho a los bots que rondan el internet, analizando nuestros sitios web y ver que enlaces tienen, van siguiendo cada uno de esos enlaces y lo indexan todo, para cuando buscamos en google rápidamente tengamos resultado, esto es sumamente importante para algunos tipos de aplicaciones, si son aplicaciones que estarán en la intranet posiblemente el SEO no lo ocupemos jamás, pero hay ciertas aplicaciones que no pueden ser concebidas si no son SEO friendly.

**¿Por que es tan importante el SEO?**, es el impacto que esa aplicación tendrá en el internet. es lo que tenemos que ofrecer a los buscadores mas importantes del mundo, que es lo que hace su aplicación, en determinado URL.

### Primer proyecto de NextJS

Pueden consultar en <https://nextjs.org/docs>

```fish
pnpm create next-app initial-demo
mv initial-demo 01-initial-demo
cd 01-initial-demo
pnpm dev # En caso de error realizar lo siguiente
pnpm add -D autoprefixer
# --- Error:
touch postcss.config.json
```

```json
{
  "plugins": ["autoprefixer"]
}
```

```fish
# Fin Error ---
Ctrl + c # Cancelen la terminal y vuelvan a iniciar
pnpm dev # ingresar a localhost:3000
```

Dentro de `./pages/`, es obligatorio que las páginas sean la exportación por defecto, y que los archivos estén en minúsculas.
Si el archivo es `index.jsx` la URL buscará un `index.html`, si el arhivo `jsx` tiene otro nombre como: `home.jsx` la URL reconocerá `localhost:3000/home`.

Así como definamos los `path's` es como usaremos en la navegación, y creando las rutas de manera implícita basada en **fileSystem**.

Al ejecutar `pnpm dev` ó `pnpm build`, genera unos archivos en la carpeta `.next`.

El archivo `./pages/_app.js` es un archivo común que comparte todas las páginas, ideal para incluir `navbar` y/o `footer`.

### Explicación de archivos y directorios

```
.
├── README.md
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
└── tsconfig.json

3 directories, 17 files
```

**`tsconfig.json:`** Es el archivo de compilación, de como queremos que el compilador de TypeScript trabaje, como viene el archivo por defecto, no es necesario realizar cambios.

**`tailwind.config.js:`** luego tenemos en archivo de configuración de Tailwind CSS.

**`Readme.md:`** Podemos establecer la descripción de la aplicación, añadiendo procedimientos de como levantar y como construir su aplicación.

**`postcss.config.js:`** Como establecimos trabajar con Tailwind CSS, es necesario este archivo, en este archivo no tiene nada que ver Next.js.

**`package.json:`** Básicamente es el archivo de configuración de nuestro proyecto, aquí se encuentran las dependencias, scripts, y configuraciones de nuestro proyecto, y alguna información extra de nuestro proyecto como el nombre, la versión, privada si no queremos que se suba a NPM.

**`package-lock.json:`** Nó deberían de modificarlo, es un archivo que se genera automáticamente, y es el que se encarga de las versiones exactas de las dependencias que se instalan.

**`next.config.js:`** Son configuaraciones de como funciona y como se crea nuestro proyecto de Next.

**`next-env.d.ts:`** Si los archivos terminan con `d.ts` son archivos de definición de TypeScript, son archivos que no se compilan, pero que le dicen a TypeScript como se comportan ciertas librerías, este archivo no se modifica.

**`.gitignore:`** No tiene nada que ver Next, pero como nuestro proyecto va a seguir un control de versiones basado en git, el gitignore son todos los archivos y directorios y extensiones de archivos que nosotros no queremos que se le de seguimiento.

**`eslint.config.mjs:`** Es el archivo de configuración de ESLint, que es una herramienta que nos ayuda a mantener un código limpio y ordenado, y que siga ciertas reglas de estilo.

**`public/:`** Es el directorio donde podremos subir contenido estático, que no queremos que sea procesado de ninguna manera, solo queremos que se suba, como imágenes, archivos, etc.

**`node_modules/:`** Tiene todos los módulos que tengamos instalados en `dependencies` y `devDependencies`, en estos módulos pueden tener mas dependencias implísitas dentro del mismo, no realizaremos ninguna modificación, simplemente los añadimos o removemos a partir de los comando de `npm`, `yarn`, `pnpm`.

**`app/:`** Aquí es donde pasaremos la mayor parte del tiempo, es donde vamos a tener nuestros componentes, nuestros estilos, nuestras páginas, nuestros layouts, etc. Dentro de esta carpeta tenemos un `global.css` como su nombre indica es el estilo global de la aplicación, un `favicon.ico` que es el ícono que se visualiza en la pestaña del navegador, un `layout.tsx` que es el layout de nuestra aplicación, y un `page.tsx` que es la página principal de nuestra aplicación.

Eso es básicamente todo lo que tenemos, realmente lo que es propio de Next es `app/`, `public/`, y el archivo de configuración de Next `next.config.js`, todo lo demás son archivos de configuración adicionales, que nos ayudarán a escribir un mejor código, o a las dependencias que dijimos que queríamos.

Luego tenemos la carpeta `.next/` tampoco le daremos seguimiento a esta carpeta, es una carpeta que se genera automáticamente, y es donde se guarda todo el código compilado de nuestra aplicación, es decir, todo el código que se va a subir al servidor, y que se va a ejecutar en el navegador.

### Rutas adicionales

Las rutas en Next v13 no son solo archivos, sino que también son directorios, y esto es gracias a la nueva característica de Next que se llama Dynamic Routing, que nos permite tener rutas dinámicas, y que se generan en tiempo de compilación.

Ejemplo: deberemos crear un directorio como `app/about/page.tsx` y ya tendremos una ruta `/about` en nuestra aplicación.

Por defecto todo lo que está dentro de `app/*` serán generados del lado del servidor (Server Components).

### Convertir JSX a TSX

Pueden consultar el proyecto `02-initial-demo`.

### Desplegando nuestra aplicación

**Desplegar la aplicación en Local.**

```fish
cd 02-initial-demo
pnpm install
yarn build
yarn start
```

**Desplegar la aplicación en Vercel.**

- Crear una cuenta con GitHub en [Vercel](https://vercel.com).

- Crear un repositorio en GitHub (en mi caso `next-vercel`)

> Si ya tenías un repositorio en la carpeta `02-initial-demo`, o sea, hiciste `git init` y `git remote add origin <repo>` en dicha carpeta.
> Entonces realizar lo siguiente:

```fish
git add .
git commit -m "Pre-deployment Vercel"
git remote add upstream git@github.com:<user>/next-vercel.git # upstream solo es un nombre
git push upstream main
git remote -v # Podras ver los repositorios ligados a tu directorio
```

> Si el `git init` y `git remote add origin <repo>` está en un directorio superior como `curso-next/02-initial-demo`.
> Entonces realizar lo siguiente:

```fish
# Estando en curso-next
cd 02-initial-demo
git init
git add .
git commit -m "Pre-deployment Vercel"
git remote add origin git@github.com:<user>/next-vercel.git
git push -u origin main
```

- Crear un nuevo proyecto que Vercel y añadir nuestro repositorio y dejamos que compile y termine el despliegue.

- Ingresamos a nuestra página ya desplegada y eso es todo les creará una dirección parecida a esta `https://next-vercel-zeta.vercel.app/`

**Desplegar la aplicación en Docker.**

- Revisar: `02-initial-demo/.dockerignore`

- Revisar: `02-initial-demo/Dockerfile`

```fish
# Ejecutar
docker build -t nextjs-initial .
docker run --name=next-app -p 3000:3000 nextjs-initial
```

## Primer Proyecto (Actualizado)

### Instalación

```bash
npx create-next-app first-steps
```

![Instalación Next](./img/2.1-instalacion-next.png)

