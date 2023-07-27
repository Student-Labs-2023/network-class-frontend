import { useRef, useState } from "react";
import Webcam from "react-webcam";
import cameraOn from "../../../public/icons/videocamera-on.svg";
import cameraOff from "../../../public/icons/videocamera-off.svg";
import microOn from "../../../public/icons/microphone-on.svg";
import microOff from "../../../public/icons/microphone-off.svg";
import { styled } from "styled-components";
import { SwitchDevice } from "../../features/DeviceSetting";

const Container = styled.div``;

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

const CheckDevices: React.FC = () => {
  const webcam = useRef<Webcam>(null);
  const [microphone, setMicrophone] = useState(
    micro ? JSON.parse(micro) : true
  );
  const [camera, setCamera] = useState(cam ? JSON.parse(cam) : true);

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
        <Webcam
          audio={microphone}
          ref={webcam}
          mirrored={true}
          width={0}
          height={0}
        />
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

// const containerRef = useRef(null); // Реф для контейнера

// useEffect(() => {
//   const getMicrophoneAccess = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   getMicrophoneAccess();
// }, []);

// useEffect(() => {
//   const handleAudioData = () => {
//     if (isActive) {
//       const threshold = 100; // Граничное значение громкости
//       const audioLevel = getAudioLevel(); // Функция, которая получает уровень громкости аудио

//       if (audioLevel >= threshold) {
//         containerRef.current.style.border = '5px solid red'; // Пример стилизации рамки при достижении граничного значения громкости
//       } else {
//         containerRef.current.style.border = 'none'; // Убираем рамку, когда громкость ниже граничного значения
//       }
//     } else {
//       containerRef.current.style.border = 'none'; // Убираем рамку, если микрофон неактивен
//     }
//   };

//   handleAudioData();
// }, [isActive]);

// const toggleMicrophone = () => {
//   setIsActive((prevState) => !prevState);
// };

// const getAudioLevel = () => {
// const audioContext = new (window.AudioContext || window.webkitAudioContext)();
// const analyser = audioContext.createAnalyser();
// const microphone = audioContext.createMediaStreamSource(stream); // Подставьте вашу переменную с медиапотоком

// microphone.connect(analyser);

// analyser.fftSize = 256;
// const bufferLength = analyser.frequencyBinCount;
// const dataArray = new Uint8Array(bufferLength);

// analyser.getByteTimeDomainData(dataArray);

// let sum = 0;
// for (let i = 0; i < bufferLength; i++) {
//   const value = (dataArray[i] - 128) / 128; // Приведение значения к диапазону от -1 до 1
//   sum += Math.abs(value);
// }

// const audioLevel = sum / bufferLength;

// return audioLevel;
// };
