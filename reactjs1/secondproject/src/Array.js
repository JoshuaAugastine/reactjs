function Array(){
    const items = ['pen', 'book', 'table', 'board', 'bottle'];
    return(
    <div>
        <ul>
            {items.map((item,i) => (
                <li key='{i}'>{item}</li>
            ))}

        </ul>
        </div>
   )
}

export default Array;

