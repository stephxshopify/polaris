import {DisplayText} from '@shopify/polaris';
import React from 'react';
import {withPolarisExample} from '../../src/components/PolarisExampleWrapper';

function DisplayExample() {
  return <DisplayText size="small">Good evening, Dominic.</DisplayText>;
}

export default withPolarisExample(DisplayExample);
