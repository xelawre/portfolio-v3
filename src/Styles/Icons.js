import styled from 'styled-components';
import {EnvelopeSquare} from 'styled-icons/fa-solid/EnvelopeSquare';

export const MyMail = styled(EnvelopeSquare)`
  color: ${props => props.color};
  height: ${props => props.height};
  width: ${props => props.width};
`;
