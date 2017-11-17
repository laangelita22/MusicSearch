var MusicSearch = (function () {


    var songs = [];

    function MusicSearch() {


    };

    MusicSearch.prototype.getResults = function (searchTerm, limit, callback) {

        searchTerm = encodeURIComponent(searchTerm);
        var apiUrl = `https://itunes.apple.com/search?term=${searchTerm}&limit=${limit}`;
        var url = `http://bcw-getter.herokuapp.com/?url=` + encodeURIComponent(apiUrl);

        $.getJSON(url, function (data) {
            var songList = data.results.map(function (song) {
                return {
                    title: song.trackName,
                    albumArt: song.artworkUrl60,
                    artist: song.artistName,
                    collection: song.collectionName,
                    price: song.collectionPrice,
                    preview: song.previewUrl
                }
            });
            // console.log("data:", data);
            console.log("songList", songList);
            callback(songList);
        });
    };

    return MusicSearch;
})();
