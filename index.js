const fs = require('fs')
const CfmSource = require('@condenast/atjson-source-copilot-markdown').default
const ReactRenderer = require('@atjson/renderer-react').default
const PlainTextRenderer = require('@atjson/renderer-plain-text').default

const markdown = "Ci siamo: oggi martedì 14 maggio, inizia **Cannes 2019**. Il Festival dedicato al cinema giunge quest'anno all'**edizione 72** e, nonostante il numero delle primavere, fa ancora molto parlare di sé. Fra i temi più dibattuti, a poche ore dall'inizio della *kermesse*, il premio alla carriera ad **[Alain Delon](https://www.vogue.it/news/article/cannes-2019-alain-delon-palma-oro-polemiche)** e il nuovo film di **[Terrence Malick, *A Hidden Life*](https://www.vogue.it/news/article/cannes-2019-terrence-malick-a-hidden-life-film-storico)**[.](https://www.vogue.it/news/article/cannes-2019-terrence-malick-a-hidden-life-film-storico) Ma, senza dimenticare i film veri protagonisti del Festival (qui trovate le [**11 pellicole da non perdere quest'anno**](https://www.vogue.it/news/article/festival-cannes-2019-11-film-anteprima-trailer)) qui ci concentriamo sulle star che calcheranno il tappeto rosso di Cannes 2019\\. E, nello specifico, sui beauty look scelti da ognuna: siano essi scelte vincenti o meno. Bene a questo punto fare una premessa: come per Venezia, anche Cannes dura qualche giorno (12 per l'esattezza, la manifestazione **terminerà il prossimo 25 maggio**) e si divide fra presentazioni *by day* e *red carpet by night*. Così, per comodità, abbiamo diviso le gallery fotografiche in due parti: **giorno e notte.**\n\n## I migliori e peggiori beauty look a Cannes 2019 - BY DAY\nIniziamo con il *daily* con una nota speciale per **[Elle Fanning](https://www.vogue.it/moda/news/2017/12/04/dakota-elle-fanning-protagoniste-della-campagna-holiday-miu-miu-whispers).** La sorella minore di Dakota - a cui ha anche rubato la scena - quest'anno siede in **Giuria** e quindi sarà una grande certezza sulla *__Croisette__*. Stoica, nonostante l'impegno che le sarà richiesto, Elle si è già lanciata in ben **4 look e beauty look**. Non proprio memorabili eh, ma intanto onore al merito.   \nAttesissima, **Selena Gomez** non ha disatteso le aspettative. Perfetta in total white, trucco leggero e capelli sciolti all'aeroporto, durante il red carpet \"*daily*\" ha optato per uno **chignon basso** con riga in mezzo (perfetto per chi non avesse voglia della solita coda, [leggete qui)](https://www.vogue.it/bellezza/article/chignon-basso-mezza-coda-top-knot-acconciature-capelli-alternative-coda) e l'ormai immancabile eyeliner nero.\n\n\n\n[#gallery: /galleries/5cdab5c52b258a8b9ee58f02]\n\n\n\n## I migliori e peggiori beauty look a Cannes 2019 - BY NIGHT\nI look by night vengono aperti dal red carpet del film *I morti non muoiono* che porta sul red carpet una **Selena Gomez** in versione diva con capelli raccolti e tirati, labbra rosso fuoco e eyeliner a virgola nero in un trucco da vamp, perfetto con il suo outfit in raso bianco, firmato Marc Jacobs Beauty. Simile il look *Lady like* della giurata **Elle Fanning**, che punta su ciglia finte XL, eyeliner nero e rossetto rosso, raccogliendo i capelli in uno scenografico chignon voluminoso. Una menzione speciale va poi al make-up bordeaux vinaccia in tinta con l'abito della top model **Izabel Goulart** e al momento \"leg revealing\" della modella **Romee Strijd**.  \nNella seconda serata a incantare è il **raccolto bucolico di Elle Fanning**: non il solito fiorellino bianco, ma un raccolto intrecciato sul retro e decorato con **fiori di campo freschi** degli stessi colori del bellissimo vestito floreale - rosa, bianco, giallo e verde - perfetto anche per le spose più country-chic. Al secondo posto, a pari merito, brillano il rossetto rosso della top model **Alessandra Ambrosio** e il raccolto a cofana di Carla Bruni. La menzione speciale della serata va ai ricci afro naturali di **Tina Kunakey**, neo mamma e signora Cassel.\n\n\n\n[#gallery: /galleries/5cdbc96a383e1a119eaac01e]\n\n"

const atjson = CfmSource.fromRaw(markdown)

fs.writeFileSync('dist/atjson.json', JSON.stringify(atjson))

const rendererPlainText = new PlainTextRenderer()
const rendererReact = new ReactRenderer()

// ....
