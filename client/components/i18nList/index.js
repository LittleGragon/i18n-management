import React from 'react';
import { Tabs, Table, Input } from 'antd';
import axios from 'axios';
const { TabPane } = Tabs;

class I18nList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      originalData: [],
      filterResult: [],
      keyword: ''
    };
  }
  handleGetData = async () => {
   return axios.get('/get/excel').then(response => {
    const result = this.handleFormatData(response.data);
    this.setState(state => ({ ...state, originalData: result }))
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
  handleKeyWordChange = e => {
    const { value } = e.target;
    this.setState(state => ({
      ...state,
      keyword: value,
    }));
  }
  handleFilter = (data, value) => {
    const result = data.map(originalData => {
      return {
        ...originalData,
        dataSources: originalData.dataSources.filter(item => {
          let isIn = false;
          Object.values(item).forEach(v => {
            if(typeof v === 'string'  && v.includes(value)) {
              isIn = true
            }
          });
          return isIn;
        })
      }
    }).filter(item => {
      return item.dataSources.length > 0 
    });
    return result;
  }
  handleSubmit = e => {
    e.preventDefault();
    const  { originalData, keyword } =this.state;
    const filterResult = this.handleFilter(originalData, keyword);
    this.setState(state => ({
      ...state,
      filterResult,
    }))
  }
  componentDidMount() {
    this.handleGetData();
  }
  render() {
    const { filterResult, originalData } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            placeholder="keyword"
            onChange={this.handleKeyWordChange}
          />
        </form>
        filter result
        {filterResult.map(item => {
          return (
            <Table
              key={item.title}
              columns={item.columns}
              dataSource={item.dataSources}
            />
          )
        })}
         <Tabs>
          {originalData.map(item => {
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