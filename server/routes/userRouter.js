const router = require('express').Router();

function userRouter(app) {

    router.get('/', (req, res) => {
        app.render(req, res, '/', req.query);
    });


    return router;

}


module.exports = userRouter;