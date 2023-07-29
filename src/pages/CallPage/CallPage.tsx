import React from 'react';
import { Call } from '../../features/Call';
import ControllersWrapper from '../../widgets/layout/ControllersWrapper';
import { MicrophoneController } from '../../features/MicrophoneController';
import { LeaveCall } from '../../features/LeaveCall';

const CallPage: React.FC = () => {
  return (
    <div>
      <Call/>
      <ControllersWrapper>
        <div>
          <MicrophoneController/>
        </div>
        <div></div>
        <LeaveCall/>
      </ControllersWrapper>
    </div>
  )
}

export default CallPage;
