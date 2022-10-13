export default class Text {
  // remove punctuation, and split on whitespace

  static totalWordsClean(text: string): number {
    return text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(/\s+/).length;
  }
}
