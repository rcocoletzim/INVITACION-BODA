// src/data/invitaciones.ts

export type Evento = {
  tipo: string;
  hora: string;
  lugar: string;
  direccion?: string;
  nota?: string;
};

export type Invitacion = {
  slug: string;              // /boda/<slug>
  nombres: string;
  fecha: string;
  ciudad: string;
  imagenPortada: string;
  historia: string;
  eventos: Evento[];
  linkMapa?: string;
  dressCode?: string;
  regalosTexto?: string;
  linkMesaRegalos?: string;
  linkWhatsapp?: string;
};

export const invitaciones: Invitacion[] = [
  {
    slug: "estefany-ruben",
    nombres: "Estefany & Rubén",
    fecha: "12 de abril de 2026",
    ciudad: "Querétaro, México",
    imagenPortada: "/img/portada-estefany-ruben.jpg",
    historia: `
Nos conocimos en la licenciatura, el primer día de clases.
Entre nervios, salones nuevos y muchas caras desconocidas,
no se cruzaron las miradas… se cruzaron las risas.

Entre risas, desveladas y muchos sueños compartidos,
descubrimos que queríamos caminar la vida juntos.
    `,
    eventos: [
      {
        tipo: "Ceremonia religiosa",
        hora: "4:00 pm",
        lugar: "Parroquia de X",
        direccion: "Dirección completa aquí",
        nota: "Te recomendamos llegar 15 minutos antes.",
      },
      {
        tipo: "Recepción",
        hora: "6:00 pm",
        lugar: "Jardín La Solariega",
        direccion: "Dirección completa aquí",
        nota: "Habrá barbacoa para reponernos del viaje 😉",
      },
    ],
    linkMapa: "https://maps.app.goo.gl/xxxxxxxx",
    dressCode:
      "Ven con lo que te haga sentir increíble, tu actitud y tus ganas de celebrar son la mejor vestimenta.",
    regalosTexto: `Tu presencia es nuestro mejor regalo.

Si deseas apoyarnos en el inicio de nuestra vida matrimonial,
una contribución a nuestro futuro significaría mucho para nosotros.`,
    linkMesaRegalos: "https://www.liverpool.com.mx/mesa-de-regalos-xxxx",
    linkWhatsapp: "https://wa.me/521XXXXXXXXXX",
  },

  // EJEMPLO de otra invitación (solo para que veas cómo se duplica)
  {
    slug: "ejemplo-otra-pareja",
    nombres: "Ana & Luis",
    fecha: "20 de junio de 2026",
    ciudad: "CDMX",
    imagenPortada: "/img/portada-ana-luis.jpg",
    historia: `
Una tarde cualquiera se convirtió en el comienzo de una gran historia.
Desde entonces, cada risa, cada viaje y cada pequeño momento
nos ha traído hasta aquí: el día en que decimos sí al resto de la vida juntos.
    `,
    eventos: [
      {
        tipo: "Ceremonia civil",
        hora: "1:00 pm",
        lugar: "Jardín Las Bugambilias",
        direccion: "Dirección CDMX",
      },
      {
        tipo: "Fiesta",
        hora: "3:00 pm",
        lugar: "Salón Terraza Azul",
      },
    ],
    linkMapa: "https://maps.app.goo.gl/aaaaaaa",
    dressCode: "Formal de día.",
    regalosTexto:
      "Tu presencia es lo más importante. Si deseas hacernos un regalo, te compartimos nuestra mesa.",
    linkMesaRegalos: "https://www.amazon.com.mx/wedding/xxxxxx",
    linkWhatsapp: "https://wa.me/521YYYYYYYYYY",
  },
];

export function getInvitationBySlug(slug: string): Invitacion | undefined {
  return invitaciones.find((inv) => inv.slug === slug);
}
