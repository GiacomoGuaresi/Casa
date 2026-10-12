/**
 * Le app di casa che il launcher elenca: l'unica fonte. Per aggiungerne una
 * basta una voce qui e la sua icona in src/ui/icone/ (README.md).
 */
export interface AppDiCasa {
  nome: string
  /** Una riga, la stessa del manifest dell'app. */
  descrizione: string
  /** Dove l'app è pubblicata: assoluto, con la barra in fondo. */
  indirizzo: string
  /** Il colore dell'intestazione dell'app (`theme_color` del suo manifest). */
  colore: string
  /** Il nome del file in src/ui/icone/, senza estensione. */
  icona: string
}

export const app: readonly AppDiCasa[] = [
  {
    nome: 'Grocery',
    descrizione: 'La lista della spesa di casa, generata ogni due settimane',
    indirizzo: 'https://giacomoguaresi.github.io/Grocery/',
    colore: '#b05a3c',
    icona: 'grocery',
  },
  {
    nome: 'Projects',
    descrizione: 'Le attività di casa, raggruppate per progetto',
    indirizzo: 'https://giacomoguaresi.github.io/Projects/',
    colore: '#587654',
    icona: 'projects',
  },
  {
    nome: 'Adventures',
    descrizione: 'Trekking e avventure da fare fuori casa',
    indirizzo: 'https://giacomoguaresi.github.io/Adventures/',
    colore: '#3f6485',
    icona: 'adventures',
  },
  {
    nome: 'Logger',
    descrizione: 'Diario minimo di tutto quello che vuoi tenere a mente',
    indirizzo: 'https://giacomoguaresi.github.io/Logger/',
    colore: '#3f444e',
    icona: 'logger',
  },
]
