const Course = require('../models/Course');

const { mutipleMongooseToObject } = require('../../util/mongoose');
class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug})
            .then(course => {
                res.render('courses/show', course);
            })
            .catch(next);
    }
}
module.exports = new CourseController;