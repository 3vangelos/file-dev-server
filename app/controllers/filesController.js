const upload = require('../helpers/storageHelper').upload

exports.save = function (req, res) {
  upload(req,res, (err) => {
    if(err || !req.files) {
      res.json({ success: false })
    } else {
      res.json({ success: true, url: req.files[0] })
    }
  })
}
