// Styled Components
import styled from 'styled-components/native';

// Utils
import { Colors } from '../utils/constants';

export const ScreenContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.bgColor ? props.bgColor : Colors.white};
`

const ScreenLayout = ({ children, bgColor }) => {
    return (
        <ScreenContainer bgColor={bgColor}>
            {children}
        </ScreenContainer>
    );
}

export default ScreenLayout