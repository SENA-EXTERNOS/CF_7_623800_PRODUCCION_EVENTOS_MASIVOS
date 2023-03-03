export default {
  global: {
    componenteFormativo: 'Diseño de experiencia del evento',
    descripcionCurso:
      'Al pensar en la palabra hospitalidad desde el sector turístico, nos referimos a entender las necesidades de los clientes y usuarios, en cómo las interpretamos y las transformamos en servicio, atención y experiencia. La hospitalidad para un organizador de eventos lo es todo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Alojamiento y hospedaje',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Transporte de pasajeros e importancia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Alimentos y bebidas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Montaje de mesas para eventos',
      referencia:
        'Aprende Institute. (2021). <i>Montaje de mesas para eventos.</i> Aprende Institute.  [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HS-GoeBd8Fc ',
    },
    {
      tema: 'Definiciones y actividades turísticas',
      referencia:
        'Dirección de Análisis Sectorial y Promoción (DASP) (s.f.). Definiciones y actividades prestadores de servicios turísticos. Registro Nacional del Turismo. ',
      tipo: 'PDF',
      link:
        'https://www.mincit.gov.co/getattachment/f7c53ff0-36c2-435b-884c-bb5e847f8866/Prestadores-de-servicios-turisticos-%E2%80%93-Definiciones.aspx#:~:text=Albergue%2Drefugio%2Dhostal%3A%20Establecimiento,propios%20alimentos%2C%20sin%20perjuicio%20de',
    },
    {
      tema: 'Que es un Servicio de <i>Catering</i>',
      referencia:
        'InEventos. (s.f.). <i>¿Qué es un servicio de catering?</i> InEventos.',
      tipo: 'Blog página <i>web</i>',
      link: 'https://www.ineventos.co/blog/que-es-un-catering.html',
    },
    {
      tema: 'Cómo preparar la Mesa para un Banquete',
      referencia:
        'MasterD (2012). <i>Cómo preparar la Mesa para un Banquete.</i> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=LNWVQQnv2Qo ',
    },
    {
      tema: 'Elaboración del menú en hoteles y restaurantes',
      referencia:
        'Trujillo. L. M. (2015). <i>Elaboración del menú en hoteles y restaurantes.</i> Gestiopolis.',
      tipo: 'Blog página <i>web</i>',
      link:
        'https://www.gestiopolis.com/elaboracion-del-menu-en-hoteles-y-restaurantes/',
    },
  ],
  glosario: [
    {
      termino: '<em>Brunch</em>',
      significado:
        'La equivalencia de este término en español podría ser ‘tentempié’ a media mañana. La fusión del desayuno y el almuerzo anglosajón (sobre todo en América del Norte). <i>Brunch</i> es la fusión de las palabras inglesas <i>Breakfast</i> y <i>Lunch</i>. (protocolo.org, 2022).',
    },
    {
      termino: '<em>Buffet</em>',
      significado:
        'También llamado en español bufet o bufé, es un estilo de servicio donde una comida es servida y dispuesta sobre una mesa, para que los comensales se sirvan a sí mismos los alimentos. (significados.com).',
    },
    {
      termino: '<em>Check-in</em>',
      significado:
        'Término en idioma inglés que significa registrarse, usado en el sector hotelero para referirse al proceso de registrar la llegada de personas que se alojarán en un hotel.',
    },
    {
      termino: '<em>Check-out</em>',
      significado:
        'Término en idioma inglés que significa verificar, usado en el sector hotelero para referirse al proceso de realizar la salida y cancelación de la cuenta general por la renta de una habitación a un huésped.',
    },
    {
      termino: '<em>Cocktail</em>',
      significado:
        'También mencionado como cóctel, es una combinación de diferentes bebidas, por lo general alcohólicas. El concepto también se emplea para nombrar un tipo de evento o reunión social donde los asistentes beben cócteles. (Pérez y Merino).',
    },
    {
      termino: 'Menú',
      significado:
        'Es un término con varios usos, de acuerdo con el contexto. Puede tratarse del conjunto de los platos que constituyen una comida (desayuno, almuerzo, merienda o cena). (Pérez y Gardey).',
    },
    {
      termino: 'Norma Técnica Sectorial Colombiana, NTSH 006',
      significado:
        'Norma que especifica requisitos de gestión, así como aquellos relacionados con la sostenibilidad ambiental, sociocultural y económica, aplicables a un destino turístico o a un área turística dentro del mismo.',
    },
    {
      termino: 'RUNT',
      significado:
        'En Colombia, es el Registro Único Nacional de Tránsito, un sistema de información que permite registrar y mantener actualizada, centralizada, autorizada y validada la misma sobre los registros de automotores, conductores, licencias de tránsito, empresas de transporte público, infractores, accidentes de tránsito, seguros, remolques y semirremolques, maquinaria agrícola y de construcción autopropulsada y de personas naturales o jurídicas que prestan servicio al sector. (art. 8 y 9 de la Ley 769 de 2002 y la parte pertinente de la Ley 1005 de 2006).',
    },
    {
      termino: 'SOAT',
      significado:
        'En Colombia, es un seguro obligatorio establecido por Ley con un fin netamente social. Su objetivo es asegurar la atención, de manera inmediata e incondicional, de las víctimas de accidentes de tránsito que sufren lesiones corporales y muerte.',
    },
    {
      termino: '<em>Vernissage</em>',
      significado:
        'Es un tipo de recepción-celebración utilizado en eventos, principalmente, culturales; en sus orígenes, era una celebración previa a la inauguración de una exposición de pintura. (protocolo.org).',
    },
  ],
  referencias: [
    {
      referencia:
        'Córdoba A.C. (2017). <i>Origen e historia de los eventos en el mundo y en Colombia.</i> Prezi ',
      link:
        'https://prezi.com/rb6nljzxlrzk/origen-e-historia-de-los-eventos-en-el-mundo-y-en-colombia/',
    },
    {
      referencia:
        'Cuadrado Esclapez, C. & Rodríguez Cuadrado, R. (2014). <i>El ABC en la organización de eventos</i> (2a. ed.). FC Editorial. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/128999?page=2',
    },
    {
      referencia:
        'Fernando, Ramos y Barrera Torre. (2006). <i>Operación de Hoteles</i> 1. Editorial Trillas.',
    },
    {
      referencia:
        'Instituto Mediterráneo Estudios de Protocolo. (s.f.). <i>¿Qué es un evento y cómo se puede clasificar?</i> Protocolo Imep.',
      link:
        'https://www.protocoloimep.com/articulos/que-es-un-evento-y-clasificacion/#comments',
    },
    {
      referencia:
        'Luis di Muro. (1999). <i>Manual Práctico de Recepción Hotelera.</i> Editorial Trillas.',
    },
    {
      referencia:
        'Martínez Altamirano. (2017). <i>Organización de eventos</i> (Primera edición. ed.). México: Editorial Trillas.',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2009). <i>Norma Técnica Sectorial Colombiana NTSH 006, Clasificación de establecimientos de alojamiento y hospedaje. Categorización por estrellas de hoteles, requisitos.</i>',
      link:
        'https://www.mincit.gov.co/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales/nts-alojamiento-y-hospedaje-1/norma-tecnica-sectorial-colombiana-ntsh-006-i-actu ',
    },
    {
      referencia:
        'Pérez, J. y Merino, M. (2018). <i>Definición de cóctel.</i> Definicion.de.',
      link: 'https://definicion.de/coctel/',
    },
    {
      referencia:
        'Pérez, J. y Gardey, A. (2014). <i>Definición de menú.</i> Definicion.de.',
      link: 'https://definicion.de/menu-2/',
    },
    {
      referencia:
        'Protocolo & Etiqueta. (2022). <i>Qué es un brunch. Cuando se hace un brunch. Qué se come en un brunch.</i> Protocolo.org.',
      link:
        'https://www.protocolo.org/social/la-mesa/el-brunch-que-es-y-cuando-se-hace.html',
    },
    {
      referencia:
        'Protocolo & Etiqueta. (2021). <i>¿Qué es una “vernissage”?</i> Protocolo.org.',
      link:
        'https://www.protocolo.org/social/etiqueta-social/que-es-una-vernissage.html ',
    },
    {
      referencia:
        'Rodríguez Cuadrado y Cuadrado Esclapez. (2014). <i>El ABC En La Organización de Eventos.</i> (Segunda edición). FC Editorial.',
    },
    {
      referencia: 'RUNT (s.f.). <i>Sobre el RUNT, ¿Qué es el RUNT?</i>',
      link: 'https://www.runt.com.co/sobre-runt/que-es-runt',
    },
    {
      referencia:
        'Significados. (s.f.) <i>Significado de Buffet</i>. Significados.com.',
      link: 'https://www.significados.com/buffet/ ',
    },
    {
      referencia:
        'Sumoza Matos J. (2019). <i>Turismo comunitario, turismo digital, turismo informacional, turismo inteligente.</i> Revista Turydes: Turismo y Desarrollo, n. 26. En línea:',
      link: 'https://www.eumed.net/rev/turydes/26/turismo-tipos.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
