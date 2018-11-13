import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavigationBar = (props) => {
  let filtered = props.games.filter(game => parseInt(props.searchTerm) >= parseInt(game.release_date.slice(-4)))
  filtered = filtered.length === 0 ? props.games : filtered

  return (
    <div id="NavigationBar">
      {
        filtered.map(game => <div key={game.id} className="linkToGame"><NavLink to={`/games/${game.id}`}>{game.title}</NavLink></div>)
      }
    </div>
  )
}
