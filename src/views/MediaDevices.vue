<template>
    <div class="container" id="MediaDevices">
        <div class="row" >
            <div class="col-md-6">
                <h1> Media Devices </h1>
            </div>
            <form>
            <div class="row">
            <div class="col-xl-12 col-lg-12 divClass"> 
                <div class="row">
                    <div clas="col-lg-4">
                        <div class="form-group">
                            <label for="First Name" class="form-control"> First Name </label>
                            <input type="text"  class="form-control" placeholder="first Name">  
                        </div>
                        <div class="form-group">
                            <label for="Last Name" class="form-control"> Last Name </label>
                            <input type="text"  class="form-control" placeholder="last Name">
                        </div>
                    </div>
                    
                    <div class="col-lg-4">
                        <div class="form-group">
                            <label for="Email Id" class="form-control"> Email Id </label>
                            <input type="email"  class="form-control" placeholder="Email Id"> 
                        </div>
                        <div class="form-group">
                            <label for="Phone No" class="form-control"> Phone No </label>
                            <input type="phone"  class="form-control" placeholder="Phone No">    
                        </div>
                    </div>
                </div>
                 <div class="row">
                    <div class="col-md-4">
                        <t-button id="AccessMediaDevices" name="Access" v-on:click="accessclicked">Connect Devices </t-button>
                    </div>
                </div>
            </div><!-- Col div close -->
            </div> <!-- RowdivEnd -->
            </form>
        </div>
           
            
        <div class="row">
            <div class="col-md-12" v-if="isVisible">
                <center>
                    <video id="video" :key="randomKey"   name="Video"  />
                        <t-button id="CaptureImage" name="closeVideo" v-on:click="captureImage"> Capture Image</t-button>
                        <t-button id="closeVideo" name="closeVideo" v-on:click="closeVideo">Close Camera</t-button>
                </center>
            </div>
        </div>
    </div>

    
</template>
<script>

export default ({
    name:'MediaDevices',
    data()
    {
        return{
            Tracks : {},
            video:{},
            randomKey:1,
            isVisible : false
        };
    },
    methods:
    {
        accessclicked : function()
        {
            this.isVisible = true
            this.video = document.querySelector('video');


            var constra = {
                    video:true,
                    audio:false
            };
            if(navigator.mediaDevices.getUserMedia || navigator.mediaDevices.webkitGetUserMedia ||navigator.moxGetUserMedia || navigator.msGetUserMedia )
            {       
                navigator.mediaDevices.getUserMedia(constra)
                .then((stream) => {
                    this.Tracks = stream.getTracks();
                    stream.onremovetrack = () => {
                        console.log("Removed track")
                    };
                    this.video.srcObject = stream
                    this.video.onloadedmetadata =()=>{
                        this.video.play()
                    };
                    
                })
                .catch((err)=>
                {
                    if(err.name ==='ConstraintNotSatisfiedError'){
                        console.error("The Required Configurations not found ")
                    }
                    else
                    {
                        if(err.name ==='permissionDeniedError')
                        {
                            console.log("Permissions are denied for audio and video devices  ")
                        }
                        else{
                            console.log("Something otherissue : ", err.name)
                        }


                    }

                });
            //    
        }},
        playVideo :function () {

            this.video = document.querySelector('video');
            var constraints = {
                audio: false,
                video: true
            };
            navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) => {
                // const videoTracks = stream.getVideoTracks();
                // console.log('Got stream with constraints:', constraints);
                // console.log(`Using video device: ${videoTracks[0]}`, videoTracks[0]);
                stream.onremovetrack = () => {
                console.log('Stream ended');
                };
                this.video.srcObject = stream;
                this.video.onloadedmetadata = () => {
                    this.video.play();
                };
            })
            .catch((error) => {
                if (error.name === 'ConstraintNotSatisfiedError') {
                console.error(
                    `The resolution ${constraints.video.width.exact}x${constraints.video.height.exact} px is not supported by your device.`
                );
                } else if (error.name === 'PermissionDeniedError') {
                console.error(
                    'Permissions have not been granted to use your camera and ' +
                    'microphone, you need to allow the page access to your devices in ' +
                    'order for the demo to work.'
                );
                } else {
                console.error(`getUserMedia error: ${error.name}`, error);
                }
            })

        },
        captureImage : function()
        {

        },
        closeVideo:function()
        {
            //let tracks = this.video.getTracks();
            //var trcks = this.Tracks;
            this.isVisible = false 
            this.Tracks.forEach(track =>{
                alert(track)
                track.stop();
            });
        }



    },

    
})
</script>
<style>
video{
    height:300px;
    width:30%;
    border:1px solid rgb(146, 144, 144);
    align-self:center;
    padding:2px;
}
input[type="text"],[type="phone"],[type="email"]{   
    width:70%;
    border:1px solid rgba(222, 248, 237, 0.932);
    margin:10px;
    border-radius:6px;
    padding:6px;
    color:black;
    background-color:#dff5ec73;


    }
.divClass{

    height:90%;
    width:70%;
    background-color:#ffffff;
    border:0.2px solid #ffffff;
    align-self: auto;
    padding:20px;
    margin:auto;
    color:black;

    }
</style>
