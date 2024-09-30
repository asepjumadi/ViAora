import React,{useState} from 'react';
import {
  StyledImage,
  StyledView,
  StyledText,
  StyledStatusBar,
  StyledTextInput,
  StyledSafeArea,
  StyledTouchableOpacity,
} from '../Tailwinds';
import { images } from '../../constants';
import { Button } from '../component';


const SignIn = ({navigation}) => {
  const [borderColorActive,SetBorderColorActive] = useState(null)
 
  return (
    <StyledSafeArea className='bg-black h-full'>
      <StyledStatusBar />
      <StyledView className='mt-[50px] mx-5'>
        <StyledImage className='w-[116px] h-[41px]' resizeMode='contain' source={images.logo}/>
        <StyledText className='text-white text-2xl mt-10'>Sign up</StyledText>
        <StyledText className='text-gray-300 text-lg mt-10'>Username</StyledText>
        <StyledTextInput className={`bg-black-100 h-[58px] rounded-lg text-slate-200 text-lg ${borderColorActive==1?'border-secondary border-2':'border-transparent'}`} onFocus={()=> SetBorderColorActive(1)} onEndEditing={()=> SetBorderColorActive(null)} placeholderTextColor={"#7B7B8B"} placeholder='your unique username'/>
        <StyledText className='text-gray-300 text-lg mt-5'>Email</StyledText>
        <StyledTextInput className={`bg-black-100 h-[58px] rounded-lg text-slate-200 text-lg ${borderColorActive==2?'border-secondary border-2':'border-transparent'}`} onFocus={()=> SetBorderColorActive(2)} onEndEditing={()=> SetBorderColorActive(null)} placeholderTextColor={"#7B7B8B"} placeholder='your password'/>
        <StyledText className='text-gray-300 text-lg mt-5'>Password</StyledText>
        <StyledTextInput className={`bg-black-100 h-[58px] rounded-lg text-slate-200 text-lg ${borderColorActive==3?'border-secondary border-2':'border-transparent'}`} onFocus={()=> SetBorderColorActive(3)} onEndEditing={()=> SetBorderColorActive(null)} placeholderTextColor={"#7B7B8B"} placeholder='your password'/>
        <Button onPress={()=>navigation.navigate("SignIn")} children="Log In"/>
          <StyledText className='text-slate-300 text-lg self-center mt-5'>Already have an account? <StyledTouchableOpacity><StyledText className='text-secondary'>Login</StyledText></StyledTouchableOpacity> </StyledText>
      </StyledView>
    </StyledSafeArea>
  ); 
};

export default SignIn;
