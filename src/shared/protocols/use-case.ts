export abstract class UseCase<U> {
  abstract execute(...args: any[]): Promise<U>
}
