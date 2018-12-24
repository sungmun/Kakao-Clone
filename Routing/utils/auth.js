export const setToken = token => {
    if (!window) return err;
    window.localStorage.setItem("token", token);
};

export const getToken = () => (!window ? err : window.localStorage.token);

export const unsetToken = () => {
    if (!window) return err;
    window.localStorage.removeItem("token");
};
