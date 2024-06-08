## RECRIANDO A API DA CHAMPIONS LEAGUE COM NODE.JS E EXPRESS
Criação de uma API completa e eficiente para acessar e manipular dados da Champions League, utilizando Node.js e o framework Express. Esta API proporciona integração com informações detalhadas sobre equipas, jogadores, partidas e classificações, ideal para plataformas que demandam acesso rápido e confiável a estatísticas atualizadas, suportando uma interface de usuário fluída e responsiva.

patch --> atualizar dados
npm init -y
npm i typescript tsx tsup -D    --> devdependencies
npx tsc --init
npm i express  --> usar JavaScript
npm i --save-dev @types/express --> para funcionar com TypeScript

res.send("Hello World!");  --> print na console

app.use(json());    // OU app.use(express.json());   // não sendo necessário importar o json

COMO FAZER UM POST COM O THUNDER CLIENT
1. POST    http://localhost:3333/api/players
2. Body --> JSON     (sem ; e sem , no último objeto)

{
    "id": 1,
    "name": "Lionel Messi",
    "club": "Paris Saint-Germain",
    "nationality": "Argentina",
    "position": "Forward",
    "statistics": {
        "Overall": 93,
        "Pace": 85,
        "Shooting": 94,
        "Passing": 91,
        "Dribbling": 95,
        "Defending": 38,
        "Physical": 65
    }
}

CORS --> controla quem pode chamar o API / acessar o API --> é necessário definir o API
npm i cors