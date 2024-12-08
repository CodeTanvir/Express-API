const handler = (req, res) => {
    console.log(req.get('content-type'));
    res.send('hello nuisters')
}

module.exports = handler;