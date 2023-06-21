const Course = require("../models/Courses.js");

const { multipleMongooseToObject } = require("../../util/mongoose.js");

class SiteController {
  // [GET] /
  home(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch((err) => next(err));
    // cacth(next);
    // res.render('home');
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
