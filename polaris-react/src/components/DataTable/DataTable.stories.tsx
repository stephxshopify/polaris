import React, {useCallback, useState} from 'react';
import type {ComponentMeta} from '@storybook/react';
import {Card, DataTable, Link, Page} from '@shopify/polaris';

export default {
  component: DataTable,
  parameters: {
    a11y: {
      config: {
        rules: [{id: 'scrollable-region-focusable', enabled: false}],
      },
    },
  },
} as ComponentMeta<typeof DataTable>;

function sortCurrency(rows, index, direction) {
  return [...rows].sort((rowA, rowB) => {
    const amountA = parseFloat(rowA[index].substring(1));
    const amountB = parseFloat(rowB[index].substring(1));

    return direction === 'descending' ? amountB - amountA : amountA - amountB;
  });
}

export function Default() {
  const rows = [
    ['Emerald Silk Gown', '$875.00', 124689, 140, '$122,500.00'],
    ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
    [
      'Navy Merino Wool Blazer with khaki chinos and yellow belt',
      '$445.00',
      124518,
      32,
      '$14,240.00',
    ],
  ];

  return (
    <Page title="Sales by product">
      <Card>
        <DataTable
          columnContentTypes={[
            'text',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
          ]}
          headings={[
            'Product',
            'Price',
            'SKU Number',
            'Net quantity',
            'Net sales',
          ]}
          rows={rows}
          totals={['', '', '', 255, '$155,830.00']}
        />
      </Card>
    </Page>
  );
}

export function Sortable() {
  const [sortedRows, setSortedRows] = useState<any[]>();

  const initiallySortedRows = [
    ['Emerald Silk Gown', '$875.00', 124689, 140, '$122,500.00'],
    ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
    [
      'Navy Merino Wool Blazer with khaki chinos and yellow belt',
      '$445.00',
      124518,
      32,
      '$14,240.00',
    ],
  ];
  const rows = sortedRows ? sortedRows : initiallySortedRows;

  const handleSort = useCallback(
    (index, direction) => setSortedRows(sortCurrency(rows, index, direction)),
    [rows],
  );

  return (
    <Page title="Sales by product">
      <Card>
        <DataTable
          columnContentTypes={[
            'text',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
          ]}
          headings={[
            'Product',
            'Price',
            'SKU Number',
            'Net quantity',
            'Net sales',
          ]}
          rows={rows}
          totals={['', '', '', 255, '$155,830.00']}
          sortable={[false, true, false, false, true]}
          defaultSortDirection="descending"
          initialSortColumnIndex={4}
          onSort={handleSort}
        />
      </Card>
    </Page>
  );
}

export function WithFooter() {
  const rows = [
    ['Emerald Silk Gown', '$875.00', 124689, 140, '$122,500.00'],
    ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
    [
      'Navy Merino Wool Blazer with khaki chinos and yellow belt',
      '$445.00',
      124518,
      32,
      '$14,240.00',
    ],
  ];

  return (
    <Page title="Sales by product">
      <Card>
        <DataTable
          columnContentTypes={[
            'text',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
          ]}
          headings={[
            'Product',
            'Price',
            'SKU Number',
            'Net quantity',
            'Net sales',
          ]}
          rows={rows}
          totals={['', '', '', 255, '$155,830.00']}
          footerContent={`Showing ${rows.length} of ${rows.length} results`}
        />
      </Card>
    </Page>
  );
}

export function WithCustomTotalsHeading() {
  const rows = [
    ['Emerald Silk Gown', '$875.00', 124689, 140, '$122,500.00'],
    ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
    [
      'Navy Merino Wool Blazer with khaki chinos and yellow belt',
      '$445.00',
      124518,
      32,
      '$14,240.00',
    ],
  ];

  return (
    <Page title="Sales by product">
      <Card>
        <DataTable
          showTotalsInFooter
          columnContentTypes={[
            'text',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
          ]}
          headings={[
            'Product',
            'Price',
            'SKU Number',
            'Net quantity',
            'Net sales',
          ]}
          rows={rows}
          totals={['', '', '', '', '$155,830.00']}
          totalsName={{
            singular: 'Total net sales',
            plural: 'Total net sales',
          }}
        />
      </Card>
    </Page>
  );
}

