const Cloudant = require('@cloudant/cloudant');
const https = require('https');

const dbUrl = '';
const dbUser = '';
const dbPassword = '';
const database = '';

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
