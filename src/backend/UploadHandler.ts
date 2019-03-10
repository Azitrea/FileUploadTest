import * as express from 'express';
import * as multer from 'multer';
import * as path from 'path';
import * as bodyParser from 'body-parser';
export const uploadHandler = express.Router();


uploadHandler.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send('Hello');
});

uploadHandler.use(bodyParser.json());
uploadHandler.use(bodyParser.urlencoded({extended: true}));

const DIR = './uploads';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
  }
});

const upload = multer({storage});

uploadHandler.post('/upload', upload.array('photo', 12), (req, res) => {
  if (!req.files) {
    console.log('No file received');
    return res.send({
      success: false
    });

  } else {
    console.log('file received');
    return res.send({
      success: true
    });
  }
});
