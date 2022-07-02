import PropTypes from 'prop-types';
import { Container, MyInput, MyP } from './styled';

function Filter({ filter }) {
  return (
    <Container>
      <MyP>Find contacts by name</MyP>
      <MyInput type="text" onChange={filter} placeholder="Search..." />
    </Container>
  );
}

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default Filter;
