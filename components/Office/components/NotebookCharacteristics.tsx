import { required, SelectInput } from 'react-admin';
import {
  goodsColors,
  notebookCovers,
  notebookFastenings,
  notebookRuled,
} from '../../../constants/goods';

const NotebookCharacteristics = () => {
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
        choices={notebookCovers}
        source="characteristics.cover"
        validate={[required()]}
        defaultValue={notebookCovers[0].name}
        optionValue="name"
      />
      <SelectInput
        className="create-block__select"
        choices={notebookFastenings}
        source="characteristics.fastenings"
        validate={[required()]}
        defaultValue={notebookFastenings[0].name}
        optionValue="name"
      />
      <SelectInput
        className="create-block__select"
        choices={notebookRuled}
        source="characteristics.ruled"
        validate={[required()]}
        defaultValue={notebookRuled[0].name}
        optionValue="name"
      />
    </div>
  );
};

export default NotebookCharacteristics;
