import { SET_CHOSEN_NEWS_SOURCES } from "../../constants";

export function SetChosenNewsSources(sources) {
  const quantity = sources.length;
  return {
    type: SET_CHOSEN_NEWS_SOURCES,
    sources: {
      quantity,
      items: sources
    }
  };
}
