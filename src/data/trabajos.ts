import ilustracionRevista from '@/assets/proyectos/maquetacion-articulo/ilustracion-revista.png'
import portadaRevista from '@/assets/proyectos/maquetacion-articulo/portada.png'
import primerPliegoRevista from '@/assets/proyectos/maquetacion-articulo/primer-pliego.png'
import segundoPliegoRevista from '@/assets/proyectos/maquetacion-articulo/segundo-pliego.png'
import videoRevista from '@/assets/proyectos/maquetacion-articulo/video-revista.mp4'

export type TrabajoMedia = {
  tipo: 'imagen' | 'video'
  src: string
  alt: string
  maxSegundos?: number
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
        maxSegundos: 3
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
  }
]

export const trabajosIlustracion: Trabajo[] = []

export const encontrarTrabajo = (categoria: 'diseno' | 'ilustracion', slug: string) => {
  const lista = categoria === 'diseno' ? trabajosDiseno : trabajosIlustracion
  return lista.find((trabajo) => trabajo.slug === slug)
}
