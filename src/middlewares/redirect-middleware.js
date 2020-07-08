const redirectMiddleware = store => next => action => {

    const { hash } = window.location;
    if (hash.endsWith("login") || hash.endsWith("register")) {
        const auth = window.localStorage.getItem('jwt');

        if (auth) {
            window.location.hash = "#/games";
        }
    }

    next(action);
};

export default redirectMiddleware;