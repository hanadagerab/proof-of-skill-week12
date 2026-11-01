/** A single generated input snapshot supplies both the summary and persisted record. */
export function buildSubmissionRecord(userId, input, summary) {
  return {
    user_id: userId,
    task_slug: 'financial-analyst-v1',
    answers: {
      revenue: input.revenue,
      cost: input.cost,
      claimedMargin: input.claimedMargin,
      sourceNotes: input.sourceNotes,
      isSynthetic: input.isSynthetic
    },
    disclosure: {assistance: input.assistance},
    summary
  };
}
