import React from 'react';
import { Call } from '../../features/Call';
import CallControllers from '../../widgets/CallControllers';

const CallPage: React.FC = () => {
  return (
    <div>
      <Call/>
      <CallControllers/>
    </div>
  )
}

export default CallPage;
