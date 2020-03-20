import React from 'react';
import Video from './video';

interface Istate{
    position:number
    width:number
}


export default class VideoBox extends React.Component<any,Istate>{
    public constructor(props:any) {
      super(props);
      this.clickHandler = this.clickHandler.bind(this);
      this.clickLeft = this.clickLeft.bind(this);
      this.clickRight = this.clickRight.bind(this);
    }

    public state:Readonly<Istate>={
        position:0,
        width:document.body.clientWidth
    }
    
    public clickHandler(){
        var file = (document.getElementById("videofile") as HTMLInputElement).files
        if(file !== null && file.length !== 0){
            for(var i=1;i<=file.length;i++){
                var id="videoplay"+i
                var video = document.getElementById(id) as HTMLVideoElement
                var src = window.URL.createObjectURL(file[i-1])
                console.log(file[i-1])
                video.src = src
            }
        }
        else{
            alert("无上传文件")
        }
    }

    public clickLeft(){
        var id:number
        var ulist = document.getElementById("videobox") as HTMLUListElement
        if(this.state.position!==0){
            var mov=this.state.position-this.state.width
            this.setState({
                position:mov
            })
            ulist.scrollTo(mov,0)
            if(mov===0){
                id=1
            }
            else if(mov===this.state.width){
                id=2
            }
            else{
                id=3
            }
            var file = (document.getElementById("videofile") as HTMLInputElement).files
            if(file !== null && file.length !== 0){
                for(var i=1;i<4;i++){
                    var videoid = "videoplay"+i
                    var video = document.getElementById(videoid) as HTMLVideoElement
                    if(id===i){
                        video.play()
                    }
                    else{
                        video.pause()
                    }
                }
            }
        }
    }
    public clickRight(){
        var ulist = document.getElementById("videobox") as HTMLUListElement
        if(this.state.position!==this.state.width*2){
            var id:number
            var mov=this.state.position+this.state.width
            this.setState({
                position:mov
            })
            ulist.scrollTo(mov,0)
            if(mov===0){
                id=1
            }
            else if(mov===this.state.width){
                id=2
            }
            else{
                id=3
            }
            var file = (document.getElementById("videofile") as HTMLInputElement).files
            if(file !== null && file.length !== 0){
                for(var i=1;i<4;i++){
                    var videoid = "videoplay"+i
                    var video = document.getElementById(videoid) as HTMLVideoElement
                    if(id===i){
                        video.play()
                    }
                    else{
                        video.pause()
                    }
                }
            }
        }
    }

    public render() {
        var items=[]
        var autoplay:boolean
        var listLength=3  //代替后台获取视频序列长度
        for(var i=1;i<=listLength;i++){
            var id="videoplay"+i
            if(i===1){
                autoplay=true
            }
            else{
                autoplay=false
            }
            items.push(<Video key={i} id={id} autoplay={autoplay}/>)
        }
        return (
            <div>
                <div>
                    {/* 读取本地文件并播放 */}
                    <p>请在下方选择本地视频：</p>
                    <input id="videofile" type="file" multiple/>
                    <input type="button" id="btplay" onClick={this.clickHandler} value="播放"/>    
                </div>
                <div>
                    <ul id="videobox" style={{marginLeft:"0",overflowX:"hidden", listStyle:"none", width:"100%", whiteSpace:"nowrap", position:"absolute"}}>
                        {items}
                    </ul>
                    <div style={{position:"relative", width:"100%"}}>
                        <button onClick={this.clickLeft} style={{position:"absolute", left:"0px", top:"150px", width:"20px",height:"40px",borderStyle:"none"}}>◀</button>
                        <button onClick={this.clickRight} style={{position:"absolute", right:"0px", top:"150px", width:"20px",height:"40px",borderStyle:"none"}}>▶</button>
                    </div>
                </div>
            </div>
        );
        }
  }