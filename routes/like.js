const express = require('express');
const router = express.Router();
const { Like } = require("../models/Like");
const { Unlike } = require("../models/Unlike");

const { auth } = require("../middleware/auth");


router.post("/getLikes", (req, res) => {

    let variable = {}
    if (req.body.bookId) {
        variable = { bookId: req.body.bookId }
    } else {
        variable = null
    }

    Like.find(variable)
        .exec((err, likes) => {
            if (err) return res.status(400).send(err);
            res.status(200).json({ success: true, likes })
        })


})


router.post("/getunlikes", (req, res) => {

    let variable = {}
    if (req.body.bookId) {
        variable = { bookId: req.body.bookId }
    } else {
        variable = null
    }

    Unlike.find(variable)
        .exec((err, unlikes) => {
            if (err) return res.status(400).send(err);
            res.status(200).json({ success: true, unlikes })
        })

})


router.post("/upLike", (req, res) => {

    let variable = {}
    if (req.body.bookId) {
        variable = { bookId: req.body.bookId, userId: req.body.userId }
    } else {
        variable = null
    }

    const like = new Like(variable)
    //save the like information data in MongoDB
    like.save((err, likeResult) => {
        if (err) return res.json({ success: false, err });
        //In case unlike Button is already clicked, we need to decrease the unlike by 1 
        Unlike.findOneAndDelete(variable)
            .exec((err, unLikeResult) => {
                if (err) return res.status(400).json({ success: false, err });
                res.status(200).json({ success: true })
            })
    })

})




router.post("/unLike", (req, res) => {

    let variable = {}
    if (req.body.videoId) {
        variable = { videoId: req.body.videoId, userId: req.body.userId }
    } else {
        variable = { commentId: req.body.commentId , userId: req.body.userId }
    }

    Like.findOneAndDelete(variable)
        .exec((err, result) => {
            if (err) return res.status(400).json({ success: false, err })
            res.status(200).json({ success: true })
        })

})


router.post("/ununLike", (req, res) => {

    let variable = {}
    if (req.body.videoId) {
        variable = { videoId: req.body.videoId, userId: req.body.userId }
    } else {
        variable = { commentId: req.body.commentId , userId: req.body.userId }
    }

    Unlike.findOneAndDelete(variable)
    .exec((err, result) => {
        if (err) return res.status(400).json({ success: false, err })
        res.status(200).json({ success: true })
    })


})



router.post("/upUnLike", (req, res) => {

    let variable = {}
    if (req.body.videoId) {
        variable = { videoId: req.body.videoId, userId: req.body.userId }
    } else {
        variable = { commentId: req.body.commentId , userId: req.body.userId }
    }

    const unlike = new unlike(variable)
    //save the like information data in MongoDB
    Unlike.save((err, unlikeResult) => {
        if (err) return res.json({ success: false, err });
        //In case Like Button is already clicked, we need to decrease the like by 1 
        Like.findOneAndDelete(variable)
            .exec((err, likeResult) => {
                if (err) return res.status(400).json({ success: false, err });
                res.status(200).json({ success: true })
            })
    })


})













module.exports = router;