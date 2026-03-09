import ilustracionRevista from '@/assets/proyectos/maquetacion-articulo/ilustracion-revista.png'
import portadaRevista from '@/assets/proyectos/maquetacion-articulo/portada.png'
import primerPliegoRevista from '@/assets/proyectos/maquetacion-articulo/primer-pliego.png'
import segundoPliegoRevista from '@/assets/proyectos/maquetacion-articulo/segundo-pliego.png'
import videoRevista from '@/assets/proyectos/maquetacion-articulo/video-revista.mp4'
import inconscient1 from '@/assets/proyectos/logo-inconscient/1.png'
import inconscientLogo from '@/assets/proyectos/logo-inconscient/inconscienttt.png'
import inconscientPegatinas from '@/assets/proyectos/logo-inconscient/pegatinas.jpg'
import inconscientVideo from '@/assets/proyectos/logo-inconscient/lainconscient_1.mp4'
import levis1 from '@/assets/proyectos/coleccion-levis/1.png'
import levis2 from '@/assets/proyectos/coleccion-levis/2.png'
import levis3 from '@/assets/proyectos/coleccion-levis/3.png'
import levis4 from '@/assets/proyectos/coleccion-levis/4.png'
import levis5 from '@/assets/proyectos/coleccion-levis/5.png'
import levis6 from '@/assets/proyectos/coleccion-levis/6.png'
import soberbiaCartel from '@/assets/proyectos/soberbia/cartel-final.jpg'
import bloomEscenaDobleCanela from '@/assets/proyectos/bloom/escena-doble-canela.jpg'
import bloomEscenaDobleCacao from '@/assets/proyectos/bloom/escena-doble-cacao.jpg'
import bloomEscenaDobleTe from '@/assets/proyectos/bloom/escena-doble-te.jpg'
import bloomEscenaDoble from '@/assets/proyectos/bloom/escena-doble.jpg'
import bloomHistoria1 from '@/assets/proyectos/bloom/historia-1-23.png'
import bloomHistoriaCanela from '@/assets/proyectos/bloom/historia-canela-23.png'
import bloomMockupsHistoriaCacao from '@/assets/proyectos/bloom/mockups-historia-cacao.png'
import bloomHistoriaNaranja from '@/assets/proyectos/bloom/historia-naranja-23.png'
import bloomHistoriaTe from '@/assets/proyectos/bloom/historia-te-23.png'
import bloomMockupsHistoriaLugar from '@/assets/proyectos/bloom/mockups-historia-lugar.png'
import bloomMasBolsas from '@/assets/proyectos/bloom/mas-bolsas.jpg'
import busMaldito1 from '@/assets/proyectos/el-bus-maldito/1.png'
import busMaldito2 from '@/assets/proyectos/el-bus-maldito/2.png'
import busMaldito3 from '@/assets/proyectos/el-bus-maldito/3.png'
import busMaldito4 from '@/assets/proyectos/el-bus-maldito/4.png'
import busMaldito5 from '@/assets/proyectos/el-bus-maldito/5.png'
import busMaldito6 from '@/assets/proyectos/el-bus-maldito/6.png'
import tresVinetas from '@/assets/proyectos/el-senor-que-hackeo-el-sistema/3-vinetas.png'
import manoDibujo from '@/assets/proyectos/mano-luminica/manodibujo.png'
import ninioYPez from '@/assets/proyectos/el-pez-y-el-nino/ninioypez.png'

export type TrabajoMedia = {
  tipo: 'imagen' | 'video'
  src: string
  alt: string
  inicioSegundos?: number
  finSegundos?: number
}

export type Trabajo = {
  slug: string
  titulo: string
  subtitulo: string
  anio: string
  herramientas: string[]
  descripcion: string
  media?: TrabajoMedia[]
  miniatura?: string
}

