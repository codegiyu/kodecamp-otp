const Joi = require("joi");

const loginReqSchema = Joi.object({
    userName: Joi.string().required().messages({
        "any.required": "'userName' field is required"
    }),
    password: Joi.string().required().messages({
        "any.required": "'password' field is required"
    })
})

const registerReqSchema = Joi.object({
    email: Joi.string().email().required().messages({
        "string.email": "Your email is not valid",
        "any.required": "'email' field is required"
    }),
    userName: Joi.string().alphanum().min(3).max(20).required().messages({
        "string.alphanum": "'userName' field should contain alphanumeric characters only",
        "any.min": "userName should have at least 3 characters",
        "any.max": "userName should have at most 20 characters",
        "any.required": "'userName' field is required",
    }),
    password: Joi.string().min(6).max(25).required().messages({
        "any.min": "Password should have at least 6 characters",
        "any.max": "Password should have at most 25 characters",
        "any.required": "'password' field is required",
    }),
    phone: Joi.string().required().messages({
        "any.required": "'phone' field is required",
    })
})

const forgotPasswordReqSchema = Joi.object({
    email: Joi.string().email().required().messages({
        "string.email": "Your email is not valid",
        "any.required": "'email' field is required",
    })
})

const resetPasswordReqSchema = Joi.object({
    cipherText: Joi.string().required().messages({
        "any.required": "'cipherText' field is required"
    }),
    otp: Joi.string().alphanum().length(6).required().messages({
        "string.alphanum": "otp should contain alphanumeric characters only",
        "any.length": "otp should contain exactly 6 characters",
        "any.required": "'otp' field is required",
    }),
    newPassword: Joi.string().min(6).max(25).required().messages({
        "any.min": "Password should have at least 6 characters",
        "any.max": "Password should have at most 25 characters",
        "any.required": "'newPassword' field is required",
    })
})

const authSchemas = {
    loginReqSchema,
    registerReqSchema,
    forgotPasswordReqSchema,
    resetPasswordReqSchema
}

module.exports = authSchemas;