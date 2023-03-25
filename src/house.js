import Person from './person'
const friends = ["Amit", "Zain", "Kumar", "Ali"]
function house(){
    return(
        <Person name="mohit" age={20} isMarried={false} arr={friends}></Person>
    );
}
export default house;