import Joi from 'joi';

const create = Joi.object({
  name: Joi.string().required(),
  country: Joi.string().required(),
  birth_date: Joi.string().required(),
});

export default { create };
