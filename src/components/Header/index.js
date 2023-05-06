import { Text, View, Image } from "react-native"
import { styled } from "nativewind"
import { withExpoSnack } from 'nativewind';

import BagImage from "../../../assets/favicon.png"
import ChevronRightIcon from "../../../assets/chevron-right.png"

const StyledView = styled(View)
const StyledText = styled(Text)

const Header = () => {
    return (
        <StyledView className="absolute top-0 bg-[#818181] w-full">
            <StyledView className="mt-16 p-3">
                <StyledView className="flex-row items-center justify-between">
                    <StyledView className="flex-row items-center">
                        <Image source={BagImage} />
                        <StyledText className="text-xl ml-5">Mochila de:</StyledText>
                        <StyledText className="text-xl ml-1 text-[#FF9E5E] font-bold">Daniel</StyledText>
                    </StyledView>
                    <Image source={ChevronRightIcon} />
                </StyledView>
            </StyledView>
        </StyledView>
    )
}

export default withExpoSnack(Header)