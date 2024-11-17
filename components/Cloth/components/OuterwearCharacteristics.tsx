import { required, SelectInput } from 'react-admin';
import {
  goodsCollars,
  goodsCollections,
  goodsColors,
  goodsCompositions,
  goodsDecors,
  goodsFeatures,
  goodsLiningMaterials,
  goodsUpperMaterials,
} from '../../../constants/goods';

const OuterwearCharacteristics = () => {
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
          choices={goodsCollars}
          source="characteristics.collar"
          validate={[required()]}
          defaultValue={goodsCollars[0].name}
          optionValue="name"
        />
        <SelectInput
          className="create-block__select"
          choices={goodsUpperMaterials}
          source="characteristics.upperMaterial"
          validate={[required()]}
          defaultValue={goodsUpperMaterials[0].name}
          optionValue="name"
        />
        <SelectInput
          className="create-block__select"
          choices={goodsFeatures}
          source="characteristics.features"
          validate={[required()]}
          defaultValue={goodsFeatures[0].name}
          optionValue="name"
        />
      </div>
      <div className="create-block">
        <SelectInput
          className="create-block__select"
          choices={goodsDecors}
          source="characteristics.decor"
          validate={[required()]}
          defaultValue={goodsDecors[0].name}
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
          choices={goodsCollections}
          source="characteristics.collection"
          validate={[required()]}
          defaultValue={goodsCollections[0].name}
          optionValue="name"
        />
        <SelectInput
          className="create-block__select"
          choices={goodsLiningMaterials}
          source="characteristics.liningMaterial"
          validate={[required()]}
          defaultValue={goodsLiningMaterials[0].name}
          optionValue="name"
        />
      </div>
    </>
  );
};

export default OuterwearCharacteristics;
