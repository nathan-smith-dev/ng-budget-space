import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  state('in', style({})),
  transition('void => *', [
    style({
      opacity: 0
    }),
    animate(100)
  ]),
  transition('* => void', [
    animate(
      100,
      style({
        opacity: 0
      })
    )
  ])
]);
