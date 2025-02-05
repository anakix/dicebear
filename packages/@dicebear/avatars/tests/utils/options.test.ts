import { utils } from '../../dist';

test('Defaults should be returned in options.', () => {
  const options = utils.options.merge(
    {
      create: () => ({ attributes: { viewBox: '' }, body: '' }),
      meta: {},
      schema: {},
    },
    {}
  );

  expect(options.radius).toEqual(0);
});

test('All aliases should be overwritten.', () => {
  const options = utils.options.merge(
    {
      create: () => ({ attributes: { viewBox: '' }, body: '' }),
      meta: {},
      schema: {},
    },
    {
      b: '#FFF',
    }
  );

  expect(options.b).toEqual('#FFF');
  expect(options.background).toEqual('#FFF');
  expect(options.backgroundColor).toEqual('#FFF');
});

test('Options can be deleted.', () => {
  const options = utils.options.merge(
    {
      create: () => ({ attributes: { viewBox: '' }, body: '' }),
      meta: {},
      schema: {},
    },
    {}
  );

  delete options.b;

  expect(options.b).toEqual(undefined);
  expect(options.background).toEqual(undefined);
  expect(options.backgroundColor).toEqual(undefined);
});
