import React from 'react'
import {
  Navbar,
  Form,
  FormControl,
  Button
} from 'react-bootstrap'

const SearchBar = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Weather Report</Navbar.Brand>
        < Form inline onSubmit = {
          (e) => {
            e.preventDefault()
            props.onFormSubmit(props.zipcode, e)
          }
        } >
          <FormControl placeholder="Search" className="mr-sm-2" 
            type="text"
            value={props.zipcode}
            onChange={props.updateZip}
            />
          <Button type="submit" variant="outline-success">Search</Button>
        </Form>
    </Navbar>
    )
}

export default SearchBar