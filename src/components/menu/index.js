import React, { Fragment } from 'react'
import Section from './Section'
import './menu.css'

const API_URL = 'https://restaurant-api-js01lc-app.ue.r.appspot.com'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      menu: []
    }
  }
  componentDidMount() {
    // setTimeout(() => {
    fetch(API_URL + '/menu')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ isLoaded: true, menu: data })
      })
      .catch(err => console.log('Error fetching menu: ' + err))
    // }, 6000)
  }
  render() {
    let { isLoaded, menu } = this.state
    return (
      <Fragment>
        <h1>Our Lucky #1 Menu</h1>
        {isLoaded
          ? menu.map((section, index) => {
            return (
              <Section
                key={index}
                items={section.items}
                name={section.category} />
            )
          })
          : <p>Fetching Lucky Menu...</p>
        }
      </ Fragment>
    )
  }
}

export default Menu