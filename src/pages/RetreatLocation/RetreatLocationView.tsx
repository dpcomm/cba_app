import React from 'react';
import { ButtonView, Container, ImageLocation, TextBody, TextSub, TextTitle } from './RetreatLocationView.styled';
import retreatMap from '@assets/images/retreat_map.png';
import { IconButton } from '@components/IconButton';
import { EColor } from '@styles/color';

const RetreatLocationView = () => {
	return (
    <Container>
      <TextTitle>수련회 장소</TextTitle>
      <TextSub>안산청소년수련원</TextSub>
      <ImageLocation src={retreatMap} />
      <TextBody>경기도 안산시 단원구 풍전로 52</TextBody>
      <ButtonView>
        <IconButton
          label={'주소 복사하기'}
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

export default RetreatLocationView;