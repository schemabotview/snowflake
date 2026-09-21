import type { Scene } from '@graphlearning/flow'

// §06. This section exists to prevent a specific production incident, so the code card leads: two
// identical primary keys, both accepted. Everything else on the board is the answer to "then why
// declare them at all", which is a fair question and has three real answers.
export const constraints: Scene = {
  id: 'constraints',
  title: 'Declared, and mostly not enforced',
  nodes: [
    {
      id: 'proof',
      kind: 'code',
      filename: 'this really does succeed',
      label: [
        'CREATE TABLE customers (id INT PRIMARY KEY, name STRING);',
        '',
        'INSERT INTO customers VALUES (1, \'Ada\');',
        'INSERT INTO customers VALUES (1, \'Grace\');   -- no error. two rows with id = 1',
        '',
        'ALTER TABLE customers ALTER COLUMN name SET NOT NULL;',
        'INSERT INTO customers VALUES (2, NULL);      -- THIS one fails',
      ].join('\n'),
    },
    {
      id: 'which',
      label: 'What the engine actually does',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'c-pk', label: 'PRIMARY KEY', sub: 'recorded, not enforced', pattern: 'warn', icon: 'key' },
        { id: 'c-fk', label: 'FOREIGN KEY', sub: 'recorded, not enforced', pattern: 'warn', icon: 'link' },
        { id: 'c-uq', label: 'UNIQUE', sub: 'recorded, not enforced', pattern: 'warn', icon: 'fingerprint' },
        { id: 'c-nn', label: 'NOT NULL', sub: 'enforced on every write', pattern: 'service', icon: 'circlecheck' },
      ],
    },
    {
      id: 'why',
      label: 'So why declare them',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'y-doc', label: 'They document', sub: 'the model, where the model lives', pattern: 'user', icon: 'scroll' },
        { id: 'y-bi', label: 'Tools read them', sub: 'BI and modelling tools infer joins', pattern: 'user', icon: 'barchart' },
        { id: 'y-rely', label: 'RELY can help', sub: 'lets the optimizer trust the claim', pattern: 'user', icon: 'zap' },
      ],
    },
    {
      id: 'you',
      label: 'Uniqueness is your job',
      sub: 'enforce it at load time',
      pattern: 'user',
      icon: 'merge',
    },
  ],
  edges: [
    { source: 'proof', target: 'which', label: 'checking every insert against every key would cost more than it is worth at this scale' },
    { source: 'which', target: 'why', label: 'so they are metadata, not guarantees' },
    { source: 'why', target: 'you', label: 'the duplicate you were protected from elsewhere is now yours to prevent — MERGE on the key, or QUALIFY row_number() = 1' },
  ],
}
