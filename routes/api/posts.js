const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');
const multer  = require('multer');
const { RefForward } = require('@fluentui/react-component-ref');
const upload = multer(); // <- handles multipart/formdata requests(photos)
// /*---------- Public Routes ----------*/
router.post('/', isLoggedIn, upload.single('photo'), postsCtrl.create);
router.get('/', postsCtrl.index)


/*---------- Protected Routes ----------*/
function isLoggedIn(req,res,next){
    if(req.user) next();
    res.status(401).json({data: 'not authorized, please log in'})
}
module.exports = router;