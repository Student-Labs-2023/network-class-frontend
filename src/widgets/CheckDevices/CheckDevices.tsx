import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import cameraOn from "../../../public/icons/videocamera-on.svg";
import cameraOff from "../../../public/icons/videocamera-off.svg";
import microOn from "../../../public/icons/microphone-on.svg";
import microOff from "../../../public/icons/microphone-off.svg";
import { styled } from "styled-components";
import { SwitchDevice } from "../../features/DeviceSetting";

const Container = styled.div``;

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-family: var(--font);
  font-size: 25px;
  font-weight: 400;
`;

const SwitchBlock = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: nowrap;
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translate(-50%, 0);
`;

let micro: string | null = localStorage.getItem("microphone");
let cam: string | null = localStorage.getItem("camera");
let audioStream: MediaStream;
let volumeInterval: NodeJS.Timer | undefined;
let analyser: AnalyserNode;

const CheckDevices: React.FC<{ onSpeak: Function }> = ({ onSpeak }) => {
  const webcam = useRef<Webcam>(null);
  const [microphone, setMicrophone] = useState(
    micro ? JSON.parse(micro) : true
  );
  const [camera, setCamera] = useState(cam ? JSON.parse(cam) : true);

  useEffect(() => {
    getAudio();
    volumeInterval = setInterval(handleAudioData, 10);
    return () => {
      clearInterval(volumeInterval);
      volumeInterval = undefined;
    };
  }, []);

  useEffect(() => {
    if (!volumeInterval && microphone)
      volumeInterval = setInterval(handleAudioData, 10);
    if (volumeInterval && !microphone) {
      handleAudioData();
      clearInterval(volumeInterval);
      volumeInterval = undefined;
    }
  }, [microphone]);

  const getAudio = async () => {
    try {
      audioStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
        },
      });
      if (audioStream) {
        const audioContext = new AudioContext();
        const audioSource = audioContext.createMediaStreamSource(audioStream);
        analyser = audioContext.createAnalyser();

        analyser.fftSize = 512;
        analyser.minDecibels = -127;
        analyser.maxDecibels = 0;
        analyser.smoothingTimeConstant = 0.4;

        audioSource.connect(analyser);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAudioData = () => {
    if (audioStream) {
      const threshold = 0.4;
      const audioLevel = getAudioLevel();

      if (audioLevel <= threshold && microphone) {
        onSpeak(true);
      } else {
        onSpeak(false);
      }
    }
  };

  const getAudioLevel = () => {
    const bufferLength = analyser.frequencyBinCount;
    const volumes = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(volumes);
    let volumeSum = 0;
    for (let i = 0; i < bufferLength; i++) {
      const value = (volumes[i] - 128) / 128;
      volumeSum += Math.abs(value);
    }
    const averageVolume = volumeSum / volumes.length;
    const audioLevel = (averageVolume * 100) / 127;

    return audioLevel;
  };

  function changeMicro() {
    localStorage.setItem("microphone", `${!microphone}`);
    setMicrophone(!microphone);
  }

  function changeCam() {
    localStorage.setItem("camera", `${!camera}`);
    setCamera(!camera);
  }

  return (
    <Container>
      {camera ? (
        <Webcam
          audio={microphone}
          ref={webcam}
          mirrored={true}
          width={100 + "%"}
          height={100 + "%"}
        />
      ) : (
        <>
          <Webcam
            audio={microphone}
            ref={webcam}
            mirrored={true}
            width={0}
            height={0}
          />
          <Text>Камера выключена</Text>
        </>
      )}
      <SwitchBlock>
        <SwitchDevice
          iconOn={microOn}
          iconOff={microOff}
          isActive={microphone}
          onClick={changeMicro}
        />
        <SwitchDevice
          iconOn={cameraOn}
          iconOff={cameraOff}
          isActive={camera}
          onClick={changeCam}
        />
      </SwitchBlock>
    </Container>
  );
};

export default CheckDevices;
