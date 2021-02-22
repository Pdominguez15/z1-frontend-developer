import { CheckImage } from "./checkImage.api-model";

const checkImageUrl = "https://front-exercise.z1.digital/evaluations";

export const checkImage = async (signal: AbortSignal): Promise<CheckImage> => {
  //Fetch
  const response = await fetch(checkImageUrl, {
    method: "POST",
    signal: signal,
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw Error(response.statusText);
  }
};
