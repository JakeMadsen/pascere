module.exports = function (server) {
    console.log('* Index Routes Loaded Into Server');
    
    server.get('/admin', 
        async function(req, res) {
            res.render('admin-template.ejs', {
                page_title: "pascere - Admin",
                page_file: "admin",
                page_data: {

                }
            });
        }
    );

    server.get('/admin/boards', 
        async function(req, res) {
            res.render('admin-template.ejs', {
                page_title: "pascere - Boards",
                page_file: "admin-boards",
                page_data: {

                }
            });
        }
    );
}
