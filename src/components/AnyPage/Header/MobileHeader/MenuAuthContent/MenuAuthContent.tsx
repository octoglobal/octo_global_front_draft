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
	};

	// TODO: ужасное нечитаемое поправить завтра
	return (
		<ContentLayoutUI>
			<>
				{isAuth ? (
					<>
						<UserUI>
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
							</FormComponent>
						)}
						{openAuth === 'signup' && !isAuth && (
							<FormComponent
								title="Регистрация"
								background={false}
							>
								<SignUpForm />
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
