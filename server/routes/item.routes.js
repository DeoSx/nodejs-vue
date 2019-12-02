const { Router } = require('express');
const Item = require('../model/Item');
const router = Router();

router.post('/create', async (req, res) => {
  try {
    const item = new Item({
      title: req.body.title,
      text: req.body.text
    });

    await item.save();
    res.status(201).json(item);
  } catch (e) {
    console.log(e);
  }
});
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (e) {
    console.log(e);
  }
});

router.get('/edit/:id', async (req, res) => {
  try {
    const item = await Item.findById({ _id: req.params.id });
    res.json(item);
  } catch (e) {
    console.log(e);
  }
});

router.put('/edit/:id', async (req, res) => {
  try {
    const $set = {
      title: req.body.title,
      text: req.body.text
    };
    const item = await Item.findOneAndUpdate({ _id: req.params.id }, { $set });
    res.json(item);
  } catch (e) {
    console.log(e);
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete({_id: req.params.id})
    console.log(item)
    res.json(item)
  } catch (e) {
    console.log(e)
  }
})

module.exports = router;
