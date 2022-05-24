const express = require('express');
const router = express.Router();
const FavCtrl = require('../../controllers/favorites')

router.post('/posts/:id/favorites', FavCtrl.create)
router.delete('/favorites/:id', FavCtrl.deleteFavorite)

module.exports = router;
