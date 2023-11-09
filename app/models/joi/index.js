const { 
    loginReqSchema, 
    registerReqSchema, 
    forgotPasswordReqSchema,
    resetPasswordReqSchema
} = require("./authSchemas");


module.exports = {
    "v1/auth/login": loginReqSchema,
    "v1/auth/register": registerReqSchema,
    "v1/auth/forgot-password": forgotPasswordReqSchema,
    "v1/auth/reset-password": resetPasswordReqSchema,
}