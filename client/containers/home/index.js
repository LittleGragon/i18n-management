import React from 'react';
// import Upload from '$components/upload';
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
      </div>
    )
  }
};

export default Home;