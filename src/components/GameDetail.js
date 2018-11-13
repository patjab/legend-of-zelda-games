import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class GameDetail extends Component {
  render() {
    const gameObj = this.props.games.find(game => game.id === parseInt(this.props.match.params.id))

    if ( gameObj ) {
      const {
        title,
        release_date,
        platform,
        image,
        dungeons
      } = gameObj

      return (
        <div id="gameDetailContainer">
          <h3>{ title }</h3>
          <div id="gameDetailGrid">
            <div id="gameMetaGrid">
              <p><img src={image} style={{width: '30vmin'}} alt={title}/></p>
              Release Date: { release_date }<br/>
              Platform: { platform }<br/>
            </div>
            <div id="gameDungeonsGrid">
              <ul>
              {
                dungeons ?
                    dungeons.map(dungeon => (
                        <details key={dungeon.name}>
                          <summary>{dungeon.name}</summary>
                          {dungeon.boss ? <p className="boss">Boss: {dungeon.boss}</p> : null}
                          {dungeon.treasure ? <p className="treasure">Treasure: {dungeon.treasure}</p> : null}
                          </details>
                    ))
                :
                  null
              }
              </ul>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div>Please chose a valid game</div>
    )
  }
}

export default withRouter(GameDetail)
