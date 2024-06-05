import React from 'react';
import { ButtonView, Container, PaymentView, TextBody, TextBodyUnderLine, TextPayment } from './RetreatPayment.styled';
import { IconButton } from '@components/IconButton';
import { EColor } from '@styles/color';
import SvgIcon from '@components/SvgIcon';

const RetreatPaymentView = () => {
	return (
    <Container>
      <PaymentView>
        <SvgIcon name={'check_lined'} width={58} height={58} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY_SUB1} />
        <TextPayment>회비 납부 완료</TextPayment>
      </PaymentView>
      <TextBody>수련회비 납부 및 후원계좌</TextBody>
      <TextBodyUnderLine>카카오뱅크 79795194749 배윤희</TextBodyUnderLine>
      <ButtonView>
        <IconButton
          label={'계좌번호 복사하기'}
          height='32px'
          onClick={() => console.log("hello")}
          color={EColor.TEXT_200}
          backgroundColor={EColor.COLOR_PRIMARY_SUB1}
          borderRadius='8px'
        />
      </ButtonView>
    </Container>
  );
};

export default RetreatPaymentView;