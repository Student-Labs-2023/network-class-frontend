import React from 'react';
import { JitsiMeeting } from '@jitsi/react-sdk';
import { useAuth0 } from "@auth0/auth0-react";

export const Call: React.FC = () => {
  const { user, isAuthenticated } = useAuth0();

  console.log(user, isAuthenticated);

  return (
    <>
      <JitsiMeeting
        domain='167.172.169.76'
        roomName="MySambeauAPP"
        configOverwrite={{
          startWithAudioMuted: true,
          disableModeratorIndicator: true,
          hideConferenceSubject: true,
          startScreenSharing: false,
          enableEmailInStats: false,
          startWithVideoMuted: true,
          prejoinPageEnabled: false // If false: Auto join
        }}
        interfaceConfigOverwrite={{
          DISABLE_JOIN_LEAVE_NOTIFICATIONS: true
        }}
        getIFrameRef={(iframeRef) => {
          iframeRef.style.height = "100vh";
          iframeRef.style.width = "100%";
        }}
      />
    </>
  )
}
