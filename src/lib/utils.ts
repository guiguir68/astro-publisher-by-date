import type { HTMLElement as ParserHTMLElement } from "node-html-parser";
import moment from 'moment';

export default function needToRemove(
  root: HTMLElement | ParserHTMLElement
) {
  const currentDate = moment();
  const metaList = root.querySelectorAll("meta");

  for (const meta of metaList) {
    const id = meta.getAttribute("property");

    if (id === "article:published_time") continue;

    const pubDate = moment(meta.getAttribute("content"));
    if (pubDate && pubDate.isAfter(currentDate, 'day')) {
      return true;
    }
      return false;
    
  }
}
