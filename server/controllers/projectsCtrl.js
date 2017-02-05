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
      let {title, shortblurb, category, location, funding_duration, goal, image, video, description, risks_challenges, about_us, user_id, totalfund} = req.body;

      if(!location) {
        location = '';
      }
      if(!funding_duration) {
        funding_duration = '';
      }
      if(!goal) {
        goal = 0;
      }
      if(!image) {
        image = '';
      }
      if(!video) {
        video = '';
      }
      if(!description) {
        description = '';
      }
      if(!risks_challenges) {
        risks_challenges = '';
      }
      if(!user_id) {
        user_id = 1;
      }
      if(!about_us) {
        about_us = '';
      }
      if(!totalfund) {
        totalfund = 0;
      }


      db.create_project([title, shortblurb, category, location, funding_duration, goal, image, video, description, risks_challenges, user_id, totalfund,  about_us], function (err, result) {
        if (err) {
          console.log(err)
          res.status(500).send(err)
        }else {
          res.status(200).json(result);
        }

      })
    }
}