export function WithTotalsInFooter() {
  const rows = [
    ['Emerald Silk Gown', '$875.00', 124689, 140, '$122,500.00'],
    ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
    [
      'Navy Merino Wool Blazer with khaki chinos and yellow belt',
      '$445.00',
      124518,
      32,
      '$14,240.00',
    ],
  ];

  return (
    <Page title="Sales by product">
      <Card>
        <DataTable
          columnContentTypes={[
            'text',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
          ]}
          headings={[
            'Product',
            'Price',
            'SKU Number',
            'Net quantity',
            'Net sales',
          ]}
          rows={rows}
          totals={['', '', '', 255, '$155,830.00']}
          showTotalsInFooter
        />
      </Card>
    </Page>
  );
}

export function WithRowHeadingLinks() {
  const rows = [
    [
      <Link
        removeUnderline
        url="https://www.example.com"
        key="emerald-silk-gown"
      >
        Emerald Silk Gown
      </Link>,
      '$875.00',
      124689,
      140,
      '$122,500.00',
    ],
    [
      <Link
        removeUnderline
        url="https://www.example.com"
        key="mauve-cashmere-scarf"
      >
        Mauve Cashmere Scarf
      </Link>,
      '$230.00',
      124533,
      83,
      '$19,090.00',
    ],
    [
      <Link
        removeUnderline
        url="https://www.example.com"
        key="navy-merino-wool"
      >
        Navy Merino Wool Blazer with khaki chinos and yellow belt
      </Link>,
      '$445.00',
      124518,
      32,
      '$14,240.00',
    ],
  ];

  return (
    <Page title="Sales by product">
      <Card>
        <DataTable
          columnContentTypes={[
            'text',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
          ]}
          headings={['Product', 'Price', 'SKU Number', 'Quantity', 'Net sales']}
          rows={rows}
          totals={['', '', '', 255, '$155,830.00']}
        />
      </Card>
    </Page>
  );
}

export function WithAllOfItsElements() {
  const [sortedRows, setSortedRows] = useState<any[]>();

  const initiallySortedRows = [
    [
      <Link
        removeUnderline
        url="https://www.example.com"
        key="emerald-silk-gown"
      >
        Emerald Silk Gown
      </Link>,
      '$875.00',
      124689,
      140,
      '$121,500.00',
    ],
    [
      <Link
        removeUnderline
        url="https://www.example.com"
        key="mauve-cashmere-scarf"
      >
        Mauve Cashmere Scarf
      </Link>,
      '$230.00',
      124533,
      83,
      '$19,090.00',
    ],
    [
      <Link
        removeUnderline
        url="https://www.example.com"
        key="navy-merino-wool"
      >
        Navy Merino Wool Blazer with khaki chinos and yellow belt
      </Link>,
      '$445.00',
      124518,
      32,
      '$14,240.00',
    ],
  ];

  const rows = sortedRows ? sortedRows : initiallySortedRows;
  const handleSort = useCallback(
    (index, direction) => setSortedRows(sortCurrency(rows, index, direction)),
    [rows],
  );

  return (
    <Page title="Sales by product">
      <Card>
        <DataTable
          columnContentTypes={[
            'text',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
          ]}
          headings={[
            'Product',
            'Price',
            'SKU Number',
            'Net quantity',
            'Net sales',
          ]}
          rows={rows}
          totals={['', '', '', 255, '$155,830.00']}
          sortable={[false, true, false, false, true]}
          defaultSortDirection="descending"
          initialSortColumnIndex={4}
          onSort={handleSort}
          footerContent={`Showing ${rows.length} of ${rows.length} results`}
          stickyHeader
          fixedFirstColumns={1}
          truncate
        />
      </Card>
    </Page>
  );
}

export function WithColumnSpanning() {
  const rows = [
    [
      'Sep 19, 2010, 1:02 pm NDT',
      '#1234',
      'Adjustment',
      '$1.00',
      '$1.00',
      '$1.00',
      '$1.00',
      '$1.00',
    ],
    // eslint-disable-next-line react/jsx-key
    [<Card>Hello</Card>],
    [
      'Sep 19, 2010, 1:02 pm NDT',
      '#1234',
      'Adjustment',
      '$1.00',
      '$1.00',
      '$1.00',
      '$1.00',
      '$1.00',
    ],
  ];

  return (
    <Page title="Payouts">
      <Card>
        <DataTable
          columnContentTypes={[
            'text',
            'text',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
          ]}
          headings={[
            'transactionDate',
            'reference',
            'type',
            'amount',
            'fee',
            'net',
            'gross',
            'number',
          ]}
          rows={rows}
          verticalAlign="middle"
        />
      </Card>
    </Page>
  );
}

