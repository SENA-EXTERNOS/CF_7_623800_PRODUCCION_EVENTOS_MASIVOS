<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center
      .col-lg-7(data-aos="fade-right")
        .cajon.color-acento-botones.p-4
          p Un organizador de eventos debe crear una experiencia única y completa en cada encuentro, esto incluye proporcionar, de acuerdo con el tipo de evento, todos los servicios necesarios para el desarrollo de las actividades, desde el lugar o sede, alimentación, logística, equipos audiovisuales, recreación, transporte, así como los servicios complementarios y de alojamiento proporcionados por las empresas hoteleras y turísticas. Es por esto que en este componente formativo aprenderá la importancia y el proceso para coordinar el hospedaje, como uno de los puntos iniciales de la hospitalidad; conocerá los tipos y clases de alojamientos que existen y las técnicas para administrar la ocupación hotelera, así como temas relacionados al montaje y la prestación del servicio de alimentos y bebidas, y algunos conceptos básicos del transporte, en beneficio de los eventos a realizar. 
          b Lo invitamos a ver el siguiente video para que amplíe su visión sobre lo que será la temática abordada durante esta experiencia de aprendizaje. Le deseamos éxitos en su desarrollo.
      .col-lg-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/introcuccion/img1.svg', alt='').img1-intro           

    .row.mt-5(data-aos="fade-zoom")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


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
