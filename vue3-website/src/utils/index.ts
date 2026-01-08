/**
 * Utility function to generate unique IDs
 */
export function generateId(prefix = 'id'): string {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`
}

/**
 * Utility function to debounce function calls
 */
export function debounce<T extends (...args: Parameters<T>) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null
  
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

/**
 * Utility function to check if viewport is mobile
 */
export function isMobile(): boolean {
  return window.innerWidth < 768
}

/**
 * Utility function to scroll to element
 */
export function scrollToElement(elementId: string, offset = 80): void {
  const element = document.getElementById(elementId)
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
