export type AnyFunction = (...args: any[]) => any;

export function withTime<Fn extends AnyFunction>(
  fn: Fn,
  label: string = "InnerFunction"
) {
  return function (...args: Parameters<Fn>): ReturnType<Fn> {
    const start = Date.now();
    const value = fn(...args);
    console.log(`${label}: ${start - Date.now()}ms`);
    return value;
  };
}

export function withTimeAsync<Fn extends AnyFunction>(
  fn: Fn,
  label: string = "InnerFunction"
) {
  return async function (
    ...args: Parameters<Fn>
  ): Promise<Awaited<ReturnType<Fn>>> {
    const start = Date.now();
    const value = await fn(...args);
    console.log(`${label}: ${Date.now() - start}ms`);
    return value;
  };
}
