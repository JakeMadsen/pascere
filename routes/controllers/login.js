const passport = require('passport')

module.exports = (server) => {
    server.get('/login', async (req, res) => {
        if(typeof req.user != 'undefined')
            res.redirect('/loginRedirect')

        else
        res.render('template.ejs', {
            page_title: "pascere - Sign in/up",
            page_file: "login",
            page_data: {
                login_error: req.flash(),
                signup_error: req.flash()
            },
            user: req.user
        });
    });

    server.post('/login',
        passport.authenticate('local-login', {
            successRedirect: '/loginRedirect', 
            failureRedirect: '/login', 
            failureFlash: true 
        })
    );

    server.post('/signup',
        passport.authenticate('local-signup', {
            successRedirect: '/loginRedirect', 
            failureRedirect: '/login', 
            failureFlash: true 
        })
    );

    server.get('/logout', (req, res) => {

            req.logout();
            res.redirect('/login');
    });

    server.get('/loginRedirect', (req, res) => {
        if(typeof req.user != 'undefined'){
            res.redirect(`/`)
        }
            
        else
            res.redirect('/login')
    })
}
