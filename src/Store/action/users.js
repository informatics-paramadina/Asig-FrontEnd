import { POPULATE_PROFILE } from "Constant/Type/user";

export const populateProfile = (profile = {}) => ({
    type: POPULATE_PROFILE,
    payload: profile
})