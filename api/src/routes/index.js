const { Router } = require('express');
const mercadolibreRouter = require("./mercadolibre")
const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use("/mercadolibre",mercadolibreRouter)


module.exports = router;