const router = require('express').Router();
const { Message, Author } = require('../db/models');

module.exports = router;

router.get('/', function (req, res, next) {
  Message.findAll()
    .then(messages => res.json(messages))
    .catch(next);
});

router.post('/', function (req, res, next) {

  // findOrCreate author by name for test purposes
  Author.findOrCreate({
    where: {
      name: req.body.name || 'Cody'
    }
  })
  .spread(author => {
    const message = Message.build(req.body);
    message.setAuthor(author, { save: false });
    return message.save()
      .then(message => {
        message = message.toJSON();
        message.author = author;
        return message;
      });
  })
  .then(message => {
    res.json(message);
  })
  .catch(next);

});

router.put('/:messageId', function (req, res, next) {
  const messageId = req.params.messageId;

  Message.findById(messageId)
    .then(message => message.update(req.body))
    .catch(next);
});

router.delete('/:messageId', function (req, res, next) {
  const id = req.params.messageId;

  Message.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});