const createError = require('http-errors');
const Role = require('../../db/models/role');

module.exports = (req, res, next) => {

    if(!req.user)
        throw new Error (createError(401, "You need to login to view this page."))

    if(req.user.permissions.user_role == "" || req.user.permissions.user_role == null || req.user.permissions.user_role == "undefined")
        throw new Error (createError(403, "You don't have permission to view this page."))

    Role.findById(req.user.permissions.user_role, (error, role ) => {
        if(role.role_permissions.admin == false || role.role_permissions.moderator == false)
            throw new Error (createError(403, "You don't have permission to view this page."))

        if (role.role_permissions.admin == true || role.role_permissions.moderator == true)
            return next();

    })
}

