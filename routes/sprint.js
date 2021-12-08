const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const cors = require('cors');

pool.connect();

router.use(cors());

router.get("/:id", async (req,res) => {
    try {
        const response = await pool.query("SELECT * FROM sprint WHERE id = ($1);",[req.params.id]);
        res.send(response.rows)
    } catch (error) {
        console.error(error);
    }
});

router.post("/new/:id/:date", async (req,res) => {
    try {
        const response = await pool.query("INSERT INTO post_it(id,date_debut) VALUES ($1,$2);",[req.params.id,req.params.date]);
        res.end();
    } catch (error) {
        console.error(error);
    }
});

router.put("/change_begin/:id/:date_debut", async (req,res) => {
    try {
        const response = pool.query("UPDATE sprint SET date_debut = ($2) WHERE id = ($1);",[req.params.id,req.params.date_debut]);
        res.end();
    } catch (error) {
        console.error(error);
    }
});

router.put("/change_end/:id/:date_fin", async (req,res) => {
    try {
        const response = pool.query("UPDATE sprint SET date_fin = ($2) WHERE id = ($1);",[req.params.id,req.params.date_fin]);
        res.end();
    } catch (error) {
        console.error(error);
    }
});

router.delete("/delete/:id", async (req,res) => {
    try {
        const response = pool.query("DELETE sprint WHERE id = ($1);",[req.params.id]);
        res.end();
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;
