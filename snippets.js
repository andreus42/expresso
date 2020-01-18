// expressparams

// GET ROUTE handler
app.get('/', (req, res, next) => {
    const artistId = req.params.artistId;
    const name = req.body.issue.name;

    const artistSql = "SELECT * from artist WHERE artist.id = artistId";
    const artistValues = { $artistId: artistId,
        $name: name,
    };

    db.get(artistSql, artistValues, (error, artist) => {
    if (error) {
        next(error);
    } else if (artist) {
        req.artist = artist;
        res.sendStatus(200)
    } else {
        return res.sendStatus(400);
    }

});

app.get('/', (req, res, next) => {
  const artistSql = "SELECT * from artist";
  
  db.get(artistSql, artistValues, (error, artist) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json({ artist: artist });
    }
  }
});