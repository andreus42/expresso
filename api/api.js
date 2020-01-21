const apiRouter = require('express').Router();
module.exports = apiRouter;

apiRouter.get('/menus', (req, res, next) => {
    res.send('At API get route');
});

const employeeRouter = require('./employee');
apiRouter.use('/employee', employeeRouter);

const menuRouter = require('./menu');
apiRouter.use('/menu', menuRouter);

