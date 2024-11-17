import React from 'react';
import { required, SelectInput } from 'react-admin';
import {
  goodsColors,
  penFrames,
  penPeculiarities,
  penTypes,
} from '../../../constants/goods';

const PenCharacteristics = () => {
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
        choices={penPeculiarities}
        source="characteristics.peculiarity"
        validate={[required()]}
        defaultValue={penPeculiarities[0].name}
        optionValue="name"
      />
      <SelectInput
        className="create-block__select"
        choices={penTypes}
        source="characteristics.penType"
        validate={[required()]}
        defaultValue={penTypes[0].name}
        optionValue="name"
      />
      <SelectInput
        className="create-block__select"
        choices={penFrames}
        source="characteristics.frame"
        validate={[required()]}
        defaultValue={penFrames[0].name}
        optionValue="name"
      />
    </div>
  );
};

export default PenCharacteristics;
