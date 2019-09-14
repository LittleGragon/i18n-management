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
   return axios.get('/get/excel').then(response => {
    const result = this.handleFormatData(response.data);
    this.setState(state => ({ ...state, data: result }))
   });
  }
  handleFormatData = data => {
    const list = [];
    for (let [key, value] of Object.entries(data)) {
      let title = key;
      let [columnKeys, ...dataList] = value;
      columnKeys = columnKeys.filter(item => item)
      let columns = columnKeys.map(item => {
        return {
          key: item,
          dataIndex: item,
          title: item,
        }
      });

      let dataSources = dataList.filter(item => item).map((item, index) => {
        let object = {};
        for(let i = 0; i < item.length; i++) {
          const key = columnKeys[i];
          object[key]=item[i]
        }
        return object;
      });
      list.push({
        title,
        dataSources,
        columns,
      })
    }
    return list;

  }
  componentDidMount() {
    this.handleGetData();
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <Tabs>
          {data.map(item => {
            return(
            <TabPane tab={item.title} key={item.title}>
              <Table
                columns={item.columns}
                dataSource={item.dataSources}
              />
            </TabPane>
            )
          })} 
        </Tabs>
      </div>
    )
  }
};

export default I18nList