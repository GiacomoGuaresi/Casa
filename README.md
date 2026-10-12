# Casa

Il launcher delle app di casa: una pagina con una tessera per app, pubblicata su
<https://giacomoguaresi.github.io/Casa/>. Niente dati, niente accesso.

Da ogni app si torna qui con la voce **Torna all'elenco app**, in cima al menu laterale.

## Aggiungere un'app

1. Una voce in [src/dominio/app.ts](src/dominio/app.ts): nome, descrizione,
   indirizzo e colore (il `theme_color` del manifest dell'app).
2. La sua icona in `src/ui/icone/<nome>.svg`, copiata da `public/icona.svg`
   dell'app.
3. Nell'app, la voce "Torna all'elenco app" in cima al menu, verso l'indirizzo qui sopra.

## Comandi

| Comando | Cosa fa |
| --- | --- |
| `npm run dev` | L'app in sviluppo, raggiungibile anche dal telefono |
| `npm test` | I test |
| `npm run build` | Controllo dei tipi e build in `dist/` |
| `npm run icone` | Rigenera le icone della PWA da `public/icona.svg` |

Ogni push su `main` pubblica su GitHub Pages
([.github/workflows/pubblica.yml](.github/workflows/pubblica.yml)).
