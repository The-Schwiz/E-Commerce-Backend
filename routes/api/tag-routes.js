const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// get all tags
router.get('/', (req, res) => {
  Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag
        }
      ]
    })
    .then((tags) => res.status(200).json(tags))
    .catch((err) => res.status(500).json(err));
});

// get one tag by id
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        through: ProductTag
      }
    ]
  })
    .then((tag) => {
      if (!tag) {
        res.status(404).json({ message: 'No tag with that id found!' });
        return;
      }
      res.status(200).json(tag);
    })
    .catch((err) => res.status(500).json(err));
});

// create a new tag
router.post('/', (req, res) => {
  Tag.create(req.body)
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(400).json(err));
});

// update a tag by id
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(400).json(err));
});

// delete a tag by id
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((tag) => {
      if (!tag) {
        res.status(404).json({ message: 'Sorry, there is no tag with that ID' });
        return;
      }
      res.status(200).json(tag)
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
