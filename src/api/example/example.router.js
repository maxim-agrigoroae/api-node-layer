/**
 * Represents an http requestable API interface for current module.
 *
 * @exports {Router} Collection of http routes.
 */

const ApiRouter = require('api-node-common/resources/router');

const ExampleBusinessService = require('./example.business')

const router = new ApiRouter();

// req.user = Current logget in user.

export default router
  .get('/', req => ExampleBusinessService.list(req.query))
  .get('/:id', req => ExampleBusinessService.getById(req.params.id))
  .post(
    '/',
    req => ExampleBusinessService.create(req.body)
  )
  .patch(
    '/:id',
    req => ExampleBusinessService.update(req.params.id, req.body),
  )
  .delete(
    '/:id',
    req => ExampleBusinessService.destroy(req.params.id),
  )
  .router();
