import React, { FC, useState } from 'react';

import HeaderNavLink from '../../HeaderNavLink/HeaderNavLink';
import ContentLayoutUI from '../../../../../layout/ContentLayout/ContentLayout';
import ButtonUI from '../../../../../UI/UIComponents/ButtonUI/ButtonUI';

import { useMenuAuthContentStyle } from './style';
import SignUpForm from '@/components/forms/SignUpForm/SignUpForm';
import LoginForm from '@/components/forms/LoginForm/LoginForm';
import { useUserStore } from '@/hooks/useUserStore';
import User from '@/components/AnyPage/User/User';
import FormComponent from '@/components/AnyPage/FormComponent/FormComponent';
import { useAppDispatch } from '@/hooks/useReduxHooks';
import { fetchUserLogout } from '@/reducers/userSlice/asyncActions/userApi';
import {useCustomRouter} from '@/hooks/useCustomRouter';
import ResetPasswordForm from '@/components/forms/ResetPasswordForm/ResetPasswordForm';
import LoginPromt from '@/components/AnyPage/AuthFormPromt/LoginPromt/LoginPromt';
import SignUpPromt from '@/components/AnyPage/AuthFormPromt/SignUpPromt/SignUpPromt';

const MenuAuthContent: FC = () => {
	const { isAuth } = useUserStore();
	const dispatch = useAppDispatch();

	const {
		MenuLinksUI,
		ButtonsAuthUI,
		ButtonLogin,
		ButtonSignUp,
		UserUI,
		ExitLinkUI,
	} = useMenuAuthContentStyle();

	const {pushTo} = useCustomRouter();

	const [openAuth, setOpenAuth] = useState('');

	const toggleAuthForm = (trigger: string) => {
		return () => {
			setOpenAuth(trigger);
		};
	};

	const handlerLogout = (): void => {
		console.log('handlerLogout');
		dispatch(fetchUserLogout());
		setOpenAuth('');
		pushTo('/');
	};

	const handlerPushToAccount = () => {
		pushTo('/account/info');
	};

	const handlerClickRefreshPass = () : void => {
		setOpenAuth('reset');
	};

	const handlerClickRegistr = () : void => {
		setOpenAuth('signup');
	};

	const handlerClickLogin = () : void => {
		setOpenAuth('login');
	};

	// TODO: ужасное нечитаемое поправить завтра
	return (
		<ContentLayoutUI>
			<>
				{isAuth ? (
					<>
						<UserUI onClick={handlerPushToAccount}>
							<User />
						</UserUI>
						<MenuLinksUI>
							<HeaderNavLink />
							{isAuth && (
								<ExitLinkUI onClick={handlerLogout}>
									Выйти
								</ExitLinkUI>
							)}
						</MenuLinksUI>
					</>
				) : (
					<>
						{openAuth === 'login' && !isAuth && (
							<FormComponent title="Вход" background={false}>
								<LoginForm />
								<LoginPromt
									onClickRegistr={handlerClickRegistr}
									onClickRefreshPassword={handlerClickRefreshPass}
								/>
							</FormComponent>
						)}
						{openAuth === 'signup' && !isAuth && (
							<FormComponent
								title="Регистрация"
								background={false}
							>
								<SignUpForm />
								<SignUpPromt
									onClickLogin={handlerClickLogin}
								/>
							</FormComponent>
						)}
						{openAuth === 'reset' && !isAuth && (
							<FormComponent
								title="Восстановление пароля"
								background={false}
							>
								<ResetPasswordForm />
							</FormComponent>
						)}
						{openAuth === '' && (
							<>
								{isAuth && (
									<UserUI>
										<User />
									</UserUI>
								)}
								<MenuLinksUI>
									<HeaderNavLink />
									{isAuth && (
										<ExitLinkUI onClick={handlerLogout}>
											Выйти
										</ExitLinkUI>
									)}
								</MenuLinksUI>

								{!isAuth && (
									<ButtonsAuthUI>
										<ButtonUI
											style={ButtonLogin}
											onClick={toggleAuthForm('login')}
										>
											Войти
										</ButtonUI>
										<ButtonUI
											style={ButtonSignUp}
											onClick={toggleAuthForm('signup')}
										>
											Регистрация
										</ButtonUI>
									</ButtonsAuthUI>
								)}
							</>
						)}
					</>
				)}
			</>
		</ContentLayoutUI>
	);
};

export default React.memo(MenuAuthContent);