export function WithFixedColumns() {
  const rows = [
    [
      'Emerald Silk Gown',
      'Formalwear',
      "Jill's formal",
      10,
      '$875.00',
      124689,
      140,
      '$426.00',
      '$122,500.00',
    ],
    [
      'Mauve Cashmere Scarf',
      'Accessories',
      "Jack's Accessories",
      253,
      '$230.00',
      124533,
      83,
      '$620.00',
      '$19,090.00',
    ],
    [
      'Navy Merino Wool Blazer with khaki chinos and yellow belt',
      'Ensembles',
      'Avocado Fashions',
      23,
      '$445.00',
      124518,
      32,
      '$353.00',
      '$14,240.00',
    ],
    [
      'Socks',
      'Essentials',
      'Avocado Fashions',
      465,
      '$4.00',
      124518,
      32,
      '$3.00',
      '$140.00',
    ],
  ];

  return (
    <Page title="Sales by product">
      <Card>
        <DataTable
          columnContentTypes={[
            'text',
            'text',
            'text',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
          ]}
          headings={[
            'Product',
            'Category',
            'Vendor',
            'Orders',
            'Price',
            'SKU Number',
            'Net quantity',
            'Shipping',
            'Net sales',
          ]}
          rows={rows}
          totals={['', '', '', '', '', '', 255, '$1399', '$155,830.00']}
          initialSortColumnIndex={4}
          stickyHeader
          fixedFirstColumns={3}
          truncate
          showTotalsInFooter
          footerContent={`Showing ${rows.length} of ${rows.length} results`}
        />
      </Card>
    </Page>
  );
}

export function WithIncreasedDensityAndZebraStriping() {
  const rows = [
    [
      <Link
        removeUnderline
        url="https://www.example.com"
        key="emerald-silk-gown"
      >
        Emerald Silk Gown
      </Link>,
      '$875.00',
      124689,
      140,
      '$121,500.00',
    ],
    [
      <Link
        removeUnderline
        url="https://www.example.com"
        key="mauve-cashmere-scarf"
      >
        Mauve Cashmere Scarf
      </Link>,
      '$230.00',
      124533,
      83,
      '$19,090.00',
    ],
    [
      <Link
        removeUnderline
        url="https://www.example.com"
        key="navy-merino-wool"
      >
        Navy Merino Wool Blazer with khaki chinos and yellow belt
      </Link>,
      '$445.00',
      124518,
      32,
      '$14,240.00',
    ],
  ];

  return (
    <Page title="Sales by product">
      <Card>
        <DataTable
          columnContentTypes={[
            'text',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
          ]}
          headings={[
            'Product',
            'Price',
            'SKU Number',
            'Net quantity',
            'Net sales',
          ]}
          rows={rows}
          totals={['', '', '', 255, '$155,830.00']}
          defaultSortDirection="descending"
          initialSortColumnIndex={4}
          footerContent={`Showing ${rows.length} of ${rows.length} results`}
          hasZebraStripingOnData
          increasedTableDensity
        />
      </Card>
    </Page>
  );
}

