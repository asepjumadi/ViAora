import React from 'react';
import {images} from '../constants';
import {
  StyledImage,
  StyledSafeArea,
  StyledScrollView,
  StyledView,
  StyledStatusBar,
  StyledText,
} from './Tailwinds';
import { Button } from './component';

export default function App({navigation}) {
  return (
    <StyledSafeArea className="bg-primary h-full ">
      <StyledStatusBar className="bg-primary" backgroundColor={'#161622'} />
      <StyledScrollView contentContainerStyle={{height: '100%'}}>
        <StyledView className="w-full items-center h-full px-4">
          <StyledImage
            source={images.logo}
            className="w-[180px] h-[84px] mt-10"
            resizeMode="contain"
          />
          <StyledImage
            source={images.cards}
            className="max-w-[380px]  h-[300px]"
            resizeMode="contain"
          />
          <StyledView>
            <StyledText className="text-4xl text-white text-center font-semibold mt-2">
              Discover Endless Possibilities with{' '}
              <StyledText className="text-secondary">Aora</StyledText>
            </StyledText>
            <StyledImage
              source={images.path}
              resizeMode="contain"
              className="absolute right-0 bottom-[-15px] w-[80px] "
            />
          </StyledView>
          <StyledText className="text-[17px] text-gray-100 leading-6 mt-5 text-center">
            Where Creativity Meets Innovation: Embark on {'\n'} a Journey of
            Limitless Exploration with Aora
          </StyledText>
          <Button onPress={()=>navigation.navigate("SignIn")} children="Continue With Email"/>
        </StyledView>
      </StyledScrollView>
    </StyledSafeArea>
  );
}
