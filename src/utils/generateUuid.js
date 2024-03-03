import { v4 as uuidv4 } from "uuid";

export const generateUuid = (state) => {
    const uuid = uuidv4();
    return uuid;
};
