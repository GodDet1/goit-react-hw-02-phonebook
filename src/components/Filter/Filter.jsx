import PropTypes from 'prop-types';
import { Container, MyInput, MyP } from './styled';

function Filter({ filter, value }) {
  return (
    <Container>
      <MyP>Find contacts by name</MyP>
      <MyInput
        type="text"
        onChange={filter}
        placeholder="Search..."
        value={value}
      />
    </Container>
  );
}

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
