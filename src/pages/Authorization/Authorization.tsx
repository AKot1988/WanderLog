import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { writeUserData, readUserData, getUserData, usersCollectionRef, placesCollectionRef } from '../../firebase/api';
import { auth } from '../../firebase/auth';
import { createUserEmailPassword, logInByEmailCredentials } from '../../firebase/auth';
import { authFormPropSet, authNavLinkPropSet } from './helper';
import { CustomNavLink, UniversalForm, UniversalModal, ErrorElementGPT, TemporaryMessage } from '../../components';
import classes from './Authorization.module.scss';
import { redirect } from 'react-router-dom';
import { useActionData } from 'react-router';
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
  switch (formData.get('formType')) {
    case 'login': {
      try {
        user = await logInByEmailCredentials(newUserData.email as string, usPassword as string);
        return redirect('/wall');
      } catch (error) {
        return {
          okAuthAction: false,
          error,
        };
      }
    }
    case 'signup': {
      try {
        user = await createUserEmailPassword({ email: newUserData.email as string, password: usPassword as string });
        console.log('Created new user:', user);
        const userData = await getUserData();
        if (!userData) {
          writeUserData(newUserData);
        }
        return redirect('/wall');
      } catch (error) {
        return {
          okAuthAction: false,
          error,
        };
      }
    }
  }
};

const AuthorizationPage: FC<any> = () => {
  const actionData: any = useActionData();

  console.log(actionData);

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
      {actionData?.okAuthAction === false && (
        <TemporaryMessage>
          <div className={classes.tempMess}>{`${actionData.error}`}</div>
        </TemporaryMessage>
      )}
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
