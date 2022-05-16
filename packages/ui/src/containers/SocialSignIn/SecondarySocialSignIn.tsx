import classNames from 'classnames';
import React, { useMemo, useState, useRef } from 'react';
import { isMobile } from 'react-device-detect';

import SocialIconButton from '@/components/Button/SocialIconButton';
import MoreSocialIcon from '@/components/Icons/MoreSocialIcon';
import useSocial from '@/hooks/use-social';

import * as styles from './SecondarySocialSignIn.module.scss';
import SocialSignInDropdown from './SocialSignInDropdown';
import SocialSignInPopUp from './SocialSignInPopUp';

export const defaultSize = 4;

type Props = {
  className?: string;
};

const SecondarySocialSignIn = ({ className }: Props) => {
  const { socialConnectors, invokeSocialSignIn } = useSocial();
  const isOverSize = socialConnectors.length > defaultSize;
  const [showModal, setShowModal] = useState(false);
  const moreButtonRef = useRef<SVGSVGElement>(null);

  const displayConnectors = useMemo(() => {
    if (isOverSize) {
      return socialConnectors.slice(0, defaultSize - 1);
    }

    return socialConnectors;
  }, [socialConnectors, isOverSize]);

  return (
    <>
      <div className={classNames(styles.socialIconList, className)}>
        {displayConnectors.map((connector) => (
          <SocialIconButton
            key={connector.id}
            className={styles.socialButton}
            connector={connector}
            onClick={() => {
              void invokeSocialSignIn(connector.id);
            }}
          />
        ))}
        {isOverSize && (
          <MoreSocialIcon
            ref={moreButtonRef}
            className={styles.moreButton}
            onClick={() => {
              setShowModal(true);
            }}
          />
        )}
      </div>
      {isOverSize && isMobile && (
        <SocialSignInPopUp
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
          }}
        />
      )}
      {isOverSize && !isMobile && (
        <SocialSignInDropdown
          anchorRef={moreButtonRef}
          isOpen={showModal}
          connectors={socialConnectors.slice(defaultSize - 1)}
          onClose={() => {
            setShowModal(false);
          }}
        />
      )}
    </>
  );
};

export default SecondarySocialSignIn;
