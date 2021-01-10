import React, { useEffect, useContext } from 'react';

import Navbar from './navbar';
import AllianceNavLink from '../components/alliance/allianceNavLink';
import AllianceList from '../components/alliance/allianceList';

import { PlayerContext } from '../utils/PlayerContext/PlayerState';

import custom from '../stylesheets/custom-styles.module.scss';
import styles from '../stylesheets/profile.module.scss';

export default function IsMemberAlliance() {
  // const { userProfile, getUserProfile } = useContext(PlayerContext);

  // useEffect(() => {
  //   getUserProfile();
  // }, []);

  return (
    <div className={custom.wrapper}>
      {/* {userProfile && userProfile.isMember ? <AllianceNavLink /> : <AllianceList />} */}
      <div className={styles.buttons}>
        <Navbar />
      </div>
    </div>
  );
}
