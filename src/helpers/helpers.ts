import Text from "./Text";

export function getTextStats(
  text: string
): { name: string; value: number | string }[] {
  return [
    { name: "Total Words", value: Text.totalWordsClean(text) },
    { name: "Unique Words", value: Text.uniqueWordsClean(text) },
    { name: "Average Word Length", value: Text.averageWordLength(text) },
    { name: "Total Characters", value: text.length },
    {
      name: "Total Characters (no spaces)",
      value: text.replace(/\s/g, "").length,
    },
    { name: "Total Sentences", value: Text.totalSentences(text) },
    { name: "Shortest Word", value: Text.shortestWord(text) },
    { name: "Longest Word", value: Text.longestWord(text) },
    { name: "Size", value: Text.size(text) },
  ];
}
