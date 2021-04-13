
export const ADD_FEATURES = "ADD_FEATURES";
export const addFeatures = (newFeature) => {
    return { type: ADD_FEATURES, payload:newFeature };
}


export const REMOVE_FEATURES = "REMOVE_FEATURES";
export const removeFeatures = (oldFeature) => {
    return { type: REMOVE_FEATURES, payload:oldFeature };
}
