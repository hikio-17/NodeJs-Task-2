const getBiodata = (req, res) => {
  const user = {
    nama: 'Fajri Muhammad Tio',
    tmpLahir: 'Lawang Agung',
    tglLahir: '6 Januari 2000',
    alamat: 'Jl.Depati Parbo Kota Sungai Penuh',
  };

  res.json({
    status: 'success',
    data: {
      nama: req.query.nama || user.nama,
      'tempat-lahir': req.query['tempat-lahir'] || user.tmpLahir,
      'tanggal-lahir': req.query['tanggal-lahir'] || user.tglLahir,
      alamat: req.query.alamat || user.alamat,
    },
  });
};

const postBiodata = (req, res) => {
  const {
    nama, tmpLahir, tglLahir, alamat,
  } = req.body;

  if (nama === '' || tmpLahir === '' || tglLahir === '' || alamat === '') {
    res.status(400).json({
      status: 'false',
      message: "Can't be empty data.",
    });
    return;
  }

  res.status(201).json({
    status: 'success',
    data: {
      nama,
      'tempat-lahir': tmpLahir,
      'tanggal-lahir': tglLahir,
      alamat,
    },
  });
};

const getBiodataView = (req, res) => {
  const user = {
    nama: 'Fajri Muhammad Tio',
    tmpLahir: 'Lawang Agung',
    tglLahir: '6 Januari 2000',
    alamat: 'Jl.Depati Parbo Kota Sungai Penuh',
  };

  const data = {
    nama: req.query.nama || user.nama,
    'tempat-lahir': req.query['tempat-lahir'] || user.tmpLahir,
    'tanggal-lahir': req.query['tanggal-lahir'] || user.tglLahir,
    alamat: req.query.alamat || user.alamat,
  };

  res.render('biodata', {
    data,
  });
};

const postBiodataView = (req, res) => {
  const {
    nama, tmpLahir, tglLahir, alamat,
  } = req.body;

  const data = {
    nama,
    'tempat-lahir': tmpLahir,
    'tanggal-lahir': tglLahir,
    alamat,
  };

  res.render('biodata', {
    data,
  });
};

module.exports = {
  getBiodata,
  postBiodata,
  getBiodataView,
  postBiodataView,
};
