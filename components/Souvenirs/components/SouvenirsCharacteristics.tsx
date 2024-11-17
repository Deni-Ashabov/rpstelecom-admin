import { required, SelectInput } from 'react-admin';
import React from 'react';
import {
  goodsColors,
  souvenirHeights,
  souvenirMaterials,
  souvenirWeights,
} from '../../../constants/goods';

const SouvenirsCharacteristics = () => {
  return (
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
        choices={souvenirMaterials}
        source="characteristics.material"
        validate={[required()]}
        defaultValue={souvenirMaterials[0].name}
        optionValue="name"
      />
      <SelectInput
        className="create-block__select"
        choices={souvenirHeights}
        source="characteristics.height"
        validate={[required()]}
        defaultValue={souvenirHeights[0].name}
        optionValue="name"
      />
      <SelectInput
        className="create-block__select"
        choices={souvenirWeights}
        source="characteristics.weight"
        validate={[required()]}
        defaultValue={souvenirWeights[0].name}
        optionValue="name"
      />
    </div>
  );
};

export default SouvenirsCharacteristics;
