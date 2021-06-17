import removeFinalCharacter from "./removeFinalCharacter";

/**
 * A unit of time for status updates.
 *
 * Rather than being an unrestricted string (which would allow nonsense units of time like "banana elephant embezzler"), we use a union of literal types.
 *
 * Docs: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
 */
export type TimeUnit = "minutes" | "hours" | "days";

/**
 * Generate a string representing the amount of time
 * @param count how many of the time unit there are
 * @param unit the unit of time
 * @returns a formatted time string
 */
function formTimeString(count: number, unit: TimeUnit): string {
  // remove the final character from unit if count is exactly 1
  const compensatedUnit = count === 1 ? removeFinalCharacter(unit) : unit;

  if (unit === "hours") {
    return `about ${count} ${compensatedUnit}`;
  } else {
    return `${count} ${compensatedUnit}`;
  }
}

export default formTimeString;
