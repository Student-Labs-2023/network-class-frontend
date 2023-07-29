import React from 'react';
import { Call } from '../../features/Call';
import ControllersWrapper from '../../widgets/layout/ControllersWrapper';
import { MicrophoneController } from '../../features/MicrophoneController';

const CallPage: React.FC = () => {
  return (
    <div>
      <Call/>
      <ControllersWrapper>
        <div>
          <MicrophoneController/>
        </div>
        <div></div>
        <div></div>
      </ControllersWrapper>
    </div>
  )
}

export default CallPage;
