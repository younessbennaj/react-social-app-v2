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