# 🌿 HuilaGo

Bienvenido a **HuilaGo**, una aplicación web enfocada en descubrir y explorar el departamento del **Huila, Colombia**.

HuilaGo reúne en un mismo espacio **alojamientos, destinos turísticos y experiencias**, permitiendo a los usuarios explorar diferentes lugares del departamento, consultar información de alojamientos y guardar sus lugares favoritos.

El proyecto nace con el objetivo de crear una experiencia turística moderna, intuitiva y responsive que facilite el descubrimiento del Huila y sus principales atractivos.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Backend-FFCA28?style=for-the-badge\&logo=firebase\&logoColor=black)
![Cloudinary](https://img.shields.io/badge/Cloudinary-Images-3448C5?style=for-the-badge\&logo=cloudinary\&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Design-A4C957?style=for-the-badge)

---

## 👀 Vista previa

🌐 **Sitio web:**
https://ospinafelipedev.github.io/huila-go/

---

## 🌎 Acerca del Proyecto

**HuilaGo** es una aplicación web desarrollada para facilitar la exploración turística del departamento del Huila.

La plataforma permite descubrir diferentes destinos y alojamientos, consultar información detallada y guardar lugares favoritos.

El proyecto está diseñado pensando tanto en usuarios que buscan **lugares para visitar** como en personas que buscan **opciones de alojamiento** durante su viaje.

### 🗺️ Destinos

Los usuarios pueden explorar diferentes lugares turísticos del Huila, conocer su ubicación, descripción e información relevante.

Entre los destinos incluidos se encuentran:

* 🌵 Desierto de la Tatacoa
* 🗿 Parque Arqueológico de San Agustín
* 🌊 Estrecho del Magdalena
* 💧 Salto de Bordones
* 💦 Salto del Mortiño
* 🌊 Represa de Betania
* 🖐️ La Mano del Gigante
* ⛰️ Miradores y paisajes del Huila

### 🏨 Alojamientos

HuilaGo también presenta diferentes opciones de alojamiento organizadas por municipios, incluyendo hoteles y otros tipos de hospedaje.

Los usuarios pueden consultar información como:

* Nombre del alojamiento
* Ubicación
* Dirección
* Precio
* Tipo de alojamiento
* Servicios disponibles
* Información de contacto
* Galería de imágenes

---

## ✨ Características Principales

* 🏨 Exploración de alojamientos
* 🗺️ Exploración de destinos turísticos
* 🔎 Búsqueda de alojamientos
* 🎯 Filtros por destino y tipo de alojamiento
* ❤️ Sistema de favoritos
* 👤 Registro e inicio de sesión
* 🔐 Rutas protegidas para usuarios autenticados
* 🌎 Soporte de español e inglés
* 🌓 Modo claro y oscuro
* 🖼️ Galerías de imágenes
* 🔍 Visualización de imágenes en lightbox
* 📱 Diseño responsive
* ⚡ Carga mediante componentes lazy
* 🧭 Navegación mediante React Router
* ☁️ Gestión de imágenes de perfil mediante Cloudinary
* 🔥 Autenticación y almacenamiento de favoritos mediante Firebase

---

## 📱 Diseño Responsive

HuilaGo está diseñado para adaptarse a diferentes dispositivos y tamaños de pantalla:

* 📱 Smartphones
* 📲 Tablets
* 💻 Laptops
* 🖥️ Pantallas de escritorio

La interfaz se adapta para mantener una navegación cómoda y una presentación clara de los contenidos independientemente del dispositivo utilizado.

---

## 🛠️ Tecnologías Utilizadas

### Frontend

* **React 19**
* **TypeScript**
* **Vite**
* **React Router**
* **CSS3**
* **HTML5**

### Backend / Servicios

* **Firebase Authentication**
* **Firebase Firestore**
* **Cloudinary**

### Herramientas

* **Git**
* **GitHub**
* **GitHub Pages**
* **GitHub Actions**
* **Visual Studio Code**
* **npm**

---

## 🏗️ Arquitectura del Proyecto

El proyecto está organizado utilizando una estructura modular para facilitar el mantenimiento y crecimiento de la aplicación.

```text
src/
├── components/
│   ├── destinations/
│   ├── properties/
│   ├── search/
│   └── ...
│
├── context/
│   ├── AuthContext
│   ├── LanguageContext
│   └── ThemeContext
│
├── data/
│   ├── destinations.ts
│   └── properties.ts
│
├── pages/
│   ├── HomePage
│   ├── SearchPage
│   ├── DestinationsPage
│   ├── DestinationDetailPage
│   ├── PropertyDetailPage
│   ├── FavoritesPage
│   ├── ProfilePage
│   └── ...
│
├── router/
│   └── router.tsx
│
├── services/
│   └── favorites.ts
│
├── types/
│
└── utils/
```

La separación por componentes, páginas, servicios, datos, contexto y utilidades permite mantener una estructura organizada y escalable.

---

## 🔐 Autenticación y Favoritos

HuilaGo utiliza **Firebase Authentication** para gestionar las cuentas de usuario.

Los usuarios registrados pueden:

* Crear una cuenta
* Iniciar sesión
* Cerrar sesión
* Acceder a su perfil
* Guardar alojamientos como favoritos
* Guardar destinos turísticos como favoritos
* Gestionar sus favoritos

Las rutas que requieren autenticación están protegidas mediante componentes de control de acceso.

---

## 🌐 Internacionalización

La aplicación cuenta con soporte para:

🇨🇴 **Español**

🇺🇸 **Inglés**

El sistema de idiomas permite cambiar dinámicamente los textos de navegación, destinos, alojamientos y diferentes elementos de la interfaz.

---

## 🌓 Temas

HuilaGo incorpora un sistema de temas que permite alternar entre:

* ☀️ Modo claro
* 🌙 Modo oscuro

Los estilos utilizan variables CSS para mantener una identidad visual consistente en toda la aplicación.

---

## ☁️ Gestión de Imágenes

Las imágenes de perfil de usuario se gestionan mediante **Cloudinary**.

Para las imágenes de alojamientos y destinos se utiliza la carpeta pública del proyecto, permitiendo servir los recursos correctamente tanto en desarrollo como en el despliegue mediante GitHub Pages.

---

## 🚀 Despliegue

El proyecto está desplegado utilizando **GitHub Pages**.

Cada cambio realizado en la rama `main` puede ser construido y desplegado automáticamente mediante **GitHub Actions**.

### Flujo de despliegue

```text
Git Push
   ↓
GitHub Actions
   ↓
npm ci
   ↓
npm run build
   ↓
Generación de /dist
   ↓
GitHub Pages
```

### 🌐 Aplicación

https://ospinafelipedev.github.io/huila-go/

---

## 🎨 Enfoque de Diseño

El diseño de HuilaGo busca combinar:

* 🌿 Identidad visual relacionada con la naturaleza
* 🎯 Navegación sencilla
* 📐 Jerarquía visual clara
* 🖼️ Uso destacado de imágenes
* 📱 Diseño responsive
* ✨ Microinteracciones
* ♿ Accesibilidad
* ⚡ Buena experiencia de usuario

La interfaz utiliza una paleta inspirada en la naturaleza del Huila, con tonos verdes y elementos visuales que buscan transmitir turismo, naturaleza y tranquilidad.

---

## 🎯 Objetivos del Proyecto

HuilaGo fue desarrollado con los siguientes objetivos:

* Promover el turismo en el departamento del Huila.
* Facilitar el descubrimiento de destinos turísticos.
* Centralizar información de alojamientos.
* Practicar y aplicar tecnologías modernas de desarrollo web.
* Crear una aplicación escalable y mantenible.
* Desarrollar una experiencia de usuario moderna y responsive.

---

## 📚 Aprendizajes

Durante el desarrollo del proyecto se trabajaron conceptos relacionados con:

* Desarrollo de aplicaciones con React.
* TypeScript.
* Componentización.
* React Router.
* Rutas dinámicas.
* Rutas protegidas.
* Firebase Authentication.
* Firebase Firestore.
* Manejo de estado mediante Context API.
* Internacionalización.
* Diseño responsive.
* Gestión de imágenes.
* Git y GitHub.
* Despliegue mediante GitHub Pages.
* Automatización con GitHub Actions.

---

## 📬 Contacto

Si deseas conocer más sobre el proyecto, colaborar o ponerte en contacto conmigo:

👨‍💻 **Andrés Felipe Cubillos Ospina**

🌐 **Portfolio:**
https://ospinafelipedev.github.io/portafolio-moderno/

💻 **GitHub:**
https://github.com/OspinaFelipeDev

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**.

Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## 🌿 HuilaGo

**Descubre Huila. Vive la experiencia.**

> Un proyecto web creado para explorar, descubrir y disfrutar los destinos del departamento del Huila, Colombia.
