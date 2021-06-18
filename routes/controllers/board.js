module.exports = function (server) {
    server.get('/board', 
        async function(req, res) {
            res.render('template.ejs', {
                page_title: "pascere - board",
                page_file: "board",
                page_data: {

                }
            });
        }
    );
}
