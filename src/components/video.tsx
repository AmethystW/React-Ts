import React from 'react';

interface Iprops{
    id:string
    autoplay:boolean
}
interface Istate{
    videoid:number
}


export default class Video extends React.Component<Iprops,Istate>{
    public constructor(props:any) {
      super(props);
    }

    public state:Readonly<Istate>={
        videoid:1
    }

    public loopPLAY(){
        var videoid = "videoplay"+(this.state.videoid+1)
        var video = document.getElementById(videoid) as HTMLVideoElement
        if (this.state.videoid<3){
            this.setState({
                videoid:this.state.videoid+1
            })
            console.log(this.state.videoid)
            video.load()
            video.play()
        }
    }

    public render() {
      return (
        <li id="videobox" style={{display:"inline-block",marginLeft:"10px" ,marginRight:"10px", width:document.body.clientWidth-60}}>
            <video controls autoPlay={this.props.autoplay} id={this.props.id} width={"100%"} onEnded={this.loopPLAY}>
                <source type="audio/mpeg"/>
            </video>
        </li>
      )
    }
}