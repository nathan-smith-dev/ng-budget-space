import { trigger, style, transition, animate } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(100)
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate(
      100,
      style({
        opacity: 0
      })
    )
  ])
]);
