<template>
  <div class="container">
    <!-- <label for="speechtxt" class="form-control">Speak</label> -->
    <div class="row">
      <T-Button :disabled="isDisabled" class="btn btn-primary" v-on:click="startRecording">
        Start Recording
      </T-Button>
    </div>
    <div class="row">
      <div class="col-md-12">
        <!-- <img src="/mic.svg" style="background-color:purple" v-if="inputboxshow" id="showImage"  />  -->
      </div>
      <div class="col-md-2">
        <h3 v-if="inputboxshow" id="showMessage" class="text-success">
          Start Speaking
        </h3>
      </div>
    </div>
    <div class="row">
      <textarea  v-if="inputboxshow" rows="5" id="speechtxt" class="form-control" placeholder="Your spoken words will be here" disabled></textarea>
    </div>
    <div class="row">
      <T-Button v-if="inputboxshow" class="btn btn-primary" v-on:click="stopRecording"> Stop Recording   </T-Button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Practice",
  data() {
    return {
      inputboxshow: false,
      sRec: {},
      isDisabled: false,
    };
  },
  methods: {
    startRecording: function () {
      console.log("Eneterd in function ");
      this.isDisabled=true;
      if ("webkitSpeechRecognition" || "SpeechRecognition" in window) {
      console.log("Condition Satisfied in function ");
      this.inputboxshow = true;
      this.speechRecognitionStart();
    } else {
        console.log("Errors Speech Recognition is Not supported");
      }
    },

    speechRecognitionStart: function () {
      window.speechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
      //console.log(window.speechRec)
      this.sRec = new window.speechRec();
      console.log("this.srec", this.sRec);

      this.sRec.onstart = () => {
        this.sRec.lang = "es-Un | es-ES";
        this.sRec.continuous = true;
        this.sRec.interimResults = true;
        console.log("on start");
      };

      this.sRec.addEventListener("result", (event) => {
        //alert('jkh');
        console.log("Result Final = ", event.results);
        var textSpeech ;
        for (var i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            textSpeech = event.results[i][0].transcript
            textSpeech += " "
            alert( textSpeech);
            document.querySelector("#speechtxt").innerHTML += textSpeech;
            //document.querySelector('#speechtxt').innerHTML +=" " ;
          }
          // else{
          //     interimResult += event.results[i][0].transcript;
          // }
        }
        //var finalResult = Array.from(event.results).map(result = result[0]).map(result => result.transcript).join('')
      });
      //  this.sRec.onspeechend = () =>{
      //     console.log("Recording stopped")
      //     this.sRec.stop();
      // };
      this.sRec.onend = () => {
        console.log("Recording stopped");
        this.sRec.stop();
      };
      this.sRec.start();
      this.sRec.addEventListener("end", this.sRec.start);
    },
    stopRecording: function () {
      this.inputboxshow = false;
      console.log("stop :", this.sRec);
      document.querySelector("#speechtxt").innerHTML="";
      this.isDisabled=false;
      this.sRec.stop();
      delete this.sRec;
      //this.sRec.end() ;
      //this.sRec.speechend();
    },
  },
  beforeDestroy() {
    this.sRec = {};
    delete this.sRec;
  },
};
</script>
<style>
Button {
  background-color: rgba(252, 248, 251, 0.87);
  border: 1px solid #42b983;
  margin: 20px 0px 20px 0px;
  animation-name: "flash";
}
@keyframes flash {
  10%,
  90% {}
  }
textarea {
  width: 50%;
  border-radius: 6px;
  border: 0.1px solid gray;
  margin: 10px;
}
img {
  width: 20px;
  height: 20px;
  alt: "image mic";
  float: left;
  margin: 10px;
}
</style>

