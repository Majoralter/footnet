let  container = "";

window.addEventListener('load', () =>{
    const url = 'https://sportscore1.p.rapidapi.com/sports/1/events/live?page=1';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '17ef089635msh308d7b3ccbd5643p17f528jsn3b1ae12b6853',
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        }
    };

    fetch(url, options).then(response => response.json()).then(data => {
        console.log(data)
        let gameInfo = data.data

        gameInfo.forEach((/** @type {{ league: { name: any; slug: any; }; status_more: any; home_team: { logo: any; name: any; }; home_score: { current: any; }; away_score: { current: any; }; away_team: { name: any; logo: any; }; }} */ game) =>{
             container += `
                <div class="league">${game.league.name}(${game.league.slug})</div>
                <div class="scores-container">
                    <h4 class="time">
                         ${game.status_more}*
                    </h4>
                    
                    <div class="home-team">
                    <img src=${game.home_team.logo}>

                    <h3 class="team-name">
                        ${game.home_team.name}
                    </h3>
                    </div>
                    <h2 class="team-score">
                        ${game.home_score?.current ?? "TBD"}
                    </h2>
                    

                    <h2 class="team-score">
                    ${game.away_score?.current ?? "TBD"}
                     </h2>

                     <div class="away-team">
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