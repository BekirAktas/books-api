import Joi from 'joi';

const create = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  price: Joi.number().required(),
  ISBN: Joi.string().required(),
  language: Joi.string().required(),
  number_of_pages: Joi.number().required(),
  publisher: Joi.string().required(),
});

export default { create };
