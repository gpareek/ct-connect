import { Router } from 'express';
import { logger } from '../utils/logger.utils.js';

const serviceRouter = Router();

serviceRouter.post('/', async (req, res) => {
  logger.info('Cart update extension executed');
  res.status(200);
  res.send();
});

serviceRouter.get('/sayHello', async (req, res) => {
  logger.info('Hello from Mindcurv');
  res.status(200);
  res.send('<p>Hello from Mindcurv.</p>');
});

export default serviceRouter;
