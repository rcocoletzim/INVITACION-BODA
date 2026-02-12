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
  "PATY":       { nombre: "Señora Paty", pases: 2 },
  "SANCHEZ-MARQUES":      { nombre: "Fam. Sanchez Marques", pases: 4 },
};