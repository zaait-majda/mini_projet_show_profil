//import { extname } from 'path';
export const editFileName=(req, file, callback) => {
    const name = file.originalname;
    const fileExtName = 'nom';//extname(file.originalname);

    callback(null, `${name}`);
  };

