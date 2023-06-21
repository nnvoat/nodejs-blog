const Courses = require("../models/Courses.js");
const { multipleMongooseToObject } = require("../../util/mongoose.js");

class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Courses.find({})
      .then((courses) => {
        res.render("me/stored-courses", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
