import React,{useEffect} from 'react';
import {Box,useMediaQuery} from '@mui/material';

import LoginForm from '../forms/LoginForm/LoginForm';
import AuthFormLayout from '../../layout/AuthFormLayout/AuthFormLayout';
import FormComponent from '../../components/AnyPage/FormComponent/FormComponent';
import LoginPromt from '@/components/AnyPage/AuthFormPromt/LoginPromt/LoginPromt';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import {useSwipeableDrawerStore} from '@/hooks/useSwipeableDrawerStore';
import {useLoginFormStyle} from './style';

import ButtonUI from '../../../src/UI/UIComponents/ButtonUI/ButtonUI';





const Login = () => {

	const {pushTo} = useCustomRouter();

	const {
		LoginFormWrapperBox,
		MarginBoxMUI,
	} = useLoginFormStyle();

	const handlerClickRefreshPass = () : void => {
		pushTo('/reset');
	};

	const handlerClickRegistr = () : void => {
		pushTo('/signup');
	};





	const isMobile = useMediaQuery('(max-width: 499px)');

	const {
		toggleDrawer,
		toggleTab,
	} = useSwipeableDrawerStore();

	const onToggleMenu = () => {
		toggleDrawer();
		toggleTab('login');
	};

	useEffect(() => {
		if (isMobile) {
			onToggleMenu();
		}
	}, [isMobile]);


	return (
		<>
			{!isMobile ? (<AuthFormLayout>
				<Box>
					<FormComponent title="Вход">
						<LoginFormWrapperBox>
							<LoginForm />
						</LoginFormWrapperBox>
						<LoginPromt
							onClickRefreshPassword={handlerClickRefreshPass}
							onClickRegistr={handlerClickRegistr}
						/>
					</FormComponent>
				</Box>
			</AuthFormLayout>):(
				<MarginBoxMUI>					
					<ButtonUI onClick={onToggleMenu}>
						Открыть форму входа
					</ButtonUI>
				</MarginBoxMUI>
				
			)}
			
		</>
		
	);
};

export default Login;
