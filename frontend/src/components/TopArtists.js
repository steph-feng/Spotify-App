export function TopArtists(props) {
    return (
        <div className="topContainer" id="topArtistsContainer">
            <div className="titleContainer">
                <h1 className="subtitle">your top artists</h1>
            </div>
            <div className="topItemsContainer" id="artistsContainer">
                <div className="grid">
                    {props.results.items.map(
                        (item, index) =>
                            <div className="topItem">
                                <div className="item">
                                    <p className="mainText artistsText">{index + 1}. {item.name}</p>
                                </div>
                            </div>
                    )}
                </div>

                <div id="arrowWrapper">
                    <a href="#topTracksContainer">
                        <button className="downArrow"></button>
                    </a>
                </div>

            </div>
        </div>
    )
}


export async function fetchTopArtists() {
    let token = localStorage.getItem('access_token');
    const response = await fetch('https://api.spotify.com/v1/me/top/artists?limit=10&time_range=short_term', {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` }
    });

    return await response.json();
}

