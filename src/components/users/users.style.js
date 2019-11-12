import styled from 'styled-components';
import { Button } from 'reactstrap';
import { TextInput } from '../../helpers/formField';

export const UserButton = styled(Button)`
  font-size: 1em;
  text-align: center;
  padding: 0.375rem 0.75rem;
  margin-bottom: 10px;
`;

export const EditButton = styled(Button)`
  font-size: 1em;
  text-align: center;
  padding: 0.375rem 0.75rem;
  margin-right: 5px;
`;

export const FieldLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: #000;
  font-family: "Raleway", sans-serif;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
  font-weight: bold;
`;

export const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FieldInput = styled(TextInput)`
  width: 300px;
  height: 35px;
  border: ${props => props.border || '1px solid #ccc'};
  background-color: #fff;
  padding: 5px;
  border-radius: 4px;
`;

export const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #4d4d4d;
  font-size: 2.2em;
`;

export const ErrorTag = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color || '#4d4d4d'}
`;
