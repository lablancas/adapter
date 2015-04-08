
Tinytest.add('WebRTC Adapter - Exports', function (test) {
    test.instanceOf(WebRTC.RTCPeerConnection, Function);
    test.instanceOf(WebRTC.getUserMedia, Function);
    test.instanceOf(WebRTC.attachMediaStream, Function);
    test.instanceOf(WebRTC.reattachMediaStream, Function);
    test.equal(typeof WebRTC.webrtcDetectedBrowser, 'string');
    test.equal(typeof WebRTC.webrtcDetectedVersion, 'number');
});
