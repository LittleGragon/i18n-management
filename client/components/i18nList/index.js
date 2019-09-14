import React from 'react';
import { Tabs, Table } from 'antd';
import axios from 'axios';
const { TabPane } = Tabs;

class I18nList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  handleGetData = async () => {
   console.log('get data');
   return axios.get('/get/excel').then(response => {
    console.log('response', response)
    this.setState(state => ({ ...state, data: response.data }))
   });
  }
  handleFormatData = data => {
    return data.map(item => {
      let columns = [];
      let datasources = [];
      const title = Object.keys(item)[0]
      const dataSources = Object.values(item)[0];

      console.log('data sources', dataSources);
      return {
        title,
      }
    })
 

  }
  componentDidMount() {
    this.handleGetData();
  }
  render() {
    const { data } = this.state;
    console.log('data', data)
    return (
      <div>
        table
        {/* <Tabs>
          {data.map(item => {
            const key = Object.keys(item)[0]
            const dataSources = Object.values(item)[0];
            console.log('data sources', dataSources);
            return(
            <TabPane tab={key} key={key}>
              
            </TabPane>
            )
          })} 
        </Tabs> */}
      </div>
    )
  }
};

export default I18nList