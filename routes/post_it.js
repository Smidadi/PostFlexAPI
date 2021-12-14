const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const cors = require('cors');

pool.connect();

router.use(cors());
/**
 * Ajoute un nouveau post_it dans la base de données
 */
 router.post('/new/:id/:date/:estimation_temp/:description/:couleur', async (req,res) => {
    try{
        const response = await pool.query('INSERT INTO post_it(id,date_creation,estimation_temp,description,couleur) VALUES ($1,$2,$3,$4,$5);',
                          [req.params.id, req.params.date,req.params.estimation_temp, req.params.description, req.params.couleur]);
        res.end();
    }catch(error){
      console.log(error.message);
    }
  });
  
  /**
   * Récupère tous les post-it
   */
  router.get('/all', async (req,res) => {
    try{
      const response = await pool.query("SELECT * FROM post_it;");
      res.send(response.rows);
    }catch(err){
      console.error(err.message);
    }
  });

  router.put('/change/:id/:colonne/:data', async (req,res) => {
    const colonne = req.params.colonne;
    const query = "";
    switch (colonne) {
      case "titre":
        qry = "UPDATE post_it SET titre = ($2) WHERE id = ($1);";
        break;
      case "description":
        qry = "UPDATE post_it SET description = ($2) WHERE id = ($1);";
        break;
      case "couleur":
        qry = "UPDATE post_it SET couleur = ($2) WHERE id = ($1);";
        break;
      case "date":
        qry = "UPDATE post_it SET date_creation = ($2) WHERE id = ($1);";
        break;
      case "estimation_temps":
        qry = "UPDATE post_it SET date_creation = ($2) WHERE id = ($1);";
        break;
      default:
        break;
    }
    try {
      const response = await pool.query(qry,[req.params.id, req.params.data]);
      res.end();
    } catch (error) {
      console.error(error.message);
    }
  
  });

module.exports = router;