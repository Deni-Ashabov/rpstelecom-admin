import { required, SelectInput } from 'react-admin';
import {
  goodsCollars,
  goodsCollections,
  goodsColors,
  goodsCompositions,
  goodsDecors,
  goodsFabricTypes,
  goodsFeatures,
  goodsPrint,
  goodsSeasons,
  goodsSilhouette,
  goodsSleeves,
} from '../../../constants/goods';

const LongSleevesCharacteristics = () => {
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
          choices={goodsSilhouette}
          source="characteristics.silhouette"
          validate={[required()]}
          defaultValue={goodsSilhouette[0].name}
          optionValue="name"
        />
        <SelectInput
          className="create-block__select"
          choices={goodsPrint}
          source="characteristics.print"
          validate={[required()]}
          defaultValue={goodsPrint[0].name}
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
          choices={goodsSeasons}
          source="characteristics.season"
          validate={[required()]}
          defaultValue={goodsSeasons[0].name}
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
      </div>
      <div className="create-block">
        <SelectInput
          className="create-block__select"
          choices={goodsFeatures}
          source="characteristics.features"
          validate={[required()]}
          defaultValue={goodsFeatures[0].name}
          optionValue="name"
        />
        <SelectInput
          className="create-block__select"
          choices={goodsFabricTypes}
          source="characteristics.fabricType"
          validate={[required()]}
          defaultValue={goodsFabricTypes[0].name}
          optionValue="name"
        />
        <SelectInput
          className="create-block__select"
          choices={goodsSleeves}
          source="characteristics.sleeve"
          validate={[required()]}
          defaultValue={goodsSleeves[0].name}
          optionValue="name"
        />
      </div>
    </>
  );
};

export default LongSleevesCharacteristics;
