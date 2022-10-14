const handleError = (res, err) => {
    res.status(500);
    return res.json({err: err.message})
}

module.exports = { handleError }