import * as Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).messages(
        {
            "string.pattern.base": "Input did not match pattern.",
        }
    ),
    price: Joi.number().min(0).max(1000000).required().messages({
        "number.min": "Value must be greater than zero.",
        "number.max": "Value must be less than one million.",
    }),
    year: Joi.number().min(1990).max(2025).required().messages({
        "number.min": "Value must be greater or equal 1990.",
        "number.max": "Value must be less or equal 2025.",
    }),
})