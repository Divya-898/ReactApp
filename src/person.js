import PropTypes from 'prop-types'

function person(props){
    return(
        <>
        <h1>{props.name} lives here</h1>
        <h1>{props.age}</h1>
        <h1>{props.isMarried.toString()}</h1>
        <h1>{String(props.isMarried)}</h1>
        <h1>{props.arr}</h1>
        <h1>{props.arr[0]}</h1>
        
        </>
    );
}
person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  arr: PropTypes.array
}
export default person;
