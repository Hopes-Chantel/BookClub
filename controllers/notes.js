const Note = require('../../models/note');


module.exports = {
    index,
    delete: deleteOne,
    create,
    update
};

async function index(req, res) {
    try {
        const notes = await Note.find({});
        res.status(200).json(notes);
    } catch (err) {
        res.status(404).json(err)
    }
}

async function create(req, res) {
    console.log(req.user)
    try {
        req.body.userID = req.user._id
        const note = await Note.create(req.body);
        res.status(201).json(note);
    } catch (err) {
        res.status(404).json(err)
    }
}

async function deleteOne(req, res) {
    const deletedNote = await Note.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedNote);
}

async function update(req, res) {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedNote);