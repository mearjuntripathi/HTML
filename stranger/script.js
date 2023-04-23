// Generate random room name if needed
const roomHash = location.hash;

if(roomHash == ""){
  document.getElementById('welcome').style.display = 'block';
  document.getElementById('connect').style.visibility = 'hidden';
  document.getElementById('foot').style.visibility = 'hidden';
}
else{
  document.getElementById('welcome').style.display = 'none';
  document.getElementById('connect').style.visibility = 'show';
  document.getElementById('foot').style.visibility = 'show';

    // TODO: Replace with your own channel ID
    //signin on SCALEDRONE
    //and use channel id and paste it frome there
    const drone = new ScaleDrone('oqStbsXh7ZYSZZiC');
    // Room name needs to be prefixed with 'observable-'
    const roomName = 'observable-' + roomHash;
    const configuration = {
      iceServers: [{
        urls: 'stun:stun.l.google.com:19302'
      }]
    };
    let room;
    let pc;


    function onSuccess() { };
    function onError(error) {
      console.error(error);
    };

    drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      room = drone.subscribe(roomName);
      room.on('open', error => {
        if (error) {
          onError(error);
        }
      });
      // We're connected to the room and received an array of 'members'
      // connected to the room (including us). Signaling server is ready.
      room.on('members', members => {
        console.log('MEMBERS', members);
        // If we are the second user to connect to the room we will be creating the offer
        const isOfferer = members.length === 2;
        startWebRTC(isOfferer);
      });
    });

    // Send signaling data via Scaledrone
    function sendMessage(message) {
      drone.publish({
        room: roomName,
        message
      });
    }

    function startWebRTC(isOfferer) {
      pc = new RTCPeerConnection(configuration);

      // 'onicecandidate' notifies us whenever an ICE agent needs to deliver a
      // message to the other peer through the signaling server
      pc.onicecandidate = event => {
        if (event.candidate) {
          sendMessage({ 'candidate': event.candidate });
        }
      };

      // If user is offerer let the 'negotiationneeded' event create the offer
      if (isOfferer) {
        pc.onnegotiationneeded = () => {
          pc.createOffer().then(localDescCreated).catch(onError);
        }
      }

      // When a remote stream arrives display it in the #remoteVideo element
      pc.onaddstream = event => {
        remoteVideo.srcObject = event.stream;
      };

      navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      }).then(stream => {
        // Display your local video in #localVideo element
        localVideo.srcObject = stream;
        // Add your stream to be sent to the conneting peer
        pc.addStream(stream);
      }, onError);

      // Listen to signaling data from Scaledrone
      room.on('data', (message, client) => {
        // Message was sent by us
        if (client.id === drone.clientId) {
          return;
        }

        if (message.sdp) {
          // This is called after receiving an offer or answer from another peer
          pc.setRemoteDescription(new RTCSessionDescription(message.sdp), () => {
            // When receiving an offer lets answer it
            if (pc.remoteDescription.type === 'offer') {
              pc.createAnswer().then(localDescCreated).catch(onError);
            }
          }, onError);
        } else if (message.candidate) {
          // Add the new ICE candidate to our connections remote description
          pc.addIceCandidate(
            new RTCIceCandidate(message.candidate), onSuccess, onError
          );
        }
      });
    }

    function localDescCreated(desc) {
      pc.setLocalDescription(
        desc,
        () => sendMessage({ 'sdp': pc.localDescription }),
        onError
      );
    }
    const footer = document.querySelectorAll('.footer');
    // When the mouse hovers over the screen, show the divs
    document.addEventListener('mousemove', () => {
      showDivs();
    });
    // When the screen is clicked, show the divs
    document.addEventListener('click', () => {
      showDivs();
    });
    function showDivs() {
      footer.forEach(div => {
        div.style.display = 'block';
      });
      // Hide the divs after 5 seconds
      setTimeout(() => {
        hideDivs();
      }, 5000);
    }

    function hideDivs() {
      footer.forEach(div => {
        div.style.display = 'none';
      });
    }

}
console.log("   _____                  __                   ___________          .__                      __    .__      .__ ");
console.log("  /  _  \\   _______      |__|  __ __    ____   \\__    ___/ _______  |__| ______   _____    _/  |_  |  |__   |__|");
console.log(" /  /_\\  \\  \\_  __ \\     |  | |  |  \\  /    \\    |    |    \\_  __ \\ |  | \\____ \\  \\__  \\   \\   __\\ |  |  \\  |  |");
console.log("/    |    \\  |  | \\/     |  | |  |  / |   |  \\   |    |     |  | \\/ |  | |  |_> >  / __ \\_  |  |   |   Y  \\ |  |");
console.log("\\____|__  /  |__|    /\\__|  | |____/  |___|  /   |____|     |__|    |__| |   __/  (____  /  |__|   |___|  / |__|");
console.log("        \\/           \\______|              \\/                            |__|          \\/               \\/      ");



function giveValue(length){
	var hash = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const hashLength = hash.length;
	let result = '';
	let counter = 0;
	while (counter < length) {
		result += hash.charAt(Math.floor(Math.random() * hashLength));
		counter += 1;
	}
	return result;
}

function genrateHash(){
	document.getElementById('genrated-room-code').value = giveValue(4)+'-'+giveValue(4)+'-'+giveValue(4)+'-'+giveValue(4);
	document.getElementById('copy').style.display = 'block';
	document.getElementById('join').style.display = 'block';
}

function hide(){
	var value = document.getElementById('genrated-room-code').value;
	if(value.length == 4 || value.length == 9 || value.length == 14){
		document.getElementById('genrated-room-code').value += '-';
	}
	if(value.length == 19){
		document.getElementById('join').style.display = 'block';
	}
	document.getElementById('copy').style.display = 'none';
}

function copyCode(){
	var value = document.getElementById('genrated-room-code').value;
	navigator.clipboard.writeText(value);
	document.getElementById('code').innerHTML = "<i class=\"fa-solid fa fa-copy\"></i> copied";
}

function copyLink(){
	var value = `https://mearjuntripathi.github.io/stranger/#`+document.getElementById('genrated-room-code').value;
	console.log(value);
	navigator.clipboard.writeText(value);
	document.getElementById('link').innerHTML = "<i class=\"fa-solid fa fa-link\"></i> copied";
}
function join(){
	window.location.hash = document.getElementById('genrated-room-code').value;
	location.reload(); 
}

window.onload = function(){
	document.getElementById("genrated-room-code").value = "";
}