var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
  res.status(200).json({success:true, msg:'show all the bootcamps'});
});

router.post('/', (req, res) => {
  res.status(200).json({success:true, msg:'creat a new bootcamp'});
  console.log(req.body);
}); 

router.put('/:id', (req, res) => {
  res.status(200).json({success:true, msg:`update the bootcamp ${req.params.id}`});
}); 

router.delete('/:id', (req, res) => {
  res.status(200).json({success:true, msg:`delete the bootcamp ${req.params.id}`});
}); 

module.exports = router;