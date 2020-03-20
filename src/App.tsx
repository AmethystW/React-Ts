import React from 'react';
import './App.css';
import Submit from './components/submit';
import VideoBox from './components/videoBox';

function App() {
  return (
    <div className="App">
      <div>
        请选择要上传的视频文件 
      </div>
      <div>
        <Submit url="http://192.168.153.1:3000"/>
      </div>
      <div>
        -------------------------------------------------------------
      </div>
      <div>
        <VideoBox/>
      </div>
    </div>
  );
}

export default App;
