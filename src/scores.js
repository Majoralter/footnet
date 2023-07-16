let container;

window.addEventListener('load', () =>{
    const url = 'https://sportscore1.p.rapidapi.com/sports/1/events/live?page=1';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '137d625a5emsh8df72dccc573380p166623jsnc1aa2cf506a8',
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        }
    };

    fetch(url, options).then(response => response.json()).then(data => {
        let gameInfo = data.data

        gameInfo.forEach((/** @type {{ league: { name: any; slug: any; }; status_more: any; home_team: { logo: any; name: any; }; home_score: { current: any; }; away_score: { current: any; }; away_team: { name: any; logo: any; }; }} */ game) =>{
             container += `
                <div class="league">${game.league.name}(${game.league.slug})</div>
                <div class="scores-container">
                    <h4 class="time">
                         ${game.status_more}
                    </h4>
                    
                    <div class="home-team">
                    <img src=${game.home_team.logo}>

                    <h3 class="team-name">
                        ${game.home_team.name}
                    </h3>

                    <h2 class="team-score">
                        ${game.home_score.current}
                    </h2>
                    </div>

                    <div class="away-team">
                    <h2 class="team-score">
                    ${game.away_score.current}
                     </h2>

                    <h3 class="team-name">
                    ${game.away_team.name}
                    </h3>

                    <img src=${game.away_team.logo}>
                    </div>
                </div>
             `

             document.querySelector('.scores').innerHTML = container
        })         
    }).catch(err => console.log(err))
})