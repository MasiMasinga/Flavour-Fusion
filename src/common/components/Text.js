// Styled Components
import styled from 'styled-components/native';

export const StyledText = styled.Text`
  color: ${(props) => (props.color ? props.color : 'black')};
  font-weight: ${(props) => (props.weight ? 700 : 500)};
  font-size: ${props => props.size ? props.size : '16px'};
  padding: ${props => props.padding ? '5px' : 0};
  color: ${props => props.color ? props.color : 'black'};
  margin:  ${props => props.margin ? '0px' : '0px'};
  text-align: ${props => props.align ? props.align : 'center'};
  margin-top: ${props => props.mt ? props.mt : '0px'};
  margin-bottom: ${props => props.mb ? props.mb : '0px'};
  margin-left: ${props => props.ml ? props.ml : '0px'};
  margin-right: ${props => props.mr ? props.mr : '0px'};
`;

const Text = ({ children, onPress, ...props }) => {
    return (
        <StyledText onPress={onPress} {...props}>
            {children}
        </StyledText>
    )
}

export default Text
