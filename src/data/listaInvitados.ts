// src/data/listaInvitados.ts

interface InfoInvitado {
  nombre: string;
  pases: number;
}

// Aquí es donde defines los códigos.
// La clave (izquierda) es el código que el invitado escribe.
export const dbInvitados: Record<string, InfoInvitado> = {
  "FAMILIA-PEREZ": { nombre: "Familia Pérez", pases: 4 },
  "JUAN-LOPEZ":    { nombre: "Juan López y Acompañante", pases: 2 },
  "SOLO-YO":       { nombre: "Mi Mejor Amigo", pases: 1 },
  "TEST1234":      { nombre: "Invitado de Prueba", pases: 5 },
};