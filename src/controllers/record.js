exports.getPost = (req, res) => {
    const { id } = req.params;

    res.status(200).send(`Record ${id} anzeige.`)
};

exports.updatePost(req, res) => {
    const { id } = req.params;

    res.status(200).json({
        message: `Record ${id} update.`, id
    })
};

exports.deletePost(req, res) => {
    const { id } = req.params;

    res.status(200).Json({
        message: `Record ${id} gelöscht.`
    })
};

router.route("api/records/:id")

.get(recordsController.getPost)
.put(recordsController.updatePost)
.delete(recordsController.deletePost);


module.exports = router;