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

  let user = auth.currentUser || undefined;

  try {
    switch (formData.get('formType')) {
      case 'login': {
        user = await logInByEmailCredentials(newUserData.email as string, newUserData.password as string);
        console.log('Logged in user:', user);
        return redirect('/wall');
      }
      case 'signup': {
        user = await createUserEmailPassword({ email: newUserData.email as string, password: newUserData.password as string });
        console.log('Logged in user:', user);
        // await writeUserData(user?.uid as string, { email: newUserData.email });
        return redirect('/wall');
      }
      default:
        console.error('Unknown form type');
    }
    console.log(user);
  } catch (error) {
    return redirect('/authorization');
  }
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
    authorizationAction;
  };
  UPDATEDAuthFormPropSet.logInFormProps.button.clickHandler = () => {
    authorizationAction;
  };

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
