import styled from 'styled-components';
import {
    Box
} from 'rebass/styled-components'

export const Container = styled(Box)`
  width: 100%;
  max-width: 140rem;
  margin: 0 auto;
  height: 100%;
`;

export const ContentContainer = styled(Box)`
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    margin: 0 auto;
    box-shadow: 0px 3px 20px -15px rgba(0,0,0,0.5);
`;

ContentContainer.defaultProps = {
    p: 0,
    width: [1, 2 / 3, 1 / 2],
    px: 4,
}

export const FormContainer = styled(Box)`
    box-shadow: 0 0 16px rgba(0, 0, 0, .25);
    border-radius: 8px;
`

FormContainer.defaultProps = {
    width: [1, 2 / 3, 1 / 2],
    mx: 'auto',
    px: 4,
    borderRadius: '8px',
}

export const StyledInputContainer = styled(Box)`
    padding: 8px;
    label: {

    }
`;

StyledInputContainer.defaultProps = {
    p: 2
}