import React, { FC } from 'react';

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
import {useSwipeableDrawerStore} from '@/hooks/useSwipeableDrawerStore';
import {usePayment} from '@/hooks/usePayment';
import {useHeaderPaymentStyles} from '@/components/AnyPage/Header/HeaderPayment/style';
import HeaderPayment from '@/components/AnyPage/Header/HeaderPayment/HeaderPayment';

const MenuAuthContent: FC = () => {
	const { isAuth, isAdmin } = useUserStore();
	const dispatch = useAppDispatch();

	const {
		MenuLinksUI,
		ButtonsAuthUI,
		ButtonLogin,
		ButtonSignUp,
		UserUI,
		ExitLinkUI,
	} = useMenuAuthContentStyle();

	const {
		userBalance,
		adminSwitchIdToUser,
		handleTogglePaymentForm,
	} = usePayment();

	const {
		toggleDrawer,
		openTab, toggleTab
	} = useSwipeableDrawerStore();
	const {pushTo} = useCustomRouter();

	const toggleAuthForm = (trigger: string) => {
		return () => {
			toggleTab(trigger);
		};
	};

	const handlerLogout = (): void => {
		dispatch(fetchUserLogout())
			.then(() => {
				pushTo('/');
				toggleTab('');
			});
	};

	const handlerPushToAccount = () => {
		toggleDrawer();
		pushTo('/account/info');
	};

	// TODO: ужасное нечитаемое поправить завтра
	return (
		<ContentLayoutUI
			disabledPadding={true}
		>
			<>
				{isAuth ? (
					<>
						<UserUI onClick={handlerPushToAccount}>
							<User cutFio={false} />
						</UserUI>
						{isAuth && (!isAdmin || (isAdmin && adminSwitchIdToUser)) && (
							<ContainerAddPaymentMobileMUI onClick={handleTogglePaymentForm}>
								<BalanceTextMUI>
									{userBalance} €
								</BalanceTextMUI>
								{isAdmin && (
									<AddPaymentMobileMUI>
										пополнить
									</AddPaymentMobileMUI>
								)}
							</ContainerAddPaymentMobileMUI>
						)}
						<MenuLinksUI>
							<HeaderNavLink toggleOpenMenu={toggleDrawer} />
							{isAuth && (
								<ExitLinkUI onClick={handlerLogout}>
									Выйти
								</ExitLinkUI>
							)}
						</MenuLinksUI>
					</>
				) : (
					<>
						{openTab === 'login' && !isAuth && (
							<FormComponent title="Вход" background={false}>
								<LoginForm />
								<LoginPromt
									onClickRegistr={toggleAuthForm('signup')}
									onClickRefreshPassword={toggleAuthForm('reset')}
								/>
							</FormComponent>
						)}
						{openTab === 'signup' && !isAuth && (
							<FormComponent
								title="Регистрация"
								background={false}
							>
								<SignUpForm />
								<SignUpPromt
									onClickLogin={toggleAuthForm('login')}
								/>
							</FormComponent>
						)}
						{openTab === 'reset' && !isAuth && (
							<FormComponent
								title="Восстановление пароля"
								background={false}
							>
								<ResetPasswordForm />
							</FormComponent>
						)}
						{openTab === '' && (
							<>
								{isAuth && (
									<UserUI>
										<User cutFio={false} />
									</UserUI>
								)}
								<MenuLinksUI>
									<HeaderNavLink toggleOpenMenu={toggleDrawer} />
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
			<HeaderPayment/>
		</ContentLayoutUI>
	);
};

const {
	BalanceTextMUI,
	AddPaymentMobileMUI,
	ContainerAddPaymentMobileMUI,
} = useHeaderPaymentStyles();

export default React.memo(MenuAuthContent);
