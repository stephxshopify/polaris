import {Heading} from '@shopify/polaris';
import React from 'react';
import {withPolarisExample} from '../../src/components/PolarisExampleWrapper';

function HeadingExample() {
  return <Heading>Online store dashboard</Heading>;
}

export default withPolarisExample(HeadingExample);
