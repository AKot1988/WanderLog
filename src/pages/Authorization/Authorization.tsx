import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { writeUserData, readUserData, getUserData, usersCollectionRef, placesCollectionRef } from '../../firebase/api';
import { auth } from '../../firebase/auth';
import { createUserEmailPassword, logInByEmailCredentials } from '../../firebase/auth';
import { authFormPropSet, authNavLinkPropSet } from './helper';
import { CustomNavLink, UniversalForm, UniversalModal } from '../../components';
import classes from './Authorization.module.scss';
import { redirect } from 'react-router-dom';
import type { UserData, AUTH_USER_ROLE } from '../../firebase/types';

export const authorizationAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const usPassword = formData.get('password');
  const newUserData: UserData = {
    userId: formData.get('userId'),
    name: formData.get('nama'),
    surname: formData.get('surname'),
    nickName: formData.get('nickName'),
    email: formData.get('email'),
    imageUrl: formData.get('imageUrl'),
    birthdate: formData.get('birthdate'),
    createdAt: new Date(),
    role: formData.get('role'),
  };

  let user = auth.currentUser || undefined;

  try {
    switch (formData.get('formType')) {
      case 'login': {
        user = await logInByEmailCredentials(newUserData.email as string, usPassword as string);
        console.log('Logged in user:', user);
        return redirect('/wall');
      }
      case 'signup': {
        user = await createUserEmailPassword({ email: newUserData.email as string, password: usPassword as string });
        console.log('Created new user:', user);
        const userData = await getUserData();
        if (!userData) {
          writeUserData(newUserData);

          console.log();
        }
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
