const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

const Home = require('./models/Home');
const Orcamento = require('./models/Orcamento');

app.use(express.json());

app.use('/files', express.static(path.resolve(__dirname, "public", "upload")));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});

app.get('/', async (req, res) => {
    await Home.findOne()
    .then((datahome) => {
        return res.json({
            erro: false,
            datahome,
            url: "http://localhost:3000/files/home/"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Valor não encontrado"
        });
    });
}); 

app.post('/cadastrar', async (req, res) => {
    await Home.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Cadastrado com sucesso"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Não cadastrado com sucesso"
        });
    });
});

app.post('/cadastrar-orcamento', async (req, res) => {

    /*await sleep(3000);

    function sleep(ms){
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }*/

    await Orcamento.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Orçamento enviando com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Orçamento não enviando com sucesso!"
        });
    });
});

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000: http://localhost:3000");
});

