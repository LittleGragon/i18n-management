import React from 'react';
// import Upload from '$components/upload';
import I18nList from './complex/i18nList';
import { Upload, Button, Icon } from 'antd'
class Home extends React.Component {
  handleChange = info => {

  }
  render() {
    return (
      <div>
        home
        <Upload
          action="/upload/excel"
          onChange={this.handleChange}
        >
          <Button>
            <Icon type="upload"/>
            Upload
          </Button>
          </Upload>
          <I18nList/>
      </div>
    )
  }
};

export default Home;