export function WithStickyHeaderEnabled() {
  const rows = [
    [
      <Link
        removeUnderline
        url="https://www.example.com"
        key="emerald-silk-gown"
      >
        Emerald Silk Gown
      </Link>,
      '$875.00',
      124689,
      140,
      '$121,500.00',
    ],
    [
      <Link
        removeUnderline
        url="https://www.example.com"
        key="mauve-cashmere-scarf"
      >
        Mauve Cashmere Scarf
      </Link>,
      '$230.00',
      124533,
      83,
      '$19,090.00',
    ],
    [
      <Link
        removeUnderline
        url="https://www.example.com"
        key="navy-merino-wool"
      >
        Navy Merino Wool Blazer with khaki chinos and yellow belt
      </Link>,
      '$445.00',
      124518,
      32,
      '$14,240.00',
    ],
    [
      <Link
        removeUnderline
        url="https://www.example.com"
        key="emerald-silk-gown"
      >
        Emerald Silk Gown
      </Link>,
      '$875.00',
      124689,
      140,
      '$121,500.00',
    ],
    [
      <Link
        removeUnderline
        url="https://www.example.com"
        key="mauve-cashmere-scarf"
      >
        Mauve Cashmere Scarf
      </Link>,
      '$230.00',
      124533,
      83,
      '$19,090.00',
    ],
    [
      <Link
        removeUnderline
        url="https://www.example.com"
        key="navy-merino-wool"
      >
        Navy Merino Wool Blazer with khaki chinos and yellow belt
      </Link>,
      '$445.00',
      124518,
      32,
      '$14,240.00',
    ],
    [
      <Link
        removeUnderline
        url="https://www.example.com"
        key="emerald-silk-gown"
      >
        Emerald Silk Gown
      </Link>,
      '$875.00',
      124689,
      140,
      '$121,500.00',
    ],
    [
      <Link
        removeUnderline
        url="https://www.example.com"
        key="mauve-cashmere-scarf"
      >
        Mauve Cashmere Scarf
      </Link>,
      '$230.00',
      124533,
      83,
      '$19,090.00',
    ],
    [
      <Link
        removeUnderline
        url="https://www.example.com"
        key="navy-merino-wool"
      >
        Navy Merino Wool Blazer with khaki chinos and yellow belt
      </Link>,
      '$445.00',
      124518,
      32,
      '$14,240.00',
    ],
    [
      <Link
        removeUnderline
        url="https://www.example.com"
        key="emerald-silk-gown"
      >
        Emerald Silk Gown
      </Link>,
      '$875.00',
      124689,
      140,
      '$121,500.00',
    ],
    [
      <Link
        removeUnderline
        url="https://www.example.com"
        key="mauve-cashmere-scarf"
      >
        Mauve Cashmere Scarf
      </Link>,
      '$230.00',
      124533,
      83,
      '$19,090.00',
    ],
    [
      <Link
        removeUnderline
        url="https://www.example.com"
        key="navy-merino-wool"
      >
        Navy Merino Wool Blazer with khaki chinos and yellow belt
      </Link>,
      '$445.00',
      124518,
      32,
      '$14,240.00',
    ],
    [
      <Link
        removeUnderline
        url="https://www.example.com"
        key="emerald-silk-gown"
      >
        Emerald Silk Gown
      </Link>,
      '$875.00',
      124689,
      140,
      '$121,500.00',
    ],
    [
      <Link
        removeUnderline
        url="https://www.example.com"
        key="mauve-cashmere-scarf"
      >
        Mauve Cashmere Scarf
      </Link>,
      '$230.00',
      124533,
      83,
      '$19,090.00',
    ],
    [
      <Link
        removeUnderline
        url="https://www.example.com"
        key="navy-merino-wool"
      >
        Navy Merino Wool Blazer with khaki chinos and yellow belt
      </Link>,
      '$445.00',
      124518,
      32,
      '$14,240.00',
    ],
    [
      <Link
        removeUnderline
        url="https://www.example.com"
        key="emerald-silk-gown"
      >
        Emerald Silk Gown
      </Link>,
      '$875.00',
      124689,
      140,
      '$121,500.00',
    ],
    [
      <Link
        removeUnderline
        url="https://www.example.com"
        key="mauve-cashmere-scarf"
      >
        Mauve Cashmere Scarf
      </Link>,
      '$230.00',
      124533,
      83,
      '$19,090.00',
    ],
    [
      <Link
        removeUnderline
        url="https://www.example.com"
        key="navy-merino-wool"
      >
        Navy Merino Wool Blazer with khaki chinos and yellow belt
      </Link>,
      '$445.00',
      124518,
      32,
      '$14,240.00',
    ],
  ];

  return (
    <Page title="Sales by product">
      <Card>
        <DataTable
          columnContentTypes={[
            'text',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
          ]}
          headings={[
            'Product',
            'Price',
            'SKU Number',
            'Net quantity',
            'Net sales',
          ]}
          rows={rows}
          totals={['', '', '', 255, '$155,830.00']}
          defaultSortDirection="descending"
          initialSortColumnIndex={4}
          footerContent={`Showing ${rows.length} of ${rows.length} results`}
          hasZebraStripingOnData
          increasedTableDensity
          stickyHeader
        />
      </Card>
    </Page>
  );
}
