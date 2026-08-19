// PAC Magic rules engine — intentionally separate from the UI.
// Production version should add tests, effective-date handling, conflict resolution,
// local filing-officer data, and authoritative source/version verification.

export function evaluate(profile, rules) {
  const hits = [];
  for (const rule of rules.rules || []) {
    if (rule.status !== "active") continue;
    if (matches(rule.trigger, profile)) hits.push(rule);
  }
  return {
    version: rules.version,
    matchedRules: hits.map(r => ({
      id: r.id,
      category: r.result.category,
      message: r.result.message,
      review: !!r.result.review,
      source: r.source
    }))
  };
}

function matches(node, profile) {
  if (!node) return true;
  if (node.all) return node.all.every(x => matches(x, profile));
  if (node.any) return node.any.some(x => matches(x, profile));

  const field = node.field;
  const value = profile[field];

  if ("eq" in node) return value === node.eq;
  if ("in" in node) return node.in.includes(value);
  if ("gte" in node) return Number(value || 0) >= Number(node.gte);
  if ("gt" in node) return Number(value || 0) > Number(node.gt);
  if ("lte" in node) return Number(value || 0) <= Number(node.lte);
  if ("lt" in node) return Number(value || 0) < Number(node.lt);
  return false;
}
