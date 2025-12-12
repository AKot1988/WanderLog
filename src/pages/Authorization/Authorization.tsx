import type { FC } from 'react';
import type { ModalProps } from '../../components/UniversalModal/helper';
import type { FormProps } from '../../components/UniversalForm/types';
import { authFormPropSet, authNavLinkPropSet } from './helper';
import { CustomNavLink, UniversalForm, UniversalModal } from '../../components';
import { useState, useEffect } from 'react';
import classes from './Authorization.module.scss';

const AuthorizationPage: FC<any> = () => {
  const [isSIGNinModalVisible, setisSIGNinModalVisible] = useState(false);
  const [isLOGinModalVisible, setIsLOGinModalVisible] = useState(false);
  let UPDATEDauthNavLinkPropSet = authNavLinkPropSet;
  UPDATEDauthNavLinkPropSet[0].onClick = () => {
    setisSIGNinModalVisible(!isSIGNinModalVisible);
  };
  UPDATEDauthNavLinkPropSet[1].onClick = () => {
    setIsLOGinModalVisible(!isLOGinModalVisible);
  };

  useEffect(() => {}, []);

  console.log(UPDATEDauthNavLinkPropSet);
  console.log(authFormPropSet.logInFormProps);
  return (
    <>
      <div className={classes.auth}>
        {UPDATEDauthNavLinkPropSet.map((linkProps) => (
          <CustomNavLink key={linkProps.title + linkProps.className} {...linkProps} className={classes[linkProps.className]} />
        ))}
      </div>
      {isSIGNinModalVisible ? (
        <UniversalModal
          content={<UniversalForm {...authFormPropSet.SIGNInFormProps} />}
          visible={isSIGNinModalVisible}
          setVisible={setisSIGNinModalVisible}
          title={'реестрація нового користувача'}
        />
      ) : null}
      {isLOGinModalVisible ? (
        <UniversalModal
          content={<UniversalForm {...authFormPropSet.logInFormProps} />}
          visible={isLOGinModalVisible}
          setVisible={setIsLOGinModalVisible}
          title={'введіть пошту і пароль для входу'}
        />
      ) : null}
    </>
  );
};
export default AuthorizationPage;
