const multer	=	require('multer')

const storage	=	multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads')
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now())
  }
})

exports.upload = multer({ storage : storage }).array('images', 1)
