<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.texto-blanco 1
      h1 Alojamiento y hospedaje
      
    .row.justify-content-center.my-5
      .col-lg-6.my-5(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img1.svg', alt='')        
      .col-lg-6
        p(data-aos="fade-down-left") Es importante que un organizador de eventos conozca las bases de la hotelería y su funcionamiento, con el fin de que pueda gestionar la información necesaria, en beneficio de sus clientes y el logro de los objetivos propuestos en cada evento.
        .cajon.color-acento-botones.p-3(data-aos="fade-up-left")
          p.mb-0 Se debe comprender que el alojamiento es un servicio ofrecido por diferentes tipos de establecimientos, especializados en proporcionar al público instalaciones con comodidades específicas para poder pernoctar, es decir, pasar la noche, sin que esta situación sea de carácter permanente. Entonces, un establecimiento de alojamiento u hospedaje se puede definir como el lugar físico que ofrece la posibilidad para alojarse temporalmente y que puede prestar servicios adicionales y/o complementarios.     
    h3.my-5 Origen del alojamiento
    .row.my-5(data-aos="flip-up")
      .col-lg-11
        .tarjeta--morada.p-4
          .row.justify-content-center
            .col-lg-10
              p De acuerdo con la historia, la necesidad del alojamiento nace desde que el hombre comenzó a realizar sus primeros desplazamientos, trasladándose de un lugar a otro a través de grandes distancias, donde el cansancio les obligaba a parar el viaje para descansar, alimentarse y poder continuar. A partir de esta oportunidad, se comienzan a crear los primeros refugios o posadas temporales para satisfacer las necesidades de estos viajeros. Los griegos, los romanos, los árabes, y países como Inglaterra, Francia y Estados Unidos, fueron mejorando cada vez más el concepto de lo que hoy se conoce como ‘hotel’.
            .col-8.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/img2.svg', alt='').img1-tm1        

    h3.my-5 Tipos de alojamiento, hospedaje, acomodación y tarifas

    .row.justify-content-center.my-5
      .col-lg-10(data-aos="flip-down")
        .bloque-texto-g.color-morado.p-4
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img3.svg')})`}"
          )
          .bloque-texto-g1__texto.p-4
            p.mb-0 Actualmente el mercado tiene una oferta diversa relacionada directamente con la necesidad y el tipo de cliente y/o usuario, la cual se renueva de forma dinámica, creando mejoras a sus conceptos, conforme varían las expectativas e intereses del turista.

    .row.my-5
      p Según estas necesidades o intereses, podemos describir tres grandes grupos de tipo de hospedaje:

    TabsC.color-primario
      .tarjeta--morada2.p-lg-5.p-3(titulo="Alojamientos naturales y ecológicos")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img4.svg', alt='')

          .col-md-6
            p.texto-blanco.mt-4 Desde grandes y majestuosos parques naturales y/o reservas en diferentes países, hasta pequeños oasis encantadores hacen parte de estas nuevas propuestas. En la actualidad, debido a la ola verde y ecologista, los consumidores buscan espacios abiertos, naturales y sobre todo sostenibles, aportando al desarrollo del turismo en espacios rurales. Estas áreas abiertas generan una sensación de libertad e incluyen paisajes pintorescos, como montañas, playas, nevados, entre otros. Adicional, en su mayoría son alojamientos cómodos que prestan diversos servicios y pueden contemplar actividades de interacción con el lugar y su comunidad.

      .tarjeta--morada2.p-lg-5.p-3(titulo="Alojamiento urbano")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img5.svg', alt='')

          .col-md-6
            p.texto-blanco.mt-5 Esta es una oferta propia de las ciudades, dentro de la cual se puede encontrar gran variedad de alternativas de hospedaje, desde establecimientos pequeños con servicios limitados, hasta grandes cadenas hoteleras con toda una amplia propuesta gastronómica y turística.  Aquí compiten por cercanía, servicios, detalles, personalización, entre otras características que buscan los viajeros. 

      .tarjeta--morada2.p-lg-5.p-3(titulo="Complejos turísticos")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img6.svg', alt='')

          .col-md-6
            p.texto-blanco.mt-5 Estos son establecimientos de gran extensión, que ofrecen variedad de servicios y actividades de esparcimiento para todas las personas. Se destacan por ofrecer en el mismo complejo todo lo que una persona pueda requerir para sus vacaciones. Las alianzas entre estos grandes conglomerados son insuperables y satisfacen a todos los viajeros.

    .row.justify-content-center.my-5
      .col-lg-10
        .row.justify-content-center
          .col-6.col-lg-3.mb-3(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema1/img7.svg', alt='')
          .col-lg-9
            p Los alojamientos pueden ser tan diversos como los conceptos se puedan crear de este servicio; siempre se contará con la variable de la creatividad del empresario para atraer a un segmento especializado de clientes. No obstante, podremos encontrar algunas consideraciones generales que tienen que ver con el tamaño, modalidad o categoría.

    .row.justify-content-center.my-5
      .col-lg-10
        p Dentro de las clasificaciones generales encontramos:

    .tarjeta.tarjeta--cafe.p-lg-5.p-3
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            h4 Según su tamaño:
            ul.lista-ul--color
              li 
                i.fas.fa-angle-right.color-vineta
                p #[strong Pequeños:] establecimientos con menos de 50 habitaciones, en su mayoría negocios familiares, administrados generalmente por sus propietarios. En algunos casos cuentan con servicios adicionales, como restaurante, zonas húmedas, parqueaderos, entre otros.
              li 
                i.fas.fa-angle-right.color-vineta
                p #[strong Medianos:] con máximo 150 habitaciones (dependiendo del país), son unidades empresariales más establecidas, con mayor cantidad de personal y una estructura de trabajo mejor diseñada con funciones y procesos específicos. Cuentan con servicios complementarios asociados.
              li 
                i.fas.fa-angle-right.color-vineta
                p #[strong Grandes:] empresas con más de 150 habitaciones, son estructuras  complejas, con áreas administrativas y operativas estructuradas, pueden contar con el respaldo de grandes cadenas empresariales y poseen un portafolio con variedad de servicios complementarios. Cuentan con una alta gerencia que se encarga de dar estrategia y responder por la eficacia del negocio.

          .col-md-4.my-5
            figure
              img(src='@/assets/curso/temas/tema1/img8.svg', alt='')

        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            h4 Según su modalidad:
            ul.lista-ul--color
              li 
                i.fas.fa-angle-right.color-vineta
                p #[strong Comerciales o de ciudad:] establecimientos que se concentran en centros urbanos, variando en tamaño y servicios adicionales, estos últimos generalmente enfocados en viajeros de negocios, tales como centros de negocios, wifi, desayuno, televisión por cable o digital con variedad de canales, incluyendo noticias en varios idiomas, servicio de lavandería las 24 horas, entre otros.
              li 
                i.fas.fa-angle-right.color-vineta
                p #[strong Vacacionales:] generalmente ubicados en sitios turísticos, playas, montañas o cerca de parques de diversiones; su estructura varía de acuerdo con el número de visitantes y temporadas. El objetivo primordial es la diversión y el esparcimiento familiar pues cuentan con programas como excursiones, centros de baile, espacios temáticos, entre otros.

          .col-md-4.my-5
            figure
              img(src='@/assets/curso/temas/tema1/img9.svg', alt='')

        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            h4 Según su categoría:
            ul.lista-ul--color
              li 
                i.fas.fa-angle-right.color-vineta
                p #[strong Por estrellas:] son calificados por la calidad general en servicio e infraestructura, otorgando estrellas de acuerdo con su puntuación, siendo una estrella la categoría que representa establecimientos sencillos, y cinco estrellas aquellos con infraestructuras y servicios de mayor lujo.
              li 
                i.fas.fa-angle-right.color-vineta
                p #[strong Por letras claves:] la filosofía es similar a la anterior, pero se otorgan letras en lugar de estrellas:  AA, A, B, C y D.

          .col-md-4.my-5
            figure
              img(src='@/assets/curso/temas/tema1/img10.svg', alt='')

        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Según su agrupación: 
            ul.lista-ul--color
              li 
                i.fas.fa-angle-right.color-vineta
                p Pueden ser establecimientos que se consideran independientes o que hacen parte de una cadena hotelera de nivel nacional o internacional. 
 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img11.svg', alt='')


    .row.justify-content-center.my-5
      .col-lg-10(data-aos="flip-up")
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/img12.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 Anexo 1 OTROS TIPOS DE ALOJAMIENTO
                  p Para complementar las clasificaciones anteriores, descargue y lea el siguiente documento 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexo-1_otros_tipos_de_alojamientos.pdf')" target="_blank")
                    span.texto-blanco Descargar
                    i.fas.fa-file-download

    .row.justify-content-center.my-5
      .col-lg-7
        .cajon.color-acento-botones.p-4(data-aos="fade-up-right")
          p.mb-0 En Colombia existe la Norma Técnica Sectorial Hotelera, NTSH 006, establecida por El Instituto Colombiano de Normas Técnicas y Certificación, ICONTEC y La Asociación Hotelera de Colombia, COTELCO, quienes definieron la clasificación de los establecimientos para alojamiento y hospedaje y la categorización por estrellas de hoteles. 
          a.anexo.mb-4.mb-lg-0.mt-3(href="https://drive.google.com/file/d/1rPAEQTb4GM6MZ9HVrawExoeZyI2IBGOs/view?usp=share_link" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link2.svg")
            .anexo__texto
              p Enlace web. Por favor descargue y revise el documento: MATERIAL COMPLEMENTARIO - NTSH006 para ampliar este tema.

      .col-lg-3(data-aos="fade-up-left")
        figure
          img(src='@/assets/curso/temas/tema1/img13.svg', alt='').img13-tm1          

    .row.my-5(data-aos="zoom-in-up")
      ImagenInfografica.color-secundario
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema1/img14.svg', alt='')

        .tarjeta.color-acento-botones.p-3(x="17%" y="90%" numero="1")
          .h5.mb-2 Albergue - Refugio - Hostal
          p “Establecimiento que presta el servicio de alojamiento preferentemente en habitaciones semi privadas [#[i sic]] o comunes, al igual que sus baños, puede disponer además de un recinto común equipado adecuadamente para que los huéspedes se preparen sus propios alimentos, sin perjuicio de proporcionar otros servicios complementarios.” (DASP, p. 2).

        .tarjeta.color-acento-botones.p-3(x="27%" y="90%" numero="2")
          .h5.mb-2 Apartahotel
          p “Establecimiento que presta el servicio de alojamiento en apartamentos independientes de un edificio, que integren una unidad de administración y explotación, pudiendo ofrecer otros servicios complementarios. Cada apartamento está compuesto como mínimo de los siguientes ambientes: dormitorio con baño privado, sala de estar, cocina equipada y comedor.” (DASP, p. 2).

        .tarjeta.color-acento-botones.p-3(x="40%" y="90%" numero="3")
          .h5.mb-2 Apartamentos turísticos 
          p Unidad habitacional destinada a brindar facilidades de alojamiento y permanencia de manera ocasional a una o más personas. Según su capacidad, puede contar con servicio de limpieza, y como mínimo, con los siguientes recintos: dormitorio, sala-comedor, cocina y baño.

        .tarjeta.color-acento-botones.p-3(x="52.5%" y="90%" numero="4")
          .h5.mb-2 Hotel
          p Establecimiento que presta servicio de alojamiento en habitaciones y otro tipo de unidades habitacionales en menor cantidad, privadas, en un edificio o parte independiente del mismo, constituyendo sus dependencias en un todo homogéneo y con entrada de uso exclusivo. Disponen además, como mínimo, del servicio de recepción, desayuno y salón de estar para la permanencia de los huéspedes, sin perjuicio de proporcionar otros servicios complementarios (DASP, p. 2).

        .tarjeta.color-acento-botones.p-3(x="65%" y="90%" numero="5")
          .h5.mb-2 Posadas turísticas
          p Vivienda familiar que presta el servicio de alojamiento en unidades habitacionales, preferiblemente de arquitectura autóctona, cuyo principal propósito es promover la generación de empleo e ingresos a las familias residentes, prestadoras del servicio. (DASP, p. 2).

        .tarjeta.color-acento-botones.p-3(x="75%" y="90%" numero="6")
          .h5.mb-2 Alojamiento rural - #[i lodge]
          p Establecimiento que presta el servicio de alojamiento en unidades habitacionales privadas, ubicado en áreas rurales y cuyo principal propósito es el desarrollo de actividades asociadas a su entorno natural y cultural. Ofrecen además, como mínimo, servicios de alimentación bajo la modalidad de pensión completa, sin perjuicio de proporcionar otros servicios complementarios. (DASP, p. 2).

        .tarjeta.color-acento-botones.p-3(x="85%" y="90%" numero="7")
          .h5.mb-2 Recinto de campamento o #[i camping]
          p Establecimiento que presta el servicio de alojamiento en un terreno debidamente delimitado, asignándole un sitio a cada persona o grupo de personas que hacen vida al aire libre y que utilicen carpas, casas rodantes u otras instalaciones similares para pernoctar en contacto con la naturaleza. (DASP, p. 2).

    h3.my-5 Criterios de selección

    .row.justify-content-center
      .cajon.color-primario.p-3
        p.mb-0 Una vez conocidos los diferentes tipos de establecimientos, se estudiarán algunas variables para tener en cuenta en la selección del lugar más adecuado, acorde a las necesidades y naturaleza del evento a organizar.

    .row.my-5
      h4 Inventario de camas disponibles

    .row.justify-content-center
      .col-5.col-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img15.svg', alt='')       
      .col-lg-10
        p Cuando se habla de la capacidad hotelera se hace referencia al número de camas disponibles, pues no se debe relacionar uno a uno con el número de habitaciones con las que cuenta el establecimiento, sino con el número de personas que pueden dormir en el mismo. Por tanto, se hace necesario que el organizador de eventos conozca con exactitud cuál es la capacidad real disponible en cada hotel, para poder realizar la acomodación de los asistentes de acuerdo con el evento.
        p Es importante tener claridad acerca de los canales de venta, ya que en muchos casos no es solo el hotel el que vende sus servicios; por tanto, el organizador debe entender con quién está negociando: mientras más directo el canal de ventas, mejores tarifas se van a lograr.

        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              figure
                img(src="@/assets/curso/temas/tema1/img16.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 Anexo 2 CANALES DE VENTA
                  p Para ampliar este tema descargue el anexo
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexo-2_canales_de_venta_de_hoteles.pdf')" target="_blank")
                    span.texto-blanco Descargar
                    i.fas.fa-file-download
        .row.justify-content-center
          .col-lg-9
            p De acuerdo con el evento a realizar, el organizador debe enfocarse en la demanda que tiene y buscar los servicios requeridos para ofrecer al cliente la mejor alternativa posible. Para ello, debe crear y robustecer una base de datos de la oferta hotelera ; esto le permitirá tener dicha información de manera inmediata, facilitando la toma de decisiones frente a las solicitudes y necesidades de los clientes. 
          .col-8.col-lg-3(data-aos="fade-up-left")
            figure
              img(src="@/assets/curso/temas/tema1/img17.svg")

    .row.justify-content-center.my-5
      .col-lg-10
        p Los principales tipos de habitaciones y de acomodaciones que existen en un establecimiento de alojamiento y hospedaje son:

    .row.justify-content-center.my-5
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--morada3.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/img18.svg' alt='AvatarTop')
          h3.text-center Habitación sencilla o acomodación sencilla
          p.text-center Habitación con una cama (independiente de su tamaño), donde se aloja una sola persona. 

        .tarjeta.tarjeta--morada3.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/img19.svg' alt='AvatarTop')
          h3.text-center Habitación doble
          p.text-center Para dos personas en una sola cama, la cual puede ser doble (1.60 m), #[i Queen] (1.80 m) o #[i King] (2 m).

        .tarjeta.tarjeta--morada3.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/img20.svg' alt='AvatarTop')
          h2.text-center Habitación #[i twin]:
          p.text-center Para dos personas en camas separadas, llamadas camas #[i twin] (gemelas, porque tienen el mismo tamaño), pueden ser sencillas (1 m), semidobles (1.20 m) y en algunos casos, dobles (1.40 m).

        .tarjeta.tarjeta--morada3.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/img21.svg' alt='AvatarTop')
          h2.text-center Habitaciones especiales: 
          p.text-center Poseen características especiales con mayor #[i confort] o lujo, como habitaciones familiares, #[i suite] o #[i junior suites]. 

        .tarjeta.tarjeta--morada3.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/img22.svg' alt='AvatarTop')
          h2.text-center Acomodación sencilla:
          p.text-center Hace referencia a que una persona ocupa una habitación, independientemente del tipo o número de camas en ella.

        .tarjeta.tarjeta--morada3.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/img23.svg' alt='AvatarTop')
          h2.text-center Acomodación doble:
          p.text-center Dos personas ocupan la habitación, independientemente de si tiene cama compartida o camas #[i twins].

        .tarjeta.tarjeta--morada3.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/img24.svg' alt='AvatarTop')
          h2.text-center Acomodación triple:
          p.text-center Tres personas ocupan la habitación, independientemente del número y tipo de camas. 

        .tarjeta.tarjeta--morada3.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/img25.svg' alt='AvatarTop')
          h2.text-center Acomodación múltiple:
          p.text-center Más de tres personas en la habitación. 

    .row.my-5
      h4 Tipos de reservaciones

    .row.justify-content-center.my-5
      .col-lg-6
        p Los hoteles proponen diferentes tipos de reservas de acuerdo con las necesidades de los clientes. Por ello, el organizador debe conocerlas para poder crear mejores propuestas a sus clientes.            
        .cajon.color-acento-botones.p-3  
          p.mb-0.text-center #[strong Las reservas pueden ser:]
        .row.justify-content-center.my-3
          .col-lg-10(data-aos="fade-up-right")
            figure
              img(src="@/assets/curso/temas/tema1/img26.svg")      
      .col-lg-6
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--amarilla")
          .row(titulo="No confirmadas")
            p Aquellas reservaciones que se originan de particulares o intermediarios, pero que no tienen garantía, es decir, el hotel fija una hora límite de ingreso del huésped, y si el mismo no se hace presente, se elimina la reserva y se abre para la venta. 
          
          .row(titulo="Garantizadas")
            p Reservas en donde si el huésped no se presenta al hotel, este cobrará por el servicio. Cuentan con el respaldo de una tarjeta de crédito o de una cuenta de cobro si se trata de empresa.
          
          .row(titulo="Provisionales")
            p Reservaciones que no tienen garantía y que son altamente sensibles a ser canceladas; los agentes bloquean temporalmente la habitación mientras el cliente define su estancia y se convierte en una reserva garantizada. Tienen una fecha límite, y de no ser canceladas, el hotel podrá disponer de las reservas.
          
          .row(titulo="Reservaciones en lista de espera ")
            p El hotel da la posibilidad de quedar en esta lista cuando no hay disponibilidad, pero al analizar las fechas observa que hay posibilidades de otorgar la reserva por liberación de reservas provisionales o no confirmadas.
          
    .row.justify-content-center.my-5
      .col-lg-10
        p Sabiendo que todo organizador de eventos debe ir actualizando una base de datos con la información necesaria de la oferta hotelera, el siguiente es un ejemplo de un formato para la realización de esta base de datos de establecimientos:

    .titulo-sexto.color-acento-contenido
      h5 Figura 1
      br
      em(data-aos="fade-down").mb-0 #[i Inventario camas disponibles.]

    .row.justify-content-center.my-5
      figure
        img(src="@/assets/curso/temas/tema1/img27.svg")
        figcaption.mt-3 Elaboración experto temático

    .row.my-5
      h4 Planes hoteleros y para grupos 

    .row.justify-content-center.my-5     
      .col-lg-6
        .row
          .bloque-texto-b1.color-secundario.p-4
            .bloque-texto-b__texto
              p.mb-0 Al seleccionar un hotel o un lugar para realizar un evento, el organizador debe tener claridad del objetivo planteado, así como del número de personas que asistirán, cuántas requieren hospedaje y en qué tipo de acomodación. En la gran mayoría de los casos, los organizadores especializados en eventos corporativos deben tener una planilla de los requerimientos de alojamiento, la cual deben elaborar con suficiente anterioridad para hacer sus reservas a tiempo, teniendo en cuenta que, en ocasiones, la capacidad o disponibilidad de habitaciones del hotel no sea suficiente, por tanto, será necesario contar con diferentes alternativas de establecimientos en la zona.

      .col-lg-6(data-aos="fade-up-left")
        figure
          img(src="@/assets/curso/temas/tema1/img28.svg")      

    .row.justify-content-center.mb-5
      .cajon.color-primario.p-3
        p.mb-0 Hay eventos que incluyen la participación de niños o familiares, allí se debe considerar muy bien la acomodación, garantizando la comodidad de cada familia o participante; por esto se requiere organización y responsabilidad, manteniendo la información actualizada en el gráfico anterior (Figura 1. Inventario camas disponibles).
    p Los hoteles consideran como grupos a un número de huéspedes que reserven más de 10 habitaciones y que tengan características comunes, como fechas de ingreso y salida, servicios complementarios o adicionales, entre otros. Un organizador de eventos debe estar preparado para solucionar o administrar grupos grandes, así mismo debe saber cómo seleccionar una buena oferta dependiendo de sus necesidades y el objetivo del evento.
    p.mb-5 Los tipos de eventos grupales más comunes son:

    .row.justify-content-center.texto-blanco.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img29.svg", alt="alt")
          .crd_hover_txt--body
            h4.text-center.mb-5 #[i Tour] 
            p.text-center.mb-0 El objetivo de este grupo es netamente turístico, por tanto, se debe establecer contacto con los diferentes hoteles en los diferentes lugares nacionales o internacionales, de acuerdo con el cronograma y a los recursos de los clientes.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img30.svg", alt="alt")
          .crd_hover_txt--body
            h4.text-center.mb-3 Convención
            p.text-center.mb-0 Encontramos eventos masivos, como conferencias, encuentros empresariales, celebraciones, entre otros, casi siempre de empresas privadas o públicas que realizan actividades a gran escala. Normalmente, requieren una ocupación total del hotel. En otros casos, encontramos eventos empresariales internos, o de menor tamaño, como reuniones de trabajo zonificadas.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img31.svg", alt="alt")
          .crd_hover_txt--body
            h4.text-center.mb-3 Sociales
            p.text-center.mb-0 El objetivo de este grupo es desarrollar actividades sociales, deportivas o culturales, como celebración de matrimonios, encuentros o campeonatos deportivos, reuniones familiares, artísticas, entre otros.

    p.mb-5 A continuación, se presenta un ejemplo de formato para el levantamiento de necesidades de alojamiento, con los requerimientos de acomodación para que el organizador pueda contratar la mejor opción.

    .row.justify-content-center.my-3
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 2
          p(data-aos="fade-down").mb-0 #[i Formato: levantamiento necesidades de alojamiento.]

    .row.justify-content-center.my-3
      .col-lg-6
        figure
          img(src="@/assets/curso/temas/tema1/img32.svg")
          figcaption.mt-3 Elaboración experto temático

    h3.my-5 Servicios complementarios

    .row.justify-content-center.my-5
      .col-lg-10(data-aos="flip-up")
        .tarjeta--amarilla2.p-4
          .row.justify-content-center
            .col-8.col-lg-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/img33.svg', alt='').img33-tm1        
            .col-lg-10.j
              p.mb-0 Como se ha visto anteriormente, los establecimientos de alojamiento pueden ofrecer servicios complementarios incluidos en la tarifa o con costos adicionales, en beneficio de las personas que los visitan.

    .row.justify-content-center.my-5
      .col-lg-10
        p Algunos de estos servicios pueden ser:

    .row.justify-content-center.my-5
      .col-lg-10    
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img34.svg', alt='')

          .tarjeta.color-primario.p-3(x="68%" y="76%" numero="1")
            p.text-center Restaurante

          .tarjeta.color-primario.p-3(x="82%" y="35%" numero="2")
            p.text-center Centro de negocios

          .tarjeta.color-primario.p-3(x="51.5%" y="35%" numero="3")
            p.text-center Bar y/o discoteca

          .tarjeta.color-primario.p-3(x="10%" y="53%" numero="4")
            p.text-center Spa

          .tarjeta.color-primario.p-3(x="3%" y="80%" numero="5")
            p.text-center Zonas húmedas

          .tarjeta.color-primario.p-3(x="43%" y="78%" numero="6")
            p.text-center Gimnasio

          .tarjeta.color-primario.p-3(x="95%" y="93%" numero="7")
            p.text-center Transporte

          .tarjeta.color-primario.p-3(x="97%" y="55%" numero="8")
            p.text-center Tiendas al interior del hotel

    h3.my-5 Procedimiento de reservas, prerregistro y #[i check-in]

    .row.justify-content-center.my-5
      .col-lg-4
        p Una parte importante del manejo de grupos es poder dar agilidad al registro y la salida de los asistentes en los hoteles, sobre todo cuando el número de asistentes es grande. Es importante que el organizador tenga la información necesaria para realizar las reservas oportunamente, con datos como nombre completo, tipo y número de documento de identidad, fecha de nacimiento, etc., también deberá solicitar la acomodación deseada. Una vez consolidada, el organizador deberá pasarla al hotel para realizar los prerregistros y facilitar el proceso de #[i check-in] 

      .col-lg-4(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema1/img35.svg', alt='')

      .col-lg-4
        .bloque-texto-b2.color-secundario.p-4
          .bloque-texto-b__texto
            p.mb-0 También es necesario que el organizador conozca en detalle las políticas, procesos de entrada y salida del hotel, como sus horarios, ya que una mala información podrá tener costos adicionales; esto debe compartirse con los asistentes de manera previa para evitar momentos incómodos. Se propone al organizador realizar un formato de acomodación propio, en donde conozca qué personas del evento están hospedados en el hotel, en qué habitación y con qué plan o características.

    .row.my-5
      p La siguiente tabla es un ejemplo de dicho formato de seguimiento:

    .row.justify-content-center.my-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 3
          p(data-aos="fade-down").mb-0 #[i Formato de control y seguimiento de participantes del evento, registro, hotel.]

    .row.justify-content-center.my-3
      .col-lg-10
        figure
          img(src="@/assets/curso/temas/tema1/img36.svg")
          figcaption.mt-3 Elaboración experto temático

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
