const request = require("request");
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();
const EXT_API_URL = "https://xivapi.com/patchlist"
const EXT_API_KEY = "?private_key=9614154b7b824f93ae5306ca63f4201e0d8b8ffb00d943db86e94b18b6d18faf"

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

router.get('/getData', (req, res) => {
    request({
        uri: EXT_API_URL + EXT_API_KEY
    }).pipe(res);
    return res
    });

app.use('/api', router);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));