interface ITypographyContent {
  children?: JSX.Element | string | never[];
  className?: string;
}

function H1({ children, className }: ITypographyContent) {
  return (
    <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}>
      { children }
    </h1>
  )
}

export function H2({ children, className }: ITypographyContent) {
  return (
    <h2 className={`mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700 ${className}`}>
      { children }
    </h2>
  )
}

export function H3({ children, className }: ITypographyContent) {
  return (
    <h3 className={`mt-8 scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}>
      { children }
    </h3>
  )
}

export function H4({ children, className }: ITypographyContent) {
  return (
    <h4 className={`mt-8 scroll-m-20 text-xl font-semibold tracking-tight ${className}`}>
      { children }
    </h4>
  )
}

export function P({ children, className }: ITypographyContent) {
  return (
    <p className={`"leading-7 [&:not(:first-child)]:mt-6" ${className}`}>
      { children }
    </p>
  )
}

export function Blockquote({ children, className }: ITypographyContent) {
  return (
    <blockquote className={`mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 dark:border-slate-600 dark:text-slate-200 ${className}`}>
      { children }
    </blockquote>
  )
}

export function InlineCode({ children, className }: ITypographyContent) {
  return (
    <code className={`relative rounded bg-slate-100 py-[0.2rem] px-[0.3rem] font-mono text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 ${className}`}>
      { children }
    </code>
  )
}

export function Lead({ children, className }: ITypographyContent) {
  return (
    <p className={`text-xl text-slate-700 dark:text-slate-400 ${className}`}>
      { children }
    </p>
  )
}

export function Large({ children, className }: ITypographyContent) {
  return (
    <div className={`text-lg font-semibold text-slate-900 dark:text-slate-50 ${className}`}>
      { children }
    </div>
  )
}

export function Small({ children, className }: ITypographyContent) {
  return (
    <small className={`text-sm font-medium leading-none ${className}`}>
      { children }
    </small>
  )
}

export function Subtle({ children, className }: ITypographyContent) {
  return (
    <p className={`text-sm text-slate-500 dark:text-slate-400 ${className}`}>
      { children }
    </p>
  )
}

export const Typography = {
  H1,
  H2,
  H3,
  H4,
  P,
  Blockquote,
  InlineCode,
  Lead,
  Large,
  Small,
  Subtle
};