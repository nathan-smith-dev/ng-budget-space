import {
  trigger,
  style,
  transition,
  animate,
  query
} from '@angular/animations';

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

export const routerFadeAnimation = trigger('routerFadeAnimation', [
  transition('* => *', [
    query(':enter', [style({ opacity: 0 })], { optional: true }),
    query(
      ':leave',
      [style({ opacity: 1 }), animate(150, style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate(150, style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]);
