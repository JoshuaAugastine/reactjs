import React from 'react';

const mylist = ['peter', 'sachin', 'kevin', 'dhoni', 'alisa'];
const listitems = mylist.map((mylist) => {
    return <li>{mylist}</li>
});

class List extends React.Component{
    render(){
        return(
            <div>
                <ul>{}</ul>
            </div>
        )
    }
}

export default List;