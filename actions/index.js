
export const SET_LANGUAGE_PREF = 'set_language_pref';
export const SET_CURRENT_SIGHT = 'set_current_sight';

export const setLangPref = (data) => {
    return {
        type: SET_LANGUAGE_PREF,
        payload: data
    }
};

export const setCurrentSight = (data) => {
    return {
        type: SET_CURRENT_SIGHT,
        payload: data
    }
};