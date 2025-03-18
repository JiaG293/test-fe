export const getShortName = (username) => {
    if (!username)
        return "??";
    return username.slice(0, 2).toUpperCase();
};
