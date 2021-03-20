'use strict';

module.exports = (capability) => {
  return (req, res, next) => {
    console.log(req.user);
    if(req.user.cabilioties.includes(capability)) {
      next();
    } else {
      throw new Error('improper access');
    }
  };
};
