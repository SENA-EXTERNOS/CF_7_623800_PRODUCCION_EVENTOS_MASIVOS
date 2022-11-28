<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.texto-blanco 2
      h1 Transporte de pasajeros e importancia

    .row.justify-content-center.my-5(data-aos="flip-down")
      .bloque-texto-g.color-primario.p-4
        .bloque-texto-g2__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1.png')})`}"
        )
        .bloque-texto-g2__texto.p-3
          p El transporte para un organizador de eventos es otro servicio importante, pues es el que permite realizar los traslados de los asistentes de un lugar a otro o de una ciudad a otra, con el fin de acceder a las diferentes actividades del evento.
          p.mt-3 El transporte en el turismo básicamente tiene dos funciones. La primera se refiere al transporte como servicio de tránsito, es decir, visto como mecanismo utilitario que permite el desplazamiento de personas desde una región de origen a una región destino. La segunda, como actividad netamente turística, cuando se utiliza para acercar a los usuarios a aquellas atracciones o actividades programadas en el evento. El organizador debe conocer qué tipo de transporte requiere y cuántas personas necesita movilizar, con el fin de analizar, evaluar y contratar la mejor opción posible.

    separador

    #t_2_1    
    .titulo-segundo.color-acento-contenido
      h2 2.1  Modalidades

    .row.justify-content-center.my-5
      .col-lg-10
        .row
          .col-lg-6(data-aos="fade-up-right")
            figure
              img(src='@/assets/curso/temas/tema2/img2.svg', alt='')            
          .col-lg-6(data-aos="fade-up-left")
            p.mt-4 Las opciones de transporte son variadas debido a que podemos encontrar transporte aéreo, fluvial, marítimo, terrestre, con diferentes tipologías en cada una de ellas.  Sin embargo, se explicarán dos clasificaciones importantes, independientemente del medio en el cual se desarrolle. 

    .row.justify-content-center.my-5
      .col-lg-10
        p Estas clasificaciones son:

    TabsC.color-primario
      .tarjeta--morada2.p-lg-5.p-3(titulo="Transporte comercial")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img3.svg', alt='')

          .col-md-6
            p.texto-blanco.mt-4 Son los servicios de transporte público que movilizan personas que viajan de manera temporal o transitoria; pueden ser urbanos, de tránsito intermunicipal o departamental, e internacional. En esta categoría encontramos taxis, buses, trenes, vuelos de avión, entre otros. Sus horarios y tarifas están determinados por la empresa.

      .tarjeta--morada2.p-lg-5.p-3(titulo="Transporte turístico")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img4.svg', alt='')

          .col-md-6
            p.texto-blanco.mt-5 Se encargan de movilizar personas con fines turísticos, de recreación y ocio, por tanto, las tarifas y horarios dependen de la organización de la actividad. Entre estos encontramos buses para excursiones o traslados especiales, taxis turísticos, vuelo chárter, cruceros, etc.

    .row.justify-content-center.my-5
      .col-lg-10(data-aos="flip-up")
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema2/img5.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Anexo 3 TRANSPORTE
                  p Para complementar las modalidades de transporte, por favor descargar y estudiar el documento
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexo-3_modalidades_de_transporte.docx')" target="_blank")
                    span.texto-blanco Descargar
                    i.fas.fa-file-download

    .row.justify-content-center.my-5
      .col-lg-10
        .row.justify-content-center
          .col-6.col-lg-3.mb-3(data-aos="fade-up-right")
            figure
              img(src='@/assets/curso/temas/tema2/img6.svg', alt='')
          .col-lg-9(data-aos="fade-up-left")
            .bloque-texto-b3.color-secundario.p-4
              .bloque-texto-b__texto
                p El organizador debe conocer la necesidad e información de los traslados de los asistentes y garantizar su movilidad, dependiendo el tipo de evento y su responsabilidad frente a este servicio. En función de la actividad a desarrollar, se puede requerir desde un auto clásico para una boda, el traslado de una persona del aeropuerto al hotel o viceversa, movilizar a cientos de personas en buses de un punto de encuentro al lugar del evento, trasladar participantes, equipos, invitados especiales y demás, en avión entre ciudades o países, entre otros.

    .row.justify-content-center
      .col-lg-10
        .cajon.color-acento-botones.p-3
          p Organizar las necesidades específicas de transporte es otra responsabilidad del organizador de eventos, para ello se hace indispensable que cree su propio formato de transporte. A continuación, se presenta un modelo de formato que servirá para dicho propósito:

    .row.justify-content-center.my-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 4
          p(data-aos="fade-down").mb-0 #[i Formato control transporte.]

    .row.justify-content-center.my-5
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema2/img7.svg', alt='')
          figcaption.mt-3 Elaboración experto temático

    separador

    #t_2_2 
    .titulo-segundo.color-acento-contenido
      h2 2.2  Normativa y documentación requerida

    .row.justify-content-center.my-5
      .col-lg-10(data-aos="flip-down")
        .tarjeta--amarilla2.p-3
          .row.justify-content-center
            .col-8.col-lg-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema2/img8.svg', alt='').img8-tm2      
            .col-lg-10
              p Cada país cuenta con una normatividad que deben cumplir las empresas dedicadas al transporte, y por tanto, contar con los documentos requeridos para poder operar y dar el respaldo a los usuarios. En casi todos los escenarios, los sistemas de transporte incluyen seguros para sus usuarios y pólizas de responsabilidad que cubren cualquier eventualidad presentada. Igualmente, se debe cumplir con los impuestos; en Colombia, el transporte terrestre debe contar con el SOAT, que demuestra la responsabilidad por el buen mantenimiento de los diferentes vehículos.

    .row.justify-content-center.my-5
      .col-lg-6(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img9.svg', alt='')        
      .col-lg-6(data-aos="fade-left")
        .tarjeta--gris2.p-3
          p.texto-blanco En Colombia, para contratar servicios de transporte especializado, según el Ministerio de Transporte se deben tener en cuenta los siguientes documentos:
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right.color-vineta1
            | Licencia de tránsito y/o tarjeta de operación, vigente
          li 
            i.fas.fa-angle-right.color-vineta1
            | Certificado de inscripción en el Registro Nacional de Conductores de Transporte Especial del RUNT. 
          li 
            i.fas.fa-angle-right.color-vineta1
            | Certificado de revisión técnico-mecánica y de gases, vigente (después de 2 años para vehículos nuevos).
          li 
            i.fas.fa-angle-right.color-vineta1
            | Revisión preventiva mensual, vigente.
          li 
            i.fas.fa-angle-right.color-vineta1
            | Formato Único del Contrato - FUEC.
          li 
            i.fas.fa-angle-right.color-vineta1
            | Licencia de conducción para vehículo de servicio público en las categorías C1 o C2, según correspocnda.
          li 
            i.fas.fa-angle-right.color-vineta1
            | Seguro Obligatorio de Accidentes de c, SOAT, vigente.
          li 
            i.fas.fa-angle-right.color-vineta1
            | Documento de identidad del conductor vinculado en el FUEC.
          li 
            i.fas.fa-angle-right.color-vineta1
            | Pólizas de Responsabilidad Civil Extracontractual y Contractual, vigentes.

    .row.justify-content-center.my-5
      .col-lg-10(data-aos="flip-up")
        .bloque-texto-g.color-morado.p-4
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img3.svg')})`}"
          )
          .bloque-texto-g1__texto.p-4
            p.mb-0 El organizador siempre debe verificar y exigir que las empresas que contrate cuenten con la documentación requerida y cumplan con la normatividad exigida, de acuerdo con el país, región o ciudad en que se encuentren. La vida y seguridad de los asistentes están bajo la responsabilidad del operador.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
