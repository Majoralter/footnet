window.addEventListener('load', () =>{
       let searchBtn = document.querySelector('.search-btn')
       let totalGoals = 0,
       totalAssists = 0,
       totalShots = 0,
       totalRedCards = 0,
       totalYellowCards = 0,
       totalMatches = 0,
       statsContainer = document.querySelector('.player-stats')

    searchBtn.addEventListener('click', () =>{
        let inputName = document.querySelector('.player-name')
        // @ts-ignore
        let inputNamevalue = inputName.value

        
    const base = `https://sportscore1.p.rapidapi.com/players/search?locale=en&name=${inputNamevalue}&position=F`,
    baseoptions  = {
      method: 'POST',
      headers: {
          'X-RapidAPI-Key': '17ef089635msh308d7b3ccbd5643p17f528jsn3b1ae12b6853',
          'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
      }
  }

        

        fetch(base,baseoptions).then(response => response.json()).then(data => {
            console.log(data)

            let playerId = data.data[0].id

            // @ts-ignore
            document.querySelector('.img').src = data.data[0].photo


            const url = `https://sportscore1.p.rapidapi.com/players/${playerId}/statistics?page=1`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '17ef089635msh308d7b3ccbd5643p17f528jsn3b1ae12b6853',
                    'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
                }
            }

            fetch(url,options).then(response => response.json()).then(data => {
                console.log(data)
                    let stats = data.data

                    stats.forEach(stat => {
                        let goals =  Number(stat.details[1]?.goals ?? 0),
                            assists = Number(stat.details[2]?.assists?? 0),
                            matches = Number(stat.details[0]?.matches_total ?? 0),
                            yellowcards = Number(stat.details[5]?.yellow_cards ?? 0),
                            redcards = Number(stat.details[5]?.red_cards ?? 0)


                            totalGoals += goals
                            totalAssists += assists
                            totalMatches += matches
                            totalYellowCards += yellowcards
                            totalRedCards += redcards

                            statsContainer.innerHTML = `
                            <p>All stats date from 2020</p>
                            <h3><strong>Goals:</strong><span>${totalGoals}</span></h3>
                            <h3><strong>Assists:</strong><span>${totalAssists}</span></h3>
                            <h3><strong>Matches:</strong><span>${totalMatches}</span></h3>
                            <h3><strong>Yellow cards:</strong><span>${totalYellowCards}</span></h3>
                            <h3><strong>Red cards:</strong><span>${totalRedCards}</span></h3>
                        `
                    })
            })
        })
})
})