import multer from "multer";

// configure multer for disk storage
export const upload = multer({storage:multer.diskStorage({})})