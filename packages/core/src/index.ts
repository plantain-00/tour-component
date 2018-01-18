/**
 * @public
 */
export type TourData = {
  steps: Step[],
  localStorageKey: string;
  index: number;
}

/**
 * @public
 */
export type Step = {
  left?: string | (() => string);
  right?: string | (() => string);
  top?: string | (() => string);
  bottom?: string | (() => string);
  direction: 'left' | 'right' | 'top' | 'bottom';
  content: string;
  next: string;
  scrollTop?: number;
  targetElementId?: string;
}

/**
 * @public
 */
export function getPosition (position?: string | (() => string)) {
  if (typeof position === 'string') {
    return position
  }
  if (typeof position === 'function') {
    return position()
  }
  return undefined
}

/**
 * @public
 */
export function getStepPosition (step: Step | null) {
  return step ? {
    left: getPosition(step.left),
    right: getPosition(step.right),
    top: getPosition(step.top),
    bottom: getPosition(step.bottom)
  } : {}
}

/**
 * @public
 */
export function highlight (step: Step) {
  if (step.targetElementId) {
    const target = document.getElementById(step.targetElementId)
    if (target) {
      target.classList.add('tour-highlight')
    }
  }
}

/**
 * @public
 */
export function unhighlight (steps: Step[]) {
  for (const step of steps) {
    if (step.targetElementId) {
      const target = document.getElementById(step.targetElementId)
      if (target) {
        target.classList.remove('tour-highlight')
      }
    }
  }
}
