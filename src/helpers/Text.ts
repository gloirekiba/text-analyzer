import { Blob } from "buffer";

export default class Text {
  // remove punctuation, and split on whitespace

  static totalWordsClean(text: string): number {
    const regex = /[a-z0-9]+/gi;
    const words = text.match(regex);
    return words ? words.length : 0;
  }

  static uniqueWordsClean(text: string): number {
    const regex = /[a-z0-9]+/gi;
    const words = text.match(regex);
    return words ? new Set(words).size : 0;
  }

  static averageWordLength(text: string): string | number {
    const regex = /[a-z0-9]+/gi;
    const words = text.match(regex);
    if (!words) return 0;
    const total = words.reduce((acc, word) => acc + word.length, 0);
    return (total / words.length).toFixed(2);
  }

  static totalCharactersNoSpaces(text: string): number {
    return text.replace(/\s/g, "").length;
  }

  static totalSentences(text: string): number {
    const regex = /[.?!]+/g;
    const sentences = text.match(regex);
    return sentences ? sentences.length : 0;
  }

  // word repetition

  static wordRepetition(text: string): { [key: string]: number } {
    const regex = /[a-z0-9]+/gi;
    const words = text.match(regex);
    if (!words) return {};
    const counts: { [key: string]: number } = {};
    words.forEach((word) => {
      if (counts[word]) {
        counts[word]++;
      } else {
        counts[word] = 1;
      }
    });
    return counts;
  }

  static shortestWord(text: string): string {
    const regex = /[a-z0-9]+/gi;
    const words = text.match(regex);
    if (!words) return "";
    const shortest = words.reduce((acc, word) =>
      word.length < acc.length ? word : acc
    );
    return `${shortest} (${shortest.length})`;
  }

  static longestWord(text: string): string {
    const regex = /[a-z0-9]+/gi;
    const words = text.match(regex);
    if (!words) return "";
    const longest = words.reduce((acc, word) =>
      word.length > acc.length ? word : acc
    );
    return `${longest} (${longest.length})`;
  }

  static size(text: string): string {
    let bytes = new Blob([text]).size;
    const units = ["B", "KB", "MB", "GB", "TB"];
    let unit = 0;
    while (bytes > 1024) {
      bytes /= 1024;
      unit++;
    }
    return `${bytes.toFixed(2)} ${units[unit]}`;
  }
}
