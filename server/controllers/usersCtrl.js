let app = require('../../server.js') ;
let db = app.get('db');
// import massive from 'massive';
// import config from '../../config';
// var  massiveInstance = massive.connectSync({connectionString: config.connectionString
// });
//
// app.set('db', massiveInstance);


// import Validator from 'validator';
// import isEmpty from 'lodash/isEmpty';
//
// import validateInput from '../shared/validations/signup';


// router.post('/', (req, res) => {
//   const {username, password, timezone, email} = req.body;
//   dom.create_user([username, password, timezone, email], function (err, result) {
//     if (err) {
//       res.status(500).send(err)
//     }else {
//       res.json({ success: true });
//     }
// })
// })

module.exports = {
    Create: function (req, res) {
      // let { errors, isValid } = validateInput(req.body);
    console.log('helo');
      // const {username, password, timezone, email} = req.body;
      db.create_user([req.body.username, req.body.password, req.body.timezone,
         req.body.email], function (err, result) {
        if (err) {
          res.status(500).send(err)
        }else {
          res.json(result);
        }

      })
    }
}
