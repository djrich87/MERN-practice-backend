import { Router } from 'express'
import * as fishesCtrl from '../controllers/fishes.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

router.use(decodeUserFromToken)

router.get('/', checkAuth, fishesCtrl.index)
router.post('/', checkAuth, fishesCtrl.create)
router.put('/:id', checkAuth, fishesCtrl.update)
router.delete('/:id', checkAuth, fishesCtrl.delete)
router.get('/:id', checkAuth, fishesCtrl.show)


export {
  router
}
