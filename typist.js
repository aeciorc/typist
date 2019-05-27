// @author: Aecio Cavalcanti

// @params
// @text: whatever text you want to be typed
// @handler: the function that modifies the element where the text is display.
//    It's called with the visible text as th sole argument

//For authorship info on the noise function, see the headers on the source
import noise from "./noise";

function random(n) {
  return Math.random(0, n) * n;
}

export const typist = (text, handler) => {
  let start,
    seed = 0;
  let end = 1;
  let visible = "";

  const type = () => {
    if (end >= text.length) return;
    visible = text.slice(start, end++);
    handler(visible);
    if (random(10) <= 0.25) {
      visible =
        visible.slice(0, visible.length - 1) +
        text[parseInt(random(text.length - 1))];
      end = end <= 0 ? 0 : --end;
      setTimeout(type, 175);
      return;
    }

    if ([".", "!", "."].includes(text[end - 2])) {
      setTimeout(type, 800);
      return;
    } else if (text[end - 2] === ",") {
      setTimeout(type, 400);
      return;
    }

    setTimeout(type, 100 * noise(++seed));
  };

  type();
};

export default typist;
