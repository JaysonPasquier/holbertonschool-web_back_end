/**
 * Controller for the app routes.
 */
class AppController {
  /**
   * Handles the homepage route.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   */
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
