<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.texto-blanco
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-stretch
      .col-lg-7(data-aos="fade-right").cajon.color-acento-botones.p-4.j
        p Apreciado aprendiz, bienvenido a este componente formativo, donde aprenderá a crear una experiencia única y completa para un evento, en el cual se debe tener en cuenta la importancia y el proceso para coordinar el hospedaje, como uno de los puntos iniciales de la hospitalidad, conocer los tipos y clases de alojamientos que existen y las técnicas para administrar la ocupación hotelera; además, se abordarán temas relacionados al montaje y la prestación del servicio de alimentos y bebidas, así como algunos conceptos básicos del transporte, en beneficio de los eventos a realizar.<br><br>En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo. 
      .col-lg-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/introcuccion/img1.svg', alt='').img1-intro           

    .row.mt-5(data-aos="fade-zoom")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/SRgFf52nBWc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
