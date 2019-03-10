import * as express from 'express';
import { uploadHandler } from './UploadHandler';
import * as cors from 'cors';

const app = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use('/', uploadHandler);

// start our server on port 4201
app.listen(4201, 'localhost', () => {
  console.log('Server now listening on 4201');
});
