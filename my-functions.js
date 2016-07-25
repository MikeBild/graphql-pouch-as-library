module.exports = {
  settingByKey: settingByKey,
};

function settingByKey(ctx, input) {
  const result = {
    id: 'A',
    rev: 'B',
    key: input.key,
  };

  ctx.success(result);
}
