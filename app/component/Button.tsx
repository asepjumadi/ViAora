import { StyledText, StyledTouchableOpacity } from "../Tailwinds"
const Button = ({onPress,children}:Props) => {
  return (
    <StyledTouchableOpacity onPress={onPress} className=" bg-secondary-100 rounded-[8px] items-center justify-center w-full mt-7">
            <StyledText className="text-primary font-semibold text-[18px] leading-5 py-[20px]">
                {children}
            </StyledText>
    </StyledTouchableOpacity>
  )
}

export default Button;