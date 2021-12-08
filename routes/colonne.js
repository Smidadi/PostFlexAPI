const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const cors = require('cors');

pool.connect();

router.use(cors());

//Get all colonne from a kanban
router.get('/all/:id_sprint', async (req,res) => {
    try {
        const response = await pool.query("SELECT * FROM colonne WHERE id_sprint = ($1);",[req.params.id_sprint]);
        res.send(response.rows)
    } catch (error) {
        console.error(error);
    }
});


//add a new colonne in kanban
router.post('/new/:id_sprint/:titre', async (req,res) => {
    try {
        const response = await pool.query("INSERT INTO colonne(titre,id_sprint) VALUES ($1,$2);",[req.params.titre,req.params.id_sprint]);
        res.end();
    } catch (error) {
        console.error(error);
    }
});

//chnage max tache
router.put('/change_max/:id_sprint/:titre/:max', async (req,res) => {
    try {
        const response = await pool.query("UPDATE colonne SET max_tache = ($2) WHERE titre = ($1) AND id_sprint = ($3);",[req.params.titre,req.params.max,req.params.id_sprint]);
        res.end();
    } catch (error) {
        console.error(error);
    }
});


//change titre
router.put('/change_titre/:id_sprint/:titre/:new_titre', async (req,res) => {
    try {
        const response = await pool.query("UPDATE colonne SET titre = ($3) WHERE id_sprint = ($1) AND titre = ($2);",[req.params.id_sprint,req.params.titre,req.params.new_titre]);
        res.end();
    } catch (error) {
        console.error(error);
    }
});


//supprimer colonne
router.delete('/:id_sprint/:titre', async (req,res) => {
    try {
        const response = await pool.query("DELETE FROM colonne WHERE id_sprint = ($1) AND titre = ($2);",[req.params.id_sprint,req.params.titre]);
        res.end();
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;