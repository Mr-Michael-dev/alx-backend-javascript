//  AppController class

class AppController {
  getHomepage(req, res) {
    res.statusCode = 200;
    res.send('Hello Holberton School!');
  };
}

module.exports = AppController;
