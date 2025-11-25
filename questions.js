const originalQuestions = [
    {
        question: "Quali sono i principali vantaggi dell’utilizzo dell’Intelligenza Artificiale nelle piattaforme di e-commerce?",
        options: [
            "Aumentare la velocita’ di consegna",
            "Maggiore affidabilita’ dei server",
            "Maggiore sicurezza dei dati degli utenti",
            "Migliore personalizzazione dell’offerta"
        ],
        correctAnswer: "Migliore personalizzazione dell’offerta"
    },
    {
        question: "Quando fu introdotto il termine “Intelligenza Artificiale”?",
        options: ["2001", "1970", "1956", "1940"],
        correctAnswer: "1956"
    },
    {
        question: "In che anno il sistema IBM Watson vinse nel quiz televisivo Jeopardy?",
        options: ["1991", "2011", "2021", "1961"],
        correctAnswer: "2011"
    },
    {
        question: "In che modo l’Intelligenza Artificiale viene utilizzata nei motori di ricerca?",
        options: [
            "Per la gestione degli account degli utenti",
            "Per la creazione di contenuti pubblicitari",
            "Per la selezione dei risultati di ricerca da mostrare",
            "Per la creazione di siti web"
        ],
        correctAnswer: "Per la selezione dei risultati di ricerca da mostrare"
    },
    {
        question: "Qual e’ stato uno dei principali fattori che hanno causato il primo “inverno dell’Intelligenza Artificiale” negli anni ’70?",
        options: [
            "Precedente eccessivo entusiasmo e aspettative irrealistiche",
            "Successi straordinari nella programmazione simbolica",
            "Ampia disponibilità di dati di addestramento",
            "Avanzamenti significativi nella potenza di calcolo"
        ],
        correctAnswer: "Precedente eccessivo entusiasmo e aspettative irrealistiche"
    },
    {
        question: "Qual e’ un esempio di intelligenza artificiale debole utilizzato nei veicoli?",
        options: [
            "Cruise control",
            "Cambio automatico",
            "Assistenza al parcheggio",
            "Telecamera posteriore"
        ],
        correctAnswer: "Assistenza al parcheggio"
    },
    {
        question: "Qual e’ la definizione di Intelligenza Artificiale debole?",
        options: [
            "Un sistema che e’ in grado di svolgere un compito specifico e limitato",
            "Un sistema che e’ in grado di svolgere in modo autonomo una vasta gamma di compiti",
            "Un sistema che e’ in grado di svolgere un compito specifico senza istruzioni",
            "Un sistema che e’ in grado di apprendere da solo, ma non ha la capacita’ di svolgere un compito specifico in modo autonomo"
        ],
        correctAnswer: "Un sistema che e’ in grado di svolgere un compito specifico e limitato"
    },
    {
        question: "Qual e’ l’obiettivo principale della “logica fuzzy”?",
        options: [
            "Sostituire completamente la logica classica",
            "Operare solo con valori booleani",
            "Semplificare la complessità della logica booleana",
            "Gestire l’incertezza e la vaghezza nei dati"
        ],
        correctAnswer: "Gestire l’incertezza e la vaghezza nei dati"
    },
    {
        question: "Cosa e’ la logica bayesiana?",
        options: [
            "Un sistema di previsione che fornisce risposte certe",
            "Un modello per l’aggiornamento di credenze in un determinato dominio",
            "Un approccio matematico che riguarda la valutazione della probabilità di eventi futuri sulla base di conoscenze pregresse e nuove evidenze",
            "Un approccio matematico che riguarda la previsione di eventi futuri su basi statistiche che fornisce risultati certi"
        ],
        correctAnswer: "Un approccio matematico che riguarda la valutazione della probabilità di eventi futuri sulla base di conoscenze pregresse e nuove evidenze"
    },
    {
        question: "Qual e’ un esempio di Intelligenza Artificiale debole che si può trovare in una casa?",
        options: [
            "Sistema di riscaldamento",
            "Lavatrice",
            "Aspirapolvere robot",
            "Forno a microonde"
        ],
        correctAnswer: "Aspirapolvere robot"
    },
    {
        question: "Qual e’ uno dei principali vantaggi dell’utilizzo dell’Intelligenza Artificiale nei social network?",
        options: [
            "Aumento del numero di account fake",
            "Aumento delle interazioni negative tra gli utenti",
            "Personalizzazione dei contenuti mostrati",
            "Diminuzione della privacy degli utenti"
        ],
        correctAnswer: "Personalizzazione dei contenuti mostrati"
    },
    {
        question: "Quale evento puo’ essere considerato l’inizio ufficiale della ricerca sull’Intelligenza Artificiale?",
        options: [
            "La creazione del primo personal computer",
            "La nascita di Internet",
 "La pubblicazione del “Computing Machinery and Intelligence” di Alan Turing",
            "La pubblicazione di “The Road Ahead” di Bill Gates"
        ],
        correctAnswer: "La pubblicazione del “Computing Machinery and Intelligence” di Alan Turing"
    },
    {
        question: "Cosa è l’Intelligenza Artificiale forte?",
        options: [
            "Una Intelligenza Artificiale che imita perfettamente l’intelligenza umana in tutti gli aspetti",
            "Un tipo di Intelligenza Artificiale specializzata in compiti specifici",
            "Una Intelligenza Artificiale che si basa solo su algoritmi di apprendimento automatico",
            "Una Intelligenza Artificiale in grado di svolgere una vasta gamma di compiti complessi e di ragionamento come un essere umano"
        ],
        correctAnswer: "Una Intelligenza Artificiale in grado di svolgere una vasta gamma di compiti complessi e di ragionamento come un essere umano"
    },
    {
        question: "Cosa dimostra il superamento del test di Turing?",
        options: [
            "Che una macchina e’ in grado di esibire comportamenti intelligenti pari o indistinguibili da quelli di un umano",
            "Che una macchina e’ in grado di creare vita",
            "Che una macchina e’ in grado di superare la velocita’ della luce",
            "Che una macchina e’ in grado di diventare cosciente di se’ stessa"
        ],
        correctAnswer: "Che una macchina e’ in grado di esibire comportamenti intelligenti pari o indistinguibili da quelli di un umano"
    },
    {
        question: "Cos’e’ un sistema esperto?",
        options: [
            "Una Intelligenza Artificiale in grado di apprendere in modo autonomo senza l’intervento umano",
            "Un tipo di Intelligenza Artificiale debole specializzata in un campo specifico che utilizza conoscenze esperte",
            "Un sistema di Intelligenza Artificiale forte che imita perfettamente l’intelligenza umana",
            "Un sistema informatico basato sulla logica fuzzy"
        ],
        correctAnswer: "Un tipo di Intelligenza Artificiale debole specializzata in un campo specifico che utilizza conoscenze esperte"
    },
    {
        question: "Qual e’ una definizione di Intelligenza Artificiale?",
        options: [
            "La capacita’ di una macchina di riprodurre suoni e immagini",
            "La capacita’ di una macchina di svolgere compiti ripetitivi",
            "La capacita’ di una macchina di imitare l’intelligenza umana",
            "La capacita’ di una macchina di elaborare grandi quantità di dati"
        ],
        correctAnswer: "La capacita’ di una macchina di imitare l’intelligenza umana"
    },
    {
        question: "Esistono attualmente applicazioni di Super Intelligenza Artificiale?",
        options: ["No", "Sì", "Fantascienza, non sara’ mai possibile", "Arrivera’ a breve"],
        correctAnswer: "No"
    },
    {
        question: "Qual e’ la definizione di Super Intelligenza?",
        options: [
            "Un’intelligenza che si manifesta solo in alcune persone dotate di capacità straordinarie",
            "Un’Intelligenza Artificiale in grado di risolvere compiti specifici in modo estremamente efficiente",
            "Un’intelligenza che supera quella umana in tutti gli aspetti cognitivi",
            "Un’Intelligenza con abilità di apprendimento autonomo"
        ],
        correctAnswer: "Un'intelligenza che supera quella umana in tutti gli aspetti cognitivi"
    },
    {
        question: "Chi ipotizzo’ il primo programma per il gioco degli scacchi?",
        options: ["Claude Shannon", "Thenchard More", "Marvin Minsky", "Nathaniel Rochester"],
        correctAnswer: "Claude Shannon"
    },
    {
        question: "Qual e’ la definizione di Intelligenza Artificiale?",
        options: [
            "La creazione di robot in grado di sostituire gli esseri umani in ogni attivita’",
            "La simulazione di eventi futuri attraverso l’analisi di dati storici",
            "La capacita’ dei computer di apprendere da soli senza bisogno di istruzioni",
            "L’insieme di tecniche e algoritmi che permettono ai computer di imitare l’intelligenza umana"
        ],
        correctAnswer: "L’insieme di tecniche e algoritmi che permettono ai computer di imitare l’intelligenza umana"
    },
    {
        question: "Cos’e’ la “logica fuzzy”?",
        options: [
            "Un tipo di logica digitale",
            "Un approccio alla logica che si basa solo su risultati esatti",
            "Una logica basata su valori di verità sfumati",
            "Un’altra terminologia per la logica booleana"
        ],
        correctAnswer: "Una logica basata su valori di verità sfumati"
    },
    {
        question: "Chi introdusse il termine “Intelligenza Artificiale”?",
        options: ["Marvin Minsky", "John McCarthy", "Steve Jobs", "Alan Turing"],
        correctAnswer: "John McCarthy"
    },
    {
        question: "Qual e’ un esempio di utilizzo dell’Intelligenza Artificiale nella vita quotidiana?",
        options: [
            "Scansione di documenti per la digitalizzazione",
            "Uso degli assistenti vocali",
            "Rilevamento di anomalie nel funzionamento di un reattore nucleare",
            "Uso del Bancomat"
        ],
        correctAnswer: "Uso degli assistenti vocali"
    },
    {
        question: "Qual è il vantaggio dell’utilizzo dell’Intelligenza Artificiale nel navigatore?",
        options: [
            "Riduce il consumo di carburante del veicolo",
            "Riduce i costi del pedaggio autostradale",
            "Migliora la precisione delle indicazioni stradali",
            "Aumenta la velocità massima del veicolo"
        ],
        correctAnswer: "Migliora la precisione delle indicazioni stradali"
    }
];