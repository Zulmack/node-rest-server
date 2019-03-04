const config = require('./config/config');
const express = require('express');
const app = express();
const bp = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bp.urlencoded({ extended: false }))

// parse application/json
app.use(bp.json())

app.get('/usuario', (req, res) => {
    res.json({ "nombre": "Hello world" });
});
app.post('/usuario', (req, res) => {
    let body = req.body;
    if (!body.nombre) {
        res.status(400).json({
            ok: false,
            mensaje: 'Nombre is missing'
        });
    } else {
        res.json({ persona: body });
    }
});
app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({ id });
});
app.delete('/usuario', (req, res) => {
    res.json({ "nombre": "delete world" });
});
app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto 3000');
});