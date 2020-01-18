const apiRouter = require('express').Router();
module.exports = apiRouter;

apiRouter.get('/menus', (req, res, next) => {
    res.send('At API get route');
    console.log('At API get route...');
});

