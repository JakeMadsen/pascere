const isLoggedIn = require('../middleware/isLoggedIn')

module.exports = function (server) {
    
    server.get('/admin', isLoggedIn, (req, res) => {
            res.render('admin-template.ejs', {
                page_title: "pascere - Admin",
                page_file: "admin",
                page_data: {

                },
                user: req.user
            });
        }
    );

    server.get('/admin/boards', isLoggedIn, (req, res) => {
            res.render('admin-template.ejs', {
                page_title: "pascere - Boards",
                page_file: "admin-boards",
                page_data: {

                },
                user: req.user
            });
        }
    );
}
