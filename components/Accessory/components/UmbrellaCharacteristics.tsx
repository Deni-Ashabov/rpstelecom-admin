import { required, SelectInput } from 'react-admin';
import {
  goodsColors,
  goodsCompositions,
  umbrellaFoldedLengths,
  umbrellaMechanisms,
  umbrellaNumberOfSpokes,
  umbrellaSpokeMaterials,
} from '../../../constants/goods';

const UmbrellaCharacteristics = () => {
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
          choices={umbrellaNumberOfSpokes}
          source="characteristics.numberOfSpokes"
          validate={[required()]}
          defaultValue={umbrellaNumberOfSpokes[0].name}
          optionValue="name"
        />
        <SelectInput
          className="create-block__select"
          choices={umbrellaSpokeMaterials}
          source="characteristics.spokeMaterial"
          validate={[required()]}
          defaultValue={umbrellaSpokeMaterials[0].name}
          optionValue="name"
        />
      </div>
      <div className="create-block">
        <SelectInput
          className="create-block__select"
          choices={umbrellaFoldedLengths}
          source="characteristics.foldedLength"
          validate={[required()]}
          defaultValue={umbrellaFoldedLengths[0].name}
          optionValue="name"
        />
        <SelectInput
          className="create-block__select"
          choices={umbrellaMechanisms}
          source="characteristics.mechanism"
          validate={[required()]}
          defaultValue={umbrellaMechanisms[0].name}
          optionValue="name"
        />
      </div>
    </>
  );
};

export default UmbrellaCharacteristics;
