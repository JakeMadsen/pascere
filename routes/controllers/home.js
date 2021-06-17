module.exports = function (server) {
    console.log('* Index Routes Loaded Into Server');
    
    server.get('/', 
        async function(req, res) {
            res.render('template.ejs', {
                page_title: "pascere - home",
                page_file: "home",
                page_data: {

                }
            });
        }
    );
}
