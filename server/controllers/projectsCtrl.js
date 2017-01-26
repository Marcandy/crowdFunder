let app = require('../../server.js') ;
let db = app.get('db');

module.exports = {
    GetAll: function (req, res) {
      db.get_projects(function (err, result) {
        if (err) {
          res.status(500).send(err)
        }else {
          res.status(200).json(result);
        }

      })
    },

    Create: function (req, res) {
      //  const {title, shortBlur, category, location, funding_duration, goal, image, video, description, risks_challenges, user_id} = req.body;
      //
      const {title, shortBlur,user_id} = req.body;
      const category = '';
      const location = '';


      db.create_project([title, shortBlur, category, location, funding_duration, goal, image, video, description, risks_challenges, user_id], function (err, result) {
        if (err) {
          res.status(500).send(err)
        }else {
          res.status(200).json(result);
        }

      })
    }
}
