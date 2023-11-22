import React, { Component } from 'react';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"

class Table extends Component{
    render(){
        const data = [{
            name : 'ayaan',
            age : 26
        },{
            name : 'ahana',
            age : 22
        },{
            name : 'peter',
            age : 40
        },{
            name : 'virat',
            age : 32
        },{
            name : 'rohit',
            age : 30
        },{
            name : 'dhoni',
            age : 37
        },{
            Header : 'Employee Age',
            accessor : 'age'
        }]

        const columns =[{Header : 'name', accessor : 'name'}, {Header : 'age', accessor : 'age'}]

        return(
            <div>
                <ReactTable
                  data = {data}
                  columns={columns}
                  defaultPageSize = {2}
                  pageSizeOptions = {[2,4,6]} />
            </div>
        )
    }
}
export default Table;