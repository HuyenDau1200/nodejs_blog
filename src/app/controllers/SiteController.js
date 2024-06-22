const Course = require('../models/Course');
class SiteController {

    //use async/await 
    //[GET] /
    // async index(req, res, next) {
      // try {
      //   const courses = await Course.find({});

      //   res.json(courses);
      // } catch (error) {
      //   res.json({error: 'ERROR!'});
      // }
        
        // res.render('home');
    // }

    //using promise
    //[GET] /
    index(req, res, next) {
      Course.find({})
          .then(courses => res.json(courses))
          .catch(next);
        
        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
      res.render('search');
    }
}
module.exports = new SiteController;