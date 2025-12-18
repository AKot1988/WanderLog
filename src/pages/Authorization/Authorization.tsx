import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { writeUserData, readUserData } from '../../firebase/api';
import { auth } from '../../firebase/auth';
import { createUserEmailPassword, logInByEmailCredentials } from '../../firebase/auth';
import { authFormPropSet, authNavLinkPropSet } from './helper';
import { CustomNavLink, UniversalForm, UniversalModal } from '../../components';
import classes from './Authorization.module.scss';
import { redirect } from 'react-router-dom';

export const authorizationAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const newUserData = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  let user = auth.currentUser;
  console.log('Form Data:', Object.fromEntries(formData.entries()));
  switch (formData.get('formType')) {
    case 'login':
      // Call log-in function
      return await logInByEmailCredentials(newUserData.email as string, newUserData.password as string)
        .then(() => {
          user = auth.currentUser;
          redirect('/wall');
        })
        .catch((error) => {
          console.error('Error during sign-up:', error);
          redirect('/authorization');
        });
    case 'signup':
      await createUserEmailPassword({ email: newUserData.email as string, password: newUserData.password as string })
        .then(() => {
          user = auth.currentUser;
          redirect('/wall');
        })
        .catch((error) => {
          console.error('Error during sign-up:', error);
          redirect('/authorization');
        });
    // Call sign-up function`
  }
  return null;
};

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
  let UPDATEDAuthFormPropSet = authFormPropSet;
  UPDATEDAuthFormPropSet.SIGNInFormProps.button.clickHandler = () => {
    createUserEmailPassword;
  };
  UPDATEDAuthFormPropSet.logInFormProps.button.clickHandler = () => {
    logInByEmailCredentials;
  };
  // useEffect(() => {}, []);

  return (
    <>
      <div className={classes.auth}>
        {UPDATEDauthNavLinkPropSet.map((linkProps) => (
          <CustomNavLink key={linkProps.title + linkProps.className} {...linkProps} className={classes[linkProps.className]} />
        ))}
      </div>
      {isSIGNinModalVisible ? (
        <UniversalModal
          content={<UniversalForm {...UPDATEDAuthFormPropSet.SIGNInFormProps} />}
          visible={isSIGNinModalVisible}
          setVisible={setisSIGNinModalVisible}
          title={''}
        />
      ) : null}
      {isLOGinModalVisible ? (
        <UniversalModal
          content={<UniversalForm {...UPDATEDAuthFormPropSet.logInFormProps} />}
          visible={isLOGinModalVisible}
          setVisible={setIsLOGinModalVisible}
          title={''}
        />
      ) : null}
    </>
  );
};
export default AuthorizationPage;
