import styled from 'styled-components';

import {
    Box
} from 'rebass/styled-components'

export const ErrorMessage = styled(Box)({
    color: 'red',
    border: '1px solid red',
    borderRadius: '2px',
})

ErrorMessage.defaultProps = {
    bg: '#ffdce0',
    fontSize: 0,
    px: 2,
    py: 2,
};