# Transformacion.com — Electrónica & Sistemas

Sitio web de **Electrónica & Sistemas**, mi negocio de servicio técnico en Cartagena, Colombia. Es una página de una sola vista orientada a atraer clientes que buscan reparación de televisores (Samsung, LG y otras marcas) y soporte técnico de computadores, con contacto directo por WhatsApp.

**Para quién:** personas y hogares en Cartagena que necesitan un técnico a domicilio.

## Qué incluye

- Página principal con servicios, proceso de atención, galería, preguntas frecuentes y llamado a la acción
- Botón flotante de WhatsApp
- Página de términos y condiciones (`terms.html` y PDF)
- SEO: etiquetas Open Graph y Twitter para vista previa al compartir el enlace, `sitemap.xml`, `robots.txt` y `site.webmanifest`
- Video propio en el encabezado

## Stack

HTML5, CSS3 y JavaScript sin frameworks (sin paso de compilación). Tipografía Inter (Google Fonts) e íconos Font Awesome por CDN. Desplegado como sitio estático en **Vercel** (`vercel.json` con `cleanUrls`).

## Estructura

```
index.html, styles.css, script.js   página principal
terms.html, terminos_condiciones.pdf términos y condiciones
assets/img/, video/                  imágenes y video del encabezado
sitemap.xml, robots.txt, site.webmanifest
```

## Estado actual

Publicado y en mantenimiento ligero (ajustes de contenido y SEO). La URL canónica configurada en las etiquetas del sitio es `https://transformacion-com.vercel.app/`; si se cambia el dominio, hay que actualizar `canonical`, `og:url`, `og:image`, `robots.txt` y `sitemap.xml`.

## Cómo trabajo en este proyecto

Soy estudiante de Ingeniería de Sistemas y dueño de **Electrónica & Sistemas**, con más de 25 años de experiencia práctica en soporte técnico y reparación de hardware y software. Dirijo y creo mis proyectos apoyándome en asistentes de IA para el desarrollo: yo defino los requerimientos, reviso cada cambio, pruebo el resultado y tomo las decisiones técnicas y de negocio; la IA escribe la mayor parte del código bajo esa dirección, y no lo escribo línea por línea a mano. En este sitio, el contenido (servicios y proceso de atención) sale de mi experiencia real en el oficio.

## Contacto

César Augusto Pestana Sánchez — Cartagena, Colombia.
