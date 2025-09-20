import multer from " multer";

// upload → an instance of multer you can use as middleware in your routes.
export const upload = multer({ storage: multer.diskStorage({}) }) // tells multer to store uploaded files directly on your disk (in a folder like /uploads by default, unless you customize it).

