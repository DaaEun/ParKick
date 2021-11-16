const router = require('express').Router();

const controller = require('./parklot.controller');

router.get('/', controller.index);
// 모든 주차장 목록 조회
router.post('/', controller.create);

router.get('/no/:no', controller.readno);

router.get('/id/:id', controller.readid);

router.delete('/no/:no', controller.deleteno);

router.delete('/id/:id', controller.deleteid);

router.post('/:no/:user', controller.writecom);

router.put('/:no/:comid', controller.updatecom);

router.delete('/:no/:comid', controller.deletecom);

router.get('/inclike/:id', controller.inclike);
router.get('/declike/:id', controller.declike);
router.get('/incdislike/:id', controller.incdislike);
router.get('/decdislike/:id', controller.decdislike);

module.exports = router;