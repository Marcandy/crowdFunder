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
      console.log('here')
      const {title, shortBlurb ,description} = req.body;
      var category = '';
      var location = '';
      var category = '';
      var funding_duration = '';
      var goal= 0;
      var image= '';
      var video= '';
      var risks_challenges= '';
      var user_id = 4; //for test atm


      db.create_project([title, shortBlurb, category, location, funding_duration, goal, image, video, description, risks_challenges, user_id], function (err, result) {
        if (err) {
          console.log(err)
          res.status(500).send(err)
        }else {
          res.status(200).json(result);
        }

      })
    }
}
