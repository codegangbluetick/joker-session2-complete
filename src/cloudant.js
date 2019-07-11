const Cloudant = require('@cloudant/cloudant');
const https = require('https');

const dbUrl =
  'https://91d8d4cd-36ca-46ad-897e-ecc121be24a5-bluemix.cloudant.com';
const dbUser = '91d8d4cd-36ca-46ad-897e-ecc121be24a5-bluemix';
const dbPassword =
  '650e97a00295d56910ae4ff6f4bf696d294847abaf44f2ec9ef3bd41df58fdcb';
const database = 'jokes';

let url = '';
if (dbUrl && dbUser && dbPassword)
  url = dbUrl.replace('://', `://${dbUser}:${dbPassword}@`);

const agent = new https.Agent({
  secureProtocol: 'TLSv1_2_method',
  keepAlive: true,
});

const db = Cloudant({
  url,
  plugins: 'promises',
  requestDefaults: { agent },
}).db.use(database);

const getById = async id => {
  const response = await db.get(id);
  return response;
};

const add = async item => {
  const response = await db.insert(item);
  return response;
};

module.exports = {
  getById,
  add,
};