export const trabajosDiseno: Trabajo[] = [
  {
    slug: 'maquetacion-articulo',
    titulo: 'Maquetación de artículo',
    subtitulo: 'Diseño editorial y maquetación',
    anio: '2025',
    herramientas: ['Adobe Indesign', 'Adobe Premiere Pro', 'Procreate'],
    descripcion:
      'Este proyecto consiste en la maquetación del artículo “Salud mental en diseñadores: retos y estrategias para el bienestar” de Elena Martínez-Soriano. Su correcta maquetación implica organizar el contenido siguiendo criterios de jerarquía tipográfica, legibilidad y coherencia visual, con el objetivo de presentar el texto de forma clara y ordenada dentro de un formato editorial. Además, para acompañar el artículo, se realizó una ilustración específica para el proyecto que representa de forma abstracta el proceso de ideación y la manera en que nuestros pensamientos influyen y actúan sobre él.',
    miniatura: segundoPliegoRevista,
    media: [
      {
        tipo: 'video',
        src: videoRevista,
        alt: 'Vídeo de la revista',
        inicioSegundos: 0,
        finSegundos: 2.5
      },
      {
        tipo: 'imagen',
        src: portadaRevista,
        alt: 'Portada del artículo maquetado'
      },
      {
        tipo: 'imagen',
        src: primerPliegoRevista,
        alt: 'Primer pliego del artículo'
      },
      {
        tipo: 'imagen',
        src: segundoPliegoRevista,
        alt: 'Segundo pliego del artículo'
      },
      {
        tipo: 'imagen',
        src: ilustracionRevista,
        alt: 'Ilustración del proyecto editorial'
      }
    ]
  },
  {
    slug: 'coleccion-levis',
    titulo: "Colección Levi's",
    subtitulo: 'Piezas volumétricas y propuesta digital',
    anio: '2025',
    herramientas: ['Sculpey', 'Escayola', 'Adobe Illustrator'],
    descripcion:
      "Creación de dos figuras volumétricas que forman parte de una colección mayor de Levi's, que acompañan su estética y su identidad visual inspirada en el imaginario del vaquero y la cultura western. El proyecto explora la relación entre diseño, marca y funcionalidad, utilizando el lenguaje visual. Además, cuenta con una visión hipotética de cómo estas piezas podrían presentarse dentro de la página web de la marca, planteando un posible apartado o sección digital donde se mostrarían los objetos dentro de la colección, integrados en la estética visual y narrativa de la web.",
    miniatura: levis1,
    media: [
      {
        tipo: 'imagen',
        src: levis1,
        alt: "Colección Levi's - imagen 1"
      },
      {
        tipo: 'imagen',
        src: levis2,
        alt: "Colección Levi's - imagen 2"
      },
      {
        tipo: 'imagen',
        src: levis3,
        alt: "Colección Levi's - imagen 3"
      },
      {
        tipo: 'imagen',
        src: levis4,
        alt: "Colección Levi's - imagen 4"
      },
      {
        tipo: 'imagen',
        src: levis5,
        alt: "Colección Levi's - imagen 5"
      },
      {
        tipo: 'imagen',
        src: levis6,
        alt: "Colección Levi's - imagen 6"
      }
    ]
  },
  {
    slug: 'logo-la-inconscient',
    titulo: 'Logotipo de "La In.Conscient"',
    subtitulo: 'Identidad visual para compañía teatral',
    anio: '2025',
    herramientas: ['Adobe Illustrator', 'Adobe Photoshop'],
    descripcion:
      'Logotipo para “La In.Conscient Teatre”, una compañía teatral. Este logotipo es el resultado de un engranaje y un botón de encendido. En ese cruce de significados, el logo representa movimiento y acción. Es una suma entre la ejecución consciente de los procesos y la voluntad por llevarlos a cabo. Gracias al estilo minimalista, el mensaje es el protagonista, y aseguramos la durabilidad del logo en el tiempo.',
    miniatura: inconscient1,
    media: [
      {
        tipo: 'imagen',
        src: inconscient1,
        alt: 'La In.Conscient - imagen 1'
      },
      {
        tipo: 'imagen',
        src: inconscientLogo,
        alt: 'La In.Conscient - inconscienttt'
      },
      {
        tipo: 'imagen',
        src: inconscientPegatinas,
        alt: 'La In.Conscient - pegatinas'
      },
      {
        tipo: 'video',
        src: inconscientVideo,
        alt: 'La In.Conscient - vídeo',
        inicioSegundos: 18,
        finSegundos: 26
      }
    ]
  },
  {
    slug: 'soberbia',
    titulo: 'Soberbia',
    subtitulo: 'Cartel publicitario',
    anio: '2026',
    herramientas: ['Adobe Photoshop', 'Adobe InDesign', 'Adobe Premiere Pro'],
    descripcion:
      'Cartel publicitario diseñado para la obra teatral “Siete” de Alejandra Wrinkler. La propuesta gráfica aborda el pecado de la soberbia desde una perspectiva contemporánea y disruptiva, alejándose de representaciones tradicionales y apostando por un enfoque visual más conceptual y actual.',
    miniatura: soberbiaCartel,
    media: [
      {
        tipo: 'imagen',
        src: soberbiaCartel,
        alt: 'Cartel final del proyecto Soberbia'
      }
    ]
  },
  {
    slug: 'bloom',
    titulo: 'Bloom',
    subtitulo: 'Identidad visual, packaging y redes sociales',
    anio: '2025',
    herramientas: ['Adobe Illustrator', 'Adobe Photoshop'],
    descripcion:
      'Desarrollo de la identidad visual para “Bloom”, una marca de chocolates que busca transmitir una combinación equilibrada entre tradición y renovación. El proyecto incluye el diseño del logotipo, la propuesta de empaquetado y la aplicación de la identidad en redes sociales, creando un sistema visual coherente para los diferentes puntos de contacto de la marca. La dirección estética se inspira en la reinterpretación contemporánea del azulejo tradicional, utilizando sus patrones y su valor cultural como punto de partida para construir una imagen de marca distintiva. A través de esta referencia visual se genera un lenguaje gráfico que conecta con lo artesanal y lo clásico.',
    miniatura: bloomEscenaDobleCanela,
    media: [
      {
        tipo: 'imagen',
        src: bloomEscenaDobleCanela,
        alt: 'Bloom - escena doble canela'
      },
      {
        tipo: 'imagen',
        src: bloomEscenaDobleCacao,
        alt: 'Bloom - escena doble cacao'
      },
      {
        tipo: 'imagen',
        src: bloomEscenaDobleTe,
        alt: 'Bloom - escena doble te'
      },
      {
        tipo: 'imagen',
        src: bloomEscenaDoble,
        alt: 'Bloom - escena doble'
      },
      {
        tipo: 'imagen',
        src: bloomHistoria1,
        alt: 'Bloom - historia 1'
      },
      {
        tipo: 'imagen',
        src: bloomHistoriaCanela,
        alt: 'Bloom - historia canela'
      },
      {
        tipo: 'imagen',
        src: bloomMockupsHistoriaCacao,
        alt: 'Bloom - mockups historia cacao'
      },
      {
        tipo: 'imagen',
        src: bloomHistoriaNaranja,
        alt: 'Bloom - historia naranja'
      },
      {
        tipo: 'imagen',
        src: bloomHistoriaTe,
        alt: 'Bloom - historia te'
      },
      {
        tipo: 'imagen',
        src: bloomMockupsHistoriaLugar,
        alt: 'Bloom - mockups historia lugar'
      },
      {
        tipo: 'imagen',
        src: bloomMasBolsas,
        alt: 'Bloom - más bolsas'
      }
    ]
  }
]

