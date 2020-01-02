import React, { Component } from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

export default class SubComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            tableData:[],
            tableColumns:[],
            msg:'1'
            
        }
        this.fetchData = this.fetchData.bind(this);
    
    }
    componentWillMount(){
        

    }

    componentWillReceiveProps(nextProps){
        

    }
    fetchData(id) {
         let url = 'https://hawkaidata.net/api/data.php/home/getSheetHeaderAndData/';
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => this.setState({tableData:json.data,tableColumns:json.columns}))
      
    }
    render() {
        
        return (
            <div>
                    <h2>{this.props.rowId}</h2>
                    <ReactTable
                                      data={this.state.tableData}
                                      columns={this.state.tableColumns}
                                      defaultPageSize={3}
                                      showPagination={false}
                                      onFetchData={this.fetchData} 
                                      
                                    />
            </div>
        )
    }
}
