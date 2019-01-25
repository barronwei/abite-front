import React from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'
import { TextInput } from 'grommet'

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: ''
    }
  }

  handleChange = address => {
    this.setState({ address })
    this.props.onHome('hometown', address)
    this.props.onHome('select', false)
    // console.log(this.props.hometown)
    // console.log(this.props.select)
  }

  //-------------------------------------------------------------------------------
  handleSelect = address => {
    this.setState({ address })
    this.props.onHome('hometown', address)
    this.props.onHome('select', true)
    // console.log(this.props.hometown)
    // console.log(this.props.select)
    // console.log(address)
    // geocodeByAddress(address)
    //   .then(results => getLatLng(results[0]))
    //   .then(latLng => console.log('Success', latLng))
    //   .catch(error => console.error('Error', error))
  }
  //-------------------------------------------------------------------------------

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        searchOptions={this.searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <TextInput
              {...getInputProps({
                placeholder: 'Town',
                size: 'medium'
              })}
            />
            <div className="autocomplete-dropdown-container">
              {suggestions.slice(2).map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item'
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' }
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    )
  }
}

export default LocationSearchInput
