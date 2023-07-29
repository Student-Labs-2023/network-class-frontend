import React from 'react';
import styled from 'styled-components';
import { Call } from '../../features/Call';
import ControllersWrapper from '../../widgets/layout/ControllersWrapper';
import { MicrophoneController } from '../../features/MicrophoneController';
import { CameraController } from '../../features/CameraController';
import { RecordController } from '../../features/RecordController';
import { LeaveCall } from '../../features/LeaveCall';

const Left = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`

const Center = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`

const CallPage: React.FC = () => {
  return (
    <div>
      <Call/>
      <ControllersWrapper>
        <Left>
          <MicrophoneController/>
          <CameraController/>
        </Left>
        <Center>
          <RecordController/>
        </Center>
        <LeaveCall/>
      </ControllersWrapper>
    </div>
  )
}

export default CallPage;
