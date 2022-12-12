export abstract class UseCase<T, U> {
  abstract execute(values: T, ...args: any[]): Promise<U>
}
