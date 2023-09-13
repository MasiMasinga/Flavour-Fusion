// Styled Components
import styled from 'styled-components/native';

// Utils
import { Colors } from '../../../common/utils/constants';

export const FormContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 25px;
    gap: 6px;
    background-color: ${Colors.white};
`;

const AuthForm = ({ children }) => {
    return (
        <FormContainer>
            {children}
        </FormContainer>
    )
}

export default AuthForm
