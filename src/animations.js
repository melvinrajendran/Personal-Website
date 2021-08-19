const fadeInFromLeft = {
  translateX: [-75, 0],
  opacity: [0, 1],
  duration: 1000,
  easing: "easeOutCubic"
};

const fadeInFromRight = {
  translateX: [75, 0],
  opacity: [0, 1],
  duration: 1000,
  easing: "easeOutCubic"
};

const fadeInFromTop = {
  translateY: [-75, 0],
  opacity: [0, 1],
  duration: 1000,
  easing: "easeOutCubic"
};

const fadeInFromBottom = {
  translateY: [75, 0],
  opacity: [0, 1],
  duration: 1000,
  easing: "easeOutCubic"
};

const fadeInManyFromLeft = {
  translateX: [-75, 0],
  opacity: [0, 1],
  duration: 1000,
  easing: "easeOutCubic",
  delay: (el, i) => i * 500
};

const fadeInManyFromRight = {
  translateX: [75, 0],
  opacity: [0, 1],
  duration: 1000,
  easing: "easeOutCubic",
  delay: (el, i) => i * 500
};

const fadeInManyFromTop = {
  translateY: [-75, 0],
  opacity: [0, 1],
  duration: 1000,
  easing: "easeOutCubic",
  delay: (el, i) => i * 500
};

const fadeInManyFromBottom = {
  translateY: [75, 0],
  opacity: [0, 1],
  duration: 1000,
  easing: "easeOutCubic",
  delay: (el, i) => i * 500
};

const fadeInListFromLeft = {
  translateX: [-75, 0],
  opacity: [0, 1],
  duration: 1000,
  easing: "easeOutCubic",
  delay: (el, i) => i * 250
};

const fadeInListFromRight = {
  translateX: [75, 0],
  opacity: [0, 1],
  duration: 1000,
  easing: "easeOutCubic",
  delay: (el, i) => i * 250
};

const fadeInListFromTop = {
  translateY: [-75, 0],
  opacity: [0, 1],
  duration: 1000,
  easing: "easeOutCubic",
  delay: (el, i) => i * 250
};

const fadeInListFromBottom = {
  translateY: [75, 0],
  opacity: [0, 1],
  duration: 1000,
  easing: "easeOutCubic",
  delay: (el, i) => i * 250
};

const fadeIn = {
  fadeInFromLeft,
  fadeInFromRight,
  fadeInFromTop,
  fadeInFromBottom,
  fadeInManyFromLeft,
  fadeInManyFromRight,
  fadeInManyFromTop,
  fadeInManyFromBottom,
  fadeInListFromLeft,
  fadeInListFromRight,
  fadeInListFromTop,
  fadeInListFromBottom
};

export default fadeIn;

export { fadeInFromLeft, fadeInFromRight, fadeInFromTop, fadeInFromBottom, fadeInManyFromLeft, fadeInManyFromRight, fadeInManyFromTop, fadeInManyFromBottom, fadeInListFromLeft, fadeInListFromRight, fadeInListFromTop, fadeInListFromBottom };
