import type { Scene } from '@graphlearning/flow'

// §09. The four sections of a Snowflake Scripting block, in the order they appear, because the
// shape is the thing to memorise. EXECUTE AS gets a card of its own — owner against caller is a
// security decision hiding in a syntax slot, and the default is the safe one.
export const procedureAnatomy: Scene = {
  id: 'procedure-anatomy',
  title: 'Four sections, always in this order',
  nodes: [
    {
      id: 'sql',
      kind: 'code',
      filename: 'Snowflake Scripting',
      label: [
        'CREATE OR REPLACE PROCEDURE archive(tab STRING)',
        '  RETURNS STRING  LANGUAGE SQL  EXECUTE AS CALLER',
        'AS',
        'DECLARE',
        '  moved INT DEFAULT 0;',
        '  too_big EXCEPTION (-20001, \'more rows than expected\');',
        'BEGIN',
        '  moved := (SELECT count(*) FROM IDENTIFIER(:tab));',
        '  IF (moved > 1000000) THEN RAISE too_big; END IF;',
        '  RETURN \'archived \' || moved;',
        'EXCEPTION',
        '  WHEN too_big THEN RETURN SQLERRM;',
        'END;',
      ].join('\n'),
    },
    {
      id: 'parts',
      label: 'What each section is for',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'pt-create', label: 'CREATE', sub: 'name, args, return, language', pattern: 'service', icon: 'pencil' },
        { id: 'pt-decl', label: 'DECLARE', sub: 'variables, cursors, exceptions', pattern: 'service', icon: 'braces' },
        { id: 'pt-body', label: 'BEGIN', sub: 'the work: SQL, IF, loops', pattern: 'service', icon: 'code' },
        { id: 'pt-exc', label: 'EXCEPTION', sub: 'what to do when it goes wrong', pattern: 'service', icon: 'shieldcheck' },
      ],
    },
    {
      id: 'rights',
      label: 'CALLER or OWNER',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'rg-caller', label: 'EXECUTE AS CALLER', sub: 'runs with the caller’s own rights', pattern: 'user', icon: 'usercheck' },
        { id: 'rg-owner', label: 'EXECUTE AS OWNER', sub: 'lends yours — a privilege boundary', pattern: 'warn', icon: 'key' },
      ],
    },
  ],
  edges: [
    { source: 'sql', target: 'parts', label: 'a colon marks a variable used inside SQL — :tab, not tab' },
    { source: 'parts', target: 'rights', label: 'and one clause decides whose privileges the body runs with' },
  ],
}
