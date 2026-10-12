import { useState } from 'react'
import { Download, House } from 'lucide-react'
import { app } from '../dominio/app'
import { Installa } from './Installa'
import { installa, useInstallazione } from './installazione'

/** Le icone delle app, copiate dal loro public/icona.svg: nome del file → indirizzo. */
const icone = import.meta.glob<string>('./icone/*.svg', { eager: true, query: '?url', import: 'default' })

/**
 * Il launcher: l'intestazione delle altre app di casa, senza menu, e sotto una
 * tessera per app (src/dominio/app.ts). Ogni tessera è un link semplice; da
 * ogni app si torna qui con "Tutte le app", in fondo al suo menu.
 */
export function App() {
  const statoInstallazione = useInstallazione()
  const [istruzioni, setIstruzioni] = useState(false)

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-1 flex min-h-11 items-center gap-1 border-b border-noce-scura bg-noce pt-[env(safe-area-inset-top)] pr-3 pl-3 text-panna">
        <House className="size-[22px] shrink-0 text-miele" aria-hidden="true" />
        <h1 className="ml-1 text-lg font-semibold tracking-[0.01em]">Casa</h1>
      </header>
      <main className="mx-auto flex w-full max-w-[640px] flex-1 flex-col gap-3 p-3 pb-[calc(12px+env(safe-area-inset-bottom))]">
        <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
          {app.map(({ nome, descrizione, indirizzo, colore, icona }) => (
            <li key={nome} className="animate-entra">
              <a
                href={indirizzo}
                className="flex h-full items-center gap-3 rounded-[11px] border border-bordo bg-white p-3 no-underline shadow-[inset_4px_0_0_var(--colore)] hover:border-(--colore) active:bg-fondo"
                style={{ '--colore': colore } as React.CSSProperties}
              >
                <img src={icone[`./icone/${icona}.svg`]} alt="" className="size-14 shrink-0" />
                <span className="flex min-w-0 flex-col gap-0.5">
                  <span className="text-lg font-semibold text-testo">{nome}</span>
                  <span className="text-testo-tenue">{descrizione}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        {istruzioni && <Installa stato={statoInstallazione} />}
        {/* La voce di servizio sta in fondo, lontana dall'uso di tutti i giorni. */}
        {statoInstallazione !== 'installata' && !istruzioni && (
          <button
            type="button"
            className="mt-auto flex min-h-11 items-center justify-center gap-2 self-center rounded-lg px-3 text-testo-tenue hover:bg-white active:bg-bordo"
            onClick={() => {
              // Dove il browser ha dato il suo prompt basta un tocco; dove no,
              // si aprono le istruzioni.
              if (statoInstallazione === 'pronta') void installa()
              else setIstruzioni(true)
            }}
          >
            <Download className="size-[18px]" aria-hidden="true" />
            Installa l'app
          </button>
        )}
      </main>
    </div>
  )
}
