import { required, SelectInput } from 'react-admin';
import {
  goodsColors,
  goodsCompositions,
  goodsSeasons,
} from '../../../constants/goods';

const HeaddressCharacteristics = () => {
  return (
    <>
      <div className="create-block">
        <SelectInput
          className="create-block__select"
          choices={goodsColors}
          source="characteristics.color"
          validate={[required()]}
          defaultValue={goodsColors[0].name}
          optionValue="name"
        />
        <SelectInput
          className="create-block__select"
          choices={goodsCompositions}
          source="characteristics.composition"
          validate={[required()]}
          defaultValue={goodsCompositions[0].name}
          optionValue="name"
        />
        <SelectInput
          className="create-block__select"
          choices={goodsSeasons}
          source="characteristics.season"
          validate={[required()]}
          defaultValue={goodsSeasons[0].name}
          optionValue="name"
        />
      </div>
    </>
  );
};

export default HeaddressCharacteristics;
