import React, {PropTypes} from 'react';
import FormLabel from '../../components/style/form-label'
import FormNumberInput from '../../components/style/form-number-input';

export default function PropertyString({propertyName, value, onUpdate, configs}) {
  return (
    <div style={{marginBottom: "3px"}}>
      <div style={{display: "inline-block", width: "30%"}}>
        <FormLabel>{propertyName}</FormLabel>
      </div>

      <div style={{display: "inline-block", width: "70%"}}>
        <FormNumberInput value={value} onChange={event => onUpdate(parseFloat(event.target.value))}
                         min={configs.min} max={configs.max}/>
      </div>

    </div>
  );

}

PropertyString.propTypes = {
  propertyName: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onUpdate: PropTypes.func.isRequired,
  configs: PropTypes.object.isRequired
};
