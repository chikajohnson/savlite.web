import jwtMiddlewares from './jwt-middleware';
import redirectMiddlewares from './redirect-middleware';

export default [
    jwtMiddlewares,
    redirectMiddlewares
]