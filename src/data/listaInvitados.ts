// src/data/listaInvitados.ts

interface InfoInvitado {
  nombre: string;
  pases: number;
}

// Aquí es donde defines los códigos.
// La clave (izquierda) es el código que el invitado escribe.
export const dbInvitados: Record<string, InfoInvitado> = {
  "SILVA-MATA": { nombre: "Familia Silva Mata", pases: 5 },
  "ARREDONDO-COCOLETZI":    { nombre: "Familia Arredondo Cocoletzi", pases: 6 },
  "SOLO-YO":       { nombre: "Mi Mejor Amigo", pases: 1 },
  "TEST1234":      { nombre: "Invitado de Prueba", pases: 5 },
};