export const trabajosIlustracion: Trabajo[] = [
  {
    slug: 'el-bus-maldito',
    titulo: '"El bus maldito"',
    subtitulo: 'Cómic de humor y terror',
    anio: '2024',
    herramientas: ['Tinta', 'Adobe Photoshop'],
    descripcion:
      'Cómic de dos páginas de género humorístico y de terror. Cuenta una historia real con una expresión teatralizada. La obra nace de la adaptación de una anécdota real, elevando lo cotidiano a una dimensión grotesca mediante una expresión teatralizada de los personajes. A través de un dibujo dinámico y un ritmo visual acelerado, se busca que el lector experimente la incomodidad del suceso original, suavizada por el alivio cómico de la exageración.',
    miniatura: busMaldito1,
    media: [
      {
        tipo: 'imagen',
        src: busMaldito1,
        alt: 'El bus maldito - imagen 1'
      },
      {
        tipo: 'imagen',
        src: busMaldito2,
        alt: 'El bus maldito - imagen 2'
      },
      {
        tipo: 'imagen',
        src: busMaldito3,
        alt: 'El bus maldito - imagen 3'
      },
      {
        tipo: 'imagen',
        src: busMaldito4,
        alt: 'El bus maldito - imagen 4'
      },
      {
        tipo: 'imagen',
        src: busMaldito5,
        alt: 'El bus maldito - imagen 5'
      },
      {
        tipo: 'imagen',
        src: busMaldito6,
        alt: 'El bus maldito - imagen 6'
      }
    ]
  },
  {
    slug: 'el-senor-que-hackeo-el-sistema',
    titulo: '"El señor que hackeó el sistema"',
    subtitulo: 'Micro-cómic de humor',
    anio: '2025',
    herramientas: ['Acuarela'],
    descripcion:
      'Micro-cómic de tres viñetas que explora, desde el humor observacional, una situación cotidiana y universal: el uso excesivo de los probadores de perfume en establecimientos comerciales. La historia transforma una anécdota real en una pieza narrativa breve sobre la picaresca y el decoro.',
    miniatura: tresVinetas,
    media: [
      {
        tipo: 'imagen',
        src: tresVinetas,
        alt: 'El señor que hackeó el sistema - micro-cómic'
      }
    ]
  },
  {
    slug: 'la-chica-y-el-trueno',
    titulo: '"La chica y el trueno"',
    subtitulo: 'Obra pictórica en formato A4',
    anio: '2025',
    herramientas: ['Acuarela', 'Témpera', 'Lápices de color'],
    descripcion: 'Lienzo A4',
    miniatura: '/proyectos/ilustracion/chicatrueno.tif',
    media: [
      {
        tipo: 'imagen',
        src: '/proyectos/ilustracion/chicatrueno.tif',
        alt: 'La chica y el trueno'
      }
    ]
  },
  {
    slug: 'espera',
    titulo: '"Espera"',
    subtitulo: 'Portada para libro hipotético de terror',
    anio: '2025',
    herramientas: ['Acuerela', 'Tinta china'],
    descripcion:
      'Portada para un libro hipotético de terror. Mediante el puntillismo y el blanco y negro, se aporta una textura orgánica y granulada que refuerza la atmósfera opresiva y clásica del género.',
    miniatura: '/proyectos/ilustracion/dibujoespera.tif',
    media: [
      {
        tipo: 'imagen',
        src: '/proyectos/ilustracion/dibujoespera.tif',
        alt: 'Espera'
      }
    ]
  },
  {
    slug: 'mano-luminica',
    titulo: 'Mano lumínica',
    subtitulo: 'Lienzo A3',
    anio: '2025',
    herramientas: ['Lápices de colores', 'Óleo'],
    descripcion:
      'Lienzo A3. Ejercicio de interpretación cromática a partir de un referente en escala de grises. El proyecto explora la construcción de volumen, profundidad y textura mediante una tríada análoga de amarillo, verde y azul, sustituyendo los valores lumínicos tradicionales por transiciones de color vibrantes.',
    miniatura: manoDibujo,
    media: [
      {
        tipo: 'imagen',
        src: manoDibujo,
        alt: 'Mano lumínica'
      }
    ]
  },
  {
    slug: 'el-pez-y-el-nino',
    titulo: '"El pez y el niño"',
    subtitulo: 'Lienzo A3',
    anio: '2025',
    herramientas: ['Pasteles'],
    descripcion:
      'Lienzo A3. Un estudio sobre la refracción y la distorsión visual a través del agua. La obra captura la deformación de las facciones infantiles al interactuar con una bolsa de plástico, explorando cómo la luz y el medio líquido alteran nuestra percepción cotidiana de la forma y la realidad.',
    miniatura: ninioYPez,
    media: [
      {
        tipo: 'imagen',
        src: ninioYPez,
        alt: 'El pez y el niño'
      }
    ]
  },
  {
    slug: 'cotidianidad-en-tinta',
    titulo: '"Cotidianidad en tinta"',
    subtitulo: 'Lienzo A3',
    anio: '2025',
    herramientas: ['Tinta china'],
    descripcion:
      'Lienzo A3. La obra captura el ritual privado de una mujer frente al espejo, un momento donde la soledad se entrelaza con la mirada ajena. La ausencia de color subraya la pureza del gesto, dejando que el contraste defina la frontera entre lo oculto y lo expuesto.',
    miniatura: '/proyectos/ilustracion/senora-tinta-china.tif',
    media: [
      {
        tipo: 'imagen',
        src: '/proyectos/ilustracion/senora-tinta-china.tif',
        alt: 'Cotidianidad en tinta'
      }
    ]
  }
]

export const encontrarTrabajo = (categoria: 'diseno' | 'ilustracion', slug: string) => {
  const lista = categoria === 'diseno' ? trabajosDiseno : trabajosIlustracion
  return lista.find((trabajo) => trabajo.slug === slug)
